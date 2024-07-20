import { GetAuthStatusDocument, KindeUser } from "@/__generated__/graphql";
import { TOKEN } from "@/lib/contants";
import { useQuery } from "@apollo/client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getCookies } from "cookies-next";
const jwt = require("jsonwebtoken");

const useAuthStatus = () => {
  const { getUser } = useKindeBrowserClient();

  let user = getUser();

  try {
    const cookies = getCookies();

    if (cookies?.user_info) {
      const userInfo = jwt.decode(cookies?.user_info);

      user = {
        id: userInfo?.sub,
        email: userInfo?.email,
        family_name: userInfo?.family_name,
        given_name: userInfo?.given_name,
        picture: userInfo?.picture,
      };
    }
  } catch (error) {}

  const { data, loading } = useQuery(GetAuthStatusDocument, {
    variables: {
      input: {
        user: {
          id: user?.id,
          email: user?.email,
          family_name: user?.family_name,
          given_name: user?.given_name,
        },
      },
    },
    pollInterval: 500,
    onCompleted: (data) => {
      if (data?.getAuthStatus?.token) {
        localStorage.setItem(TOKEN, data?.getAuthStatus?.token);
      }
    },
  });

  return {
    data,
    loading,
    user: data?.getAuthStatus?.user,
  };
};

export default useAuthStatus;
