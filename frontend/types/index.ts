export type useDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export type DeleteConfirmProps = {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export type DotButtonProps = {
  selected: boolean;
  onClick: () => void;
};

export type AvatarUserProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  decoding?: 'async' | 'sync' | 'auto';
  className?: string;
};

export type BreadcrumbProps = {
  items: {
    label: string;
    href: string;
  }[];
};

export type ProfileDropDownProps = {
  userName: string;
  userRole: string;
  onAccountInfoClick: () => void;
  onMyPostsClick: () => void;
  onHelpFeedbackClick: () => void;
  onLogoutClick: () => void;
};

export type PostCardProps = {
  idx: number;
  imageSrc: string;
  title: string;
  author: string;
  date: string;
  onBookmarkClick: () => void;
};

export type UserCardProps = {
  avatarImage: string;
  userName: string;
};

export type NewsCardProps = {
  title: string;
  imageUrl: string;
};

export type PostDetailCardProps = {
  title: string;
  data: string;
};

export type ImageCardProps = {
  
};

export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
};

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
};

