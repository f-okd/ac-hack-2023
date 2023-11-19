import {useEffect, useState} from "react"
import CommentItem from "./CommentItem";

export interface CommentType {
    id: number;
    userID: string;
    courseID: string; 
    message: string;
}
const allComments: CommentType[] = [
  {
    id: 1,
    userID: "user1",
    courseID: "course1",
    message: "Great course! I learned a lot.",
  },
  {
    id: 2,
    userID: "user2",
    courseID: "course2",
    message: "Very informative and well-structured course.",
  },
  {
    id: 3,
    userID: "user1",
    courseID: "course3",
    message: "I would highly recommend this course.",
  },
  {
    id: 4,
    userID: "user2",
    courseID: "course4",
    message: "The instructor is very knowledgeable and engaging.",
  },
  {
    id: 5,
    userID: "Reuben",
    courseID: "course5",
    message: "I am glad I took this course.",
  },
  {
    id: 6,
    userID: "user2",
    courseID: "course1",
    message: "I would definitely take another course from this instructor.",
  },
  {
    id: 7,
    userID: "user1",
    courseID: "course2",
    message: "The course materials were very helpful.",
  },
  {
    id: 8,
    userID: "user2",
    courseID: "course3",
    message: "I am already applying what I have learned.",
  },
  {
    id: 9,
    userID: "user1",
    courseID: "course4",
    message: "The course content was very relevant to my job.",
  },
  {
    id: 10,
    userID: "Alex",
    courseID: "course5",
    message: "I learned a lot from this course.",
  },
];

// MOVE STATE UP TO COURSE + PASS IN COURSE ID AS PROPS
const commentsTestData = allComments.filter((data) => data.courseID==="course5")

const CommentList = () => {
    const [comments, setComments] = useState(commentsTestData)
    const [searchValue, setSearchValue] = useState("")
    const resultsEmpty = comments.length === 0

    const filterComments = () => {
        const currentQueryResults = comments.filter((comment) => comment.message.includes(searchValue))
        setComments(currentQueryResults)
    }

    const resetComments = () => {
        setComments(commentsTestData)
    }
    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value);
      if(searchValue.length > 3) {
        filterComments()
      } else {
        resetComments()
      }
    };

  return (
    <div className="w-full">
      <input
        className=" rounded-lg border border-gray-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search all course questions"
        onChange={(e) => handleInputChange(e)}
        value={searchValue}
      ></input>
      <div>
        {comments.map((comment, i) => (
          <CommentItem key={i} comment={comment} />
        ))}
        {resultsEmpty && <p>No Comments matching that term</p>}
      </div>
    </div>
  );
}

export default CommentList