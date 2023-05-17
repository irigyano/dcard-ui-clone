export type ArticleType = {
  id: number;
  title: string;
  excerpt: string;
  anonymousSchool: boolean;
  anonymousDepartment: boolean;
  pinned: boolean;
  forumId: string;
  replyId: number;
  //   createdAt: Date;
  //   updatedAt: Date;
  commentCount: number;
  likeCount: number;
  collectionCount: number;
  withNickname: boolean;
  tags: any[];
  topics: string[];
  meta: Meta;
  forumName: string;
  forumAlias: string;
  nsfw: boolean;
  gender: string;
  replyTitle: string;
  reportReason: string;
  reactions: Reaction[];
  hidden: boolean;
  customStyle: null;
  isSuspiciousAccount: boolean;
  isModerator: boolean;
  layout: string;
  spoilerAlert: boolean;
  withImages: boolean;
  withVideos: boolean;
  media: Media[];
  reportReasonText: string;
  supportedReactions: null;
  isSelectedPost: boolean;
  unsafe: boolean;
  enablePrivateMessage: boolean;
  enableNestedComment: boolean;
  totalCommentCount: number;
  mediaMeta: MediaMeta[];
  edited: boolean;
  identityIdV3: string;
  postAvatar: string;
  activityAvatar: string;
  verifiedBadge: boolean;
  memberType: string;
};

export type Media = {
  url: string;
};

export type MediaMeta = {
  id: string;
  url: string;
  normalizedUrl: string;
  thumbnail: string;
  type: string;
  tags: string[];
  //   createdAt: Date;
  //   updatedAt: Date;
  width: number;
  height: number;
  blurhash: string;
};

export type Meta = {
  layout: string;
};

export type Reaction = {
  id: string;
  count: number;
};
