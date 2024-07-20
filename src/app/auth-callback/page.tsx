"use client";
import { CONFIGURATION_ID, KINDE_USER_ID } from "@/lib/contants";
import { useQuery } from "@apollo/client";
import React, { use, useEffect } from "react";
import { GET_AUTH_STATUS } from "../api/graphql/user";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { GetAuthStatusDocument } from "@/__generated__/graphql";
import useUser from "@/hooks/useAuthStatus";
import WrappedLayout from "../WrappedLayout";

function Page() {
  const [configurationId, setConfigurationId] = React.useState<string | null>(
    null
  );
  const router = useRouter();

  const { data } = useUser();

  useEffect(() => {
    const localConfigurationId = localStorage.getItem(CONFIGURATION_ID);
    if (localConfigurationId) {
      setConfigurationId(localConfigurationId);
    }

    if (data?.getAuthStatus?.success) {
      if (configurationId) {
        localStorage.removeItem(CONFIGURATION_ID);
        router.push(`/configure/preview?id=${configurationId}`);
        router.refresh();
        return;
      }
      router.push("/");
      router.refresh();
    }
  }, [configurationId, data, router]);

  return (
    <WrappedLayout>
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
          <h3 className="font-semibold text-xl">Logged you in ....</h3>
          <p>You will redirected automatically</p>
        </div>
      </div>
    </WrappedLayout>
  );
}

export default Page;
