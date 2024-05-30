"use client";
import { GET_CONFIGURATION } from "@/app/api/graphql/configuration";
import { useQuery } from "@apollo/client";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfigurator from "./DesignConfigurator";
import { GetConfigurationDocument } from "@/__generated__/graphql";

interface DesignPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

function DesignPage({ searchParams }: DesignPageProps) {
  const { id } = searchParams;

  const { data, loading } = useQuery(GetConfigurationDocument, {
    variables: {
      configurationId: id as string,
    },
  });

  if (!id || typeof id !== "string") {
    return notFound();
  }

  if (loading) {
    return <div className="text-primary">Loading...</div>;
  }

  if (!data?.configuration) {
    return notFound();
  }

  const { imgUrl, width, height, id: configurationId } = data.configuration;

  return (
    <DesignConfigurator
      configurationId={configurationId!}
      imgDimensions={{ width: width!, height: height! }}
      imgUrl={imgUrl!}
    />
  );
}

export default DesignPage;
