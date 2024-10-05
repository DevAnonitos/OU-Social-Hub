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
  }
};

export interface createCategoryParams {
  categoryName: string
}