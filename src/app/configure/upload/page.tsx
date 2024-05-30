/* eslint-disable react/no-unescaped-entities */
"use client";
import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashedIcon } from "lucide-react";
import React from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Progress } from "@/components/ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@apollo/client";
import { GetConfigurationDocument } from "@/__generated__/graphql";

function ConfigureUploadPage() {
  const { toast } = useToast();
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();
  const [uploadProgress, setUploadProgress] = React.useState(44);

  const router = useRouter();

  const { isUploading, startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data?.serverData?.configId;
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`);
      });
    },
    onUploadProgress: (progress) => {
      setUploadProgress(progress);
    },
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;
    setIsDragOver(false);
    toast({
      title: `Upload failed. ${file.file.type} is not supported`,
      description: "Please upload a PNG, JPG, or JPEG file.",
      variant: "destructive",
    });
  };

  const onDropAccepted = (files: File[]) => {
    startUpload(files, { configId: undefined });
    setIsDragOver(false);
  };

  const { data } = useQuery(GetConfigurationDocument, {
    variables: {
      configurationId: "663d9182d66dd0bd99218516",
    },
  });

  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        {
          "ring-blue-900/25 bg-blue-900/10": isDragOver,
        }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropAccepted={onDropAccepted}
          onDropRejected={onDropRejected}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="flex flex-col flex-1 items-center justify-center w-full h-full"
            >
              <input {...getInputProps()} />
              {isDragOver || isPending ? (
                <MousePointerSquareDashedIcon className="h-6 w-6 text-zinc-500 mb-2" />
              ) : isUploading ? (
                <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
              ) : (
                <Image className="h-6 w-6 text-zinc-500 mb-2" />
              )}
              <div className="flex flex-col justify-center mb-2 text-center text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col text-center">
                    <p>Uploading...</p>
                    <Progress
                      value={uploadProgress}
                      className="mt-2 w-40 h-2 bg-gray-300"
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col text-center">
                    <p>Redirecting...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">Drop</span> the file to
                    upload
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">Click to upload</span>, or
                    drag and drop
                  </p>
                )}
                {isPending ? null : (
                  <p className="text-xs text-zinc-500"> PNG, JPG, JPEG </p>
                )}
              </div>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
}

export default ConfigureUploadPage;
