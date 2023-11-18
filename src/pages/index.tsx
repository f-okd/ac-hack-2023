import Head from "next/head";
import Link from "next/link";
import { FaDiscord, FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

import type { AppPage } from "@/types";
import { Brand } from "@/components/layout/brand";

interface Provider {
  name: string;
  icon?: JSX.Element;
}

const providers: Record<string, Provider> = {
  google: {
    name: "Google",
    icon: <FaGoogle />,
  },
  facebook: {
    name: "Facebook",
    icon: <FaFacebook />,
  },
  github: {
    name: "Github",
    icon: <FaGithub />,
  },
  discord: {
    name: "Discord",
    icon: <FaDiscord />,
  },
};

const SignInPage: AppPage = () => {
  return (
    <>
      <Head>
        <title>Sign in to EduPont</title>
      </Head>
      <main className="flex h-[100dvh] flex-col items-center justify-center gap-y-8">
        <Link
          href="/"
          className="btn btn-ghost text-3xl normal-case md:btn-lg md:-mt-10 md:!text-4xl"
        >
          <Brand />
        </Link>

        <section className="flex w-full flex-col items-center gap-3 border-y-2 border-primary py-8 dark:bg-base-200 sm:mx-auto sm:max-w-md sm:rounded-box sm:border-2 sm:border-x-2 sm:px-8">
          <h1 className="text-sm">Sign in with</h1>
          <div className="grid w-full grid-cols-2 gap-3 max-sm:px-6">
            {providers &&
              Object.entries(providers).map(([id, { name, icon }]) => (
                <button
                  key={id}
                  type="button"
                  // TODO: implement sign in - use next-auth ????
                  // onClick={}
                  // gradient effect: https://youtube.com/shorts/qzZ0iQKoUQ0
                  className="btn btn-outline relative text-base normal-case before:absolute before:-inset-[1px] before:bg-gradient-to-br before:from-primary/40 before:via-transparent before:to-primary/40 before:opacity-0 before:[border-radius:inherit] hover:before:opacity-100 dark:hover:bg-white/5 dark:hover:text-base-content"
                >
                  <div className="absolute inset-[1px] flex items-center justify-center gap-3 bg-inherit [border-radius:inherit]">
                    {icon && <span className="text-2xl">{icon}</span>}
                    {name}
                  </div>
                </button>
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

SignInPage.noLayout = true;

export default SignInPage;
