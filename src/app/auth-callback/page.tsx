"use client";
import { CONFIGURATION_ID, KINDE_USER_ID } from "@/lib/contants";
import { useQuery } from "@apollo/client";
import React, { use, useEffect } from "react";
import { GET_AUTH_STATUS } from "../api/graphql/user";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

function Page() {
  const [configurationId, setConfigurationId] = React.useState<string | null>(
    null
  );

  const { getUser } = useKindeBrowserClient();
  const router = useRouter();

  const user = getUser();

  const { data } = useQuery(GET_AUTH_STATUS, {
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
  });

  useEffect(() => {
    const localConfigurationId = localStorage.getItem(CONFIGURATION_ID);
    if (localConfigurationId) {
      setConfigurationId(localConfigurationId);
    }
    if (user) {
      localStorage.setItem(KINDE_USER_ID, user.id);
    }
  }, [user]);

  if (data?.getAuthStatus?.success) {
    if (configurationId) {
      localStorage.removeItem(CONFIGURATION_ID);
      router.push(`/configure/preview?id=${configurationId}`);
      return;
    }
    router.push("/");
  }

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <h3 className="font-semibold text-xl">Logged you in ....</h3>
        <p>You will redirected automatically</p>
      </div>
    </div>
  );
}

export default Page;
