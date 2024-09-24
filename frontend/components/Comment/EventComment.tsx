import React from 'react';
import EventCommentItems from './EventCommentItems';
import CommentInput from './CommentInput';
import Image from 'next/image';

const EventComment = () => {
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
          11555: Comments
        </h3>
      </div>
      <CommentInput />
      <EventCommentItems />
      <EventCommentItems />
    </div>
  );
};

export default EventComment;