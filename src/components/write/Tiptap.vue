<template>
  <div class="editor">
    <div class="editor_header">
      <button v-for="item in menu"></button>
    </div>
    <editor-content :editor="editor" class="editor_content"></editor-content>
    <div class="editor_footer">当前字数：{{ count }}</div>
  </div>
</template>
<script lang="ts" setup>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
import { watch, onBeforeUnmount, ref } from "vue";

const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);
const count = ref<number>();
const menu = ref([{}, {}]);

let editor = new Editor({
  content: props.modelValue,
  extensions: [StarterKit, CharacterCount],
  onCreate() {
    count.value = editor.storage.characterCount.characters();
  },
  onUpdate: () => {
    emits("update:modelValue", editor.getHTML());
    count.value = editor.storage.characterCount.characters();
  },
});

watch(
  () => props.modelValue,
  (value) => {
    const isSame = editor.getHTML() === value;
    if (isSame) {
      return;
    }
    editor.commands.setContent(value, false);
  }
);

onBeforeUnmount(() => {
  editor.destroy();
});
</script>
<style scoped>
.editor {
  color: #0d0d0d;
  background-color: #fff;
  border: 3px solid #0d0d0d;
  border-radius: 4px;
  width: 900px;
  margin: 120px;
  overflow: hidden;
}
.editor_header {
  padding: 15px 30px;
  border-bottom: 3px solid #0d0d0d;
}
.editor_content {
  padding: 15px 30px;
}
.editor_footer {
  padding: 15px 30px;
}
:deep().ProseMirror:focus {
  outline: none;
}
</style>
