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