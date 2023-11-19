import { Comment } from "@/types/model_interfaces";

const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <div className="chat-bubble mt-4 w-full ">
      <div className="chat-footer opacity-50 font-semibold text-white">
        {comment.userID}
      </div>
      <p className="mt-2 text-white-600">{comment.message}</p>
    </div>
  );
};

export default CommentItem;
