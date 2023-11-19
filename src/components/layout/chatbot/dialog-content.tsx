import { forwardRef, useEffect, useRef, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { Dialog } from "@headlessui/react";

import type { Message } from "@/types";
import { ChatBotMessage } from "./chat-message";
import { MessageInput } from "./message-input";
import { LoadingMessage } from "./loading-message";

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 *
 * https://stackoverflow.com/a/1527820
 */
function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

async function sendMessageToApi(messages: Message[], content: string) {
  const response = await fetch("/api/sendChatMessage", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      messages,
      content,
    }),
  });

  const data = await response.json();
  console.log(data);
  console.log(typeof data);
  return JSON.parse(data) as { response: string };
}

export interface ChatBotDialogContentProps {
  closeModal: () => void;
}

export const ChatBotDialogContent = forwardRef<
  HTMLDivElement,
  ChatBotDialogContentProps
>(function ChatBotDialogContent({ closeModal }, ref) {
  const [messages, setMessages] = useState<Message[]>([]);

  const [loading, setLoading] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TODO: load messages from api
    // async function loadMessages() {
    //   const messages = await getMessagesFromApi();
    //   setMessages(messages);
    // }
    // loadMessages();
  }, []);

  const handleMessage = async (content: string) => {
    setMessages((messages) => [
      ...messages,
      {
        content,
        role: "user",
      },
    ]);
    // Wait a bit before showing loading so it looks more realistic
    setTimeout(
      () => {
        setLoading(true);
      },
      getRandomArbitrary(350, 650),
    );

    const { response } = await sendMessageToApi(messages, content);
    setMessages((messages) => [
      ...messages,
      {
        role: "assistant",
        content: response,
      },
    ]);

    setLoading(false);
  };

  // Scroll to bottom of messages on update
  useEffect(() => {
    const messagesContainer = messagesContainerRef.current;
    if (!messagesContainer) return;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  return (
    <Dialog.Panel
      className="flex min-h-[75dvh] w-screen max-w-xl flex-col rounded-2xl bg-base-100 p-6 shadow-lg"
      ref={ref}
    >
      <Dialog.Title as="h1" className="text-xl font-semibold flex">
        Charlie

        <button
          type="button"
          className="ml-auto"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <HiXMark />
        </button>
      </Dialog.Title>
      {/* <h1 className="mx-auto text-xl font-semibold underline">Charlie</h1> */}
      <div className="relative m-1 flex-grow">
        <div
          className="absolute inset-0 max-h-full overflow-y-auto"
          ref={messagesContainerRef}
        >
          {messages.map((message, index) => (
            <ChatBotMessage key={index} {...message} />
          ))}
          {loading && <LoadingMessage />}
        </div>
      </div>
      <div className="p-1 md:p-4">
        <MessageInput onMessage={handleMessage} loading={loading} />
      </div>
    </Dialog.Panel>
  );
});
