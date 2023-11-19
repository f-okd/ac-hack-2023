import { useEffect, useState } from "react";
import { BotIcon } from "./bot-icon";

export function LoadingMessage() {
  const [content, setContent] = useState(".");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContent((content) => (content.length < 3 ? content + "." : "."));
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <article className="chat chat-start">
      <BotIcon />

      <div className="chat-header">
        <span>Charlie</span>
      </div>

      <div className="chat-bubble min-w-[3rem] opacity-50">{content}</div>
    </article>
  );
}
