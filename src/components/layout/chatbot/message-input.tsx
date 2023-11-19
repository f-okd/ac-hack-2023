import { useEffect, useState } from "react";
import clsx from "clsx";
import { CgSpinner } from "react-icons/cg";
import { MdSend } from "react-icons/md";

const prompts = [
  "Send a message",
  "What's up?",
  "Confused about a topic?",
  "What don't you quite understand?",
];

export interface MessageInputProps {
  onMessage: (message: string) => void;
  loading: boolean;
}

export function MessageInput({ onMessage, loading }: MessageInputProps) {
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPromptIndex((index) => (index + 1) % prompts.length);
    }, 3500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = e.currentTarget.message.value;

    if (message) onMessage(message);
    else alert("Message cannot be empty");

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="join mt-2 w-full">
      <input
        name="message"
        type="text"
        placeholder={prompts[promptIndex]}
        className="input join-item input-bordered w-full dark:placeholder:opacity-70"
        disabled={loading}
      />
      <button
        type="submit"
        className="btn btn-circle btn-primary join-item text-lg"
        aria-label="Send message"
        disabled={loading}
      >
        <CgSpinner
          className={clsx(
            "motion-safe:animate-spin motion-reduce:hidden",
            !loading && "hidden",
          )}
        />
        <MdSend className={clsx(loading && "motion-safe:hidden")} />
      </button>
    </form>
  );
}
