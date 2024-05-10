import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";
import sharp from "sharp";
import { getClient } from "@/lib/client";
import {
  CREATE_CONFIGURATION,
  UPDATE_CONFIGURATION,
} from "../graphql/configuration";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .input(z.object({ configId: z.string().optional() }))
    // Set permissions and file types for this FileRoute
    .middleware(async ({ input }) => {
      return {
        input,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        const { configId } = metadata.input;
        const res = await fetch(file.url);

        if (!res.ok) {
          throw new UploadThingError("Failed to fetch file");
        }

        const buffer = await res.arrayBuffer();

        const imgMetadata = await sharp(buffer).metadata();

        if (!imgMetadata) {
          throw new UploadThingError("Failed to read image metadata");
        }

        const { width, height } = imgMetadata;

        if (!configId) {
          const result = await getClient().mutate({
            mutation: CREATE_CONFIGURATION,
            variables: {
              input: {
                width,
                height,
                imgUrl: file.url,
              },
            },
          });
          return { configId: result.data.createConfiguration.id };
        } else {
          const result = await getClient().mutate({
            mutation: UPDATE_CONFIGURATION,
            variables: {
              input: {
                id: configId,
                croppedImgUrl: file.url,
              },
            },
          });
          return { configId: result.data.createConfiguration.id };
        }
      } catch (error) {}
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
