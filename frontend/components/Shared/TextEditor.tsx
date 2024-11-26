import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';

import ToolbarEditor from './ToolbarEditor';

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Document,
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose w-full min-h-[350px] lg:prose-lg xl:prose-xl hover:border-none focus:border-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0',
      },
    },
    content: '<p>Hello World!</p>',
  });

  return (
    <div className='w-full flex flex-col min-h-[350px]'>
      <ToolbarEditor editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;