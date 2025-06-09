interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  tags: string[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export { Post };
