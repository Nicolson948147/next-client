"use client";
import { GET_CONFIGURATION } from "@/app/api/graphql/configuration";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

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
    imgUrl,
    width,
    height,
    id: configurationId,
    croppedImgUrl,
  } = data.configuration;

  return (
    <div className="text-gray-900 flex gap-3">
      <Image alt="url" src={imgUrl} width={500} height={500} />
      <Image alt="cropped url" src={croppedImgUrl} width={500} height={500} />
    </div>
  );
}

export default PreviewPage;
