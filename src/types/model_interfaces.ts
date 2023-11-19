import type { StaticImageData } from "next/image";

export interface Comment {
  id: number;
  userID: string;
  courseID: number;
  message: string;
}

export interface Video {
  id: number;
  url: string;
}

export interface Course {
  id: number;
  title: string;
  thumbnail: string | StaticImageData;
  creator: string;
  tags: string[];
  videos: Video[];
  rating: number;
  comments: Comment[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  courses: Course[];
}

export interface Database {
  users: User[];
  videos: Video[];
  comments: Comment[];
  courses: Course[];
}
