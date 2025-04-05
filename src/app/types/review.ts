export interface Review {
  author: string;
  author_details: AuthorDetails;
  content: string;
  rating_grade: string;
  created_at: string;
  updated_at: string;
  id: string;
  url: string;
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: any;
  rating: number;
}
