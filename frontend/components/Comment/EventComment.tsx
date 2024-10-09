"use client";

import React, { useState, useEffect } from 'react';
import EventCommentItems from './EventCommentItems';
import CommentInput from './CommentInput';
import Image from 'next/image';
import axios from 'axios';
import LoaderSpinner from '../Shared/LoaderSpinner';
import { useGetAllComments } from '@/lib/react-query/queries';

const EventComment = ({ eventId }: { eventId: string }) => {

  const { data, isLoading, error } = useGetAllComments(eventId);

  // Nếu có dữ liệu, tách ra comments và commentCount
  const comments = data?.comments || [];
  const commentCount = data?.commentCount || 0;

  if (isLoading) return <LoaderSpinner />;
  if (error) return <>Error Fetching Comments</>; //

  return (
    <div className='flex flex-col gap-5 w-full bg-grey-50 px-5 py-4 rounded-xl'>
      <div className='flex flex-end items-center justify-between'>
        <h2 className='text-2xl font-bold flex items-center'>
          <Image
            src={"/assets/icons/comment.svg"}
            width={28}
            height={28}
            priority
            quality={85}
            alt='Comment'
            className='mr-2'
          />
          Comment
        </h2>
        <h3 className='text-lg font-semibold'>
          {commentCount}: Comments
        </h3>
      </div>
      <CommentInput eventId={eventId} />
      {comments.length > 0 ? (
        comments.map((comment: any) => (
          <EventCommentItems key={comment.id} comment={comment} />
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  );
};

export default EventComment;