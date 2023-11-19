import clsx from "clsx";

import type { Message } from "@/types";
import { BotIcon } from "./bot-icon";

export type ChatBotMessageProps = Message;

// const HALF_DAY_MS = 1000 * 60 * 60 * 12;

// function formatDate(date: Date): string {
//   const now = Date.now();

//   if (now - date.getTime() > HALF_DAY_MS)
//     return date.toLocaleDateString(undefined, {
//       minute: "numeric",
//       hour: "numeric",
//       day: "numeric",
//       month: "numeric",
//       year: "numeric",
//     });

//   return date.toLocaleTimeString(undefined, {
//     minute: "numeric",
//     hour: "numeric",
//   });
// }

export function ChatBotMessage({
  // timestamp,
  role,
  content,
}: ChatBotMessageProps) {
  const isBot = role !== "user";

  return (
    <article className={clsx("chat", isBot ? "chat-start" : "chat-end")}>
      {isBot && <BotIcon />}

      <div className="chat-header space-x-1">
        {isBot && <span>Charlie</span>}

        {/* <time
          dateTime={new Date(timestamp).toISOString()}
          className="text-xs opacity-50"
        >
          {formatDate(new Date(timestamp))}
        </time> */}
      </div>

      <div className="chat-bubble">{content}</div>
      {/* <div className="chat-footer opacity-50">Delivered</div> */}
    </article>
  );
}
