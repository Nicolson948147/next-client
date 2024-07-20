import { GetAuthStatusDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";

const useUser = () => {
  const { data, loading } = useQuery(GetAuthStatusDocument, {
    fetchPolicy: "network-only",
  });

  return {
    loading,
    user: data?.getAuthStatus?.user,
  };
};

export default useUser;
