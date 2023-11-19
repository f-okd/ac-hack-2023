import { Comment } from "@/types/model_interfaces";

const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-lg">
      <div className="text-lg font-semibold text-gray-800">
        {comment.userID}
      </div>
      <p className="mt-2 text-gray-600">{comment.message}</p>
    </div>
  );
};

export default CommentItem;
