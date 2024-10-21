export interface CreateUserParams {
  userId: string;
  event: {
    title: string;
    description: string;
    location: string;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    categoryIds: string[] | any;
    url: string;
  },
};

export interface createCommentParams {
  userId: string;
  eventId: string;
  comment: {
    content: string;
    parentId: string;
    userLikesId: string[] | any;
  },
};

export interface createCategoryParams {
  categoryName: string
};

export interface createNotificationParams {
  userId: string;
  eventId: string;
  commentContent: string;
};

export interface queriesParams {
  query?: string | any;
}