"use client";
import { GET_CONFIGURATION } from "@/app/api/graphql/configuration";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import DesignPreview from "./DesignPreview";

interface PreviewPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

function PreviewPage({ searchParams }: PreviewPageProps) {
  const { id } = searchParams;

  const { data, loading } = useQuery(GET_CONFIGURATION, {
    variables: {
      configurationId: id,
    },
    fetchPolicy: "network-only",
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

  const {
    id: configurationId,
    croppedImgUrl,
    caseColor,
    phoneModel,
    caseFinish,
    caseMaterial,
  } = data.configuration;

  return (
    <DesignPreview
      configuration={{
        imgUrl: croppedImgUrl,
        color: caseColor,
        model: phoneModel,
        finish: caseFinish,
        material: caseMaterial,
        id: configurationId,
      }}
    />
  );
}

export default PreviewPage;
