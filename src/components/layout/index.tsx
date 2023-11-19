import { NavBar } from "./navbar";
import { ChatBotButton } from "./chatbot/button";

export type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col relative">
      <div className="sticky top-0 z-30 w-full flex-none border-b border-base-300 bg-transparent backdrop-blur transition-colors dark:border-white/5">
        <NavBar />
      </div>
      {children}

      <ChatBotButton className="absolute bottom-4 right-4" />
    </div>
  );
}
