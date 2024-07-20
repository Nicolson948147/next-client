"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { KINDE_USER_ID, TOKEN } from "./contants";

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem(TOKEN);
    // const parsedToken = token ? JSON.parse(token) : {};
    // const kindleUserId = localStorage.getItem(KINDE_USER_ID);

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : undefined,
        // kinde_user_id: user?.id || kindleUserId,
      },
    };
  });

  const link = authLink.concat(httpLink);

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            link,
          ])
        : link,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={() => makeClient()}>
      {children}
    </ApolloNextAppProvider>
  );
}
