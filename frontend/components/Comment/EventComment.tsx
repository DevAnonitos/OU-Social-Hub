"use client";

import React, { useState, useEffect } from 'react';
import EventCommentItems from './EventCommentItems';
import CommentInput from './CommentInput';
import Image from 'next/image';
import axios from 'axios';

const EventComment = ({ eventId }: { eventId: string }) => {

  const [comments, setComments] = useState<any[]>([]); 
  const [commentCount, setCommentCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/comments/${eventId}`);
        console.log(response.data);
        
        if (Array.isArray(response.data.comments)) {
          setComments(response.data.comments);
        } else {
          console.error("Comments is not an array:", response.data.comments);
          setComments([]); 
        }

        setCommentCount(response.data.commentCount);
      } catch (error: any) {
        console.log("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [eventId]);

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
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <>
          {/* Render all fetched comments */}
          {comments.map((comment: any) => (
            <EventCommentItems key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </div>
  );
};

export default EventComment;