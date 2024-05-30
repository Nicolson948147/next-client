import { CodegenConfig } from "@graphql-codegen/cli";

console.log(
  "🚀 ~ config: CodegenConfig.process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT:" +
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
);

const config: CodegenConfig = {
  schema: "https://shop.casemoishop4life.website/graphql",
  documents: ["src/**/*.ts"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
