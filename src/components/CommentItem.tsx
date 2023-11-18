import { CommentType } from "./CommentList";

const CommentItem = ({ comment }: { comment: CommentType }) => {
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
