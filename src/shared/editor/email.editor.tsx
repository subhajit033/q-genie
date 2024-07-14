'use client';
import React, { useEffect, useState, useRef } from 'react';
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';
import { DefaultJsonData } from '@/assets/mails/default';
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { saveEmail } from '@/actions/save.email';
import toast from 'react-hot-toast';

const Emaileditor = ({ subjectTitle }: { subjectTitle: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const { user } = useClerk();
  const emailEditorRef = useRef<EditorRef>(null);
  const router = useRouter();

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      //here design is the josn data and html is the actual html content
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onReady: EmailEditorProps['onReady'] = () => {
    const unlayer: any = emailEditorRef.current?.editor;
    unlayer.loadDesign(jsonData);
  };

  const saveDraft = async () => {
    const unlayer = emailEditorRef.current?.editor;

    try {
      unlayer?.exportHtml(async (data) => {
        //here design is the josn data and html is the actual html content
        const { design, html } = data;
        await saveEmail({
          title: subjectTitle,
          content: JSON.stringify(design),
          newsLetterOwnerId: user?.id as string,
        });
        toast.success('Email saved sucessfully');
      });
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <>
      {(
        <div className='w-full h-[90vh] relative'>
          <EmailEditor
            onReady={onReady}
            ref={emailEditorRef}
            minHeight={'80vh'}
          />
          <div className='absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3'>
            <Button
              className='bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg'
              onClick={saveDraft}
            >
              <span className='opacity-[.7]'>Save Draft</span>
            </Button>
            <Button
              className='bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg'
              onClick={exportHtml}
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Emaileditor;
