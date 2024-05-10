"use client";
import { GET_CONFIGURATION } from "@/app/api/graphql/configuration";
import { useQuery } from "@apollo/client";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfigurator from "./DesignConfigurator";

interface DesignPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

function DesignPage({ searchParams }: DesignPageProps) {
  const { id } = searchParams;

  const { data, loading } = useQuery(GET_CONFIGURATION, {
    variables: {
      configurationId: id,
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
      configurationId={configurationId}
      imgDimensions={{ width, height }}
      imgUrl={imgUrl}
    />
  );
}

export default DesignPage;
