export interface Comment {
    id: number,
    userID: string,
    courseID: number,
    message: string,
}

interface Video {
    id: number,
    url: string,
}

interface Course {
    id: number,
    title: string,
    thumbnail: string,
    creator: string,
    tags: string[],
    videos: Video[],
    rating: number,
    comments: Comment[],
}

interface User {
    id: string,
    username: string,
    email: string,
    password: string,
    courses: Course[],
}

interface Database {
    users: User[],
    videos: Video[],
    comments: Comment[],
    courses: Course[],
}
