"use client";

import React from 'react';
import { type Editor } from "@tiptap/react";
import { Toggle } from '../ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';

type ToolbarEditorProps = {
  editor: Editor | null;
};

const ToolbarEditor = ({ editor }: ToolbarEditorProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Toggle
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="w-4 h-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="w-4 h-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive('underline')}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Underline className="w-4 h-4" />
      </Toggle>
    </div>
  );
};

export default ToolbarEditor;