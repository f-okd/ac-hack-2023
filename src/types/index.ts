import type { NextPage } from "next";

export type AppPage<P = {}, IP = P> = NextPage<P, IP> & {
  /**
   * If `false`, doesn't use the `Layout` component for this page.
   */
  noLayout?: boolean;
};
