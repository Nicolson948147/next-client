import React, { Suspense } from "react";
import ThankYou from "./ThankYou";
import WrappedLayout from "../WrappedLayout";

function Page() {
  return (
    <WrappedLayout>
      <Suspense>
        <ThankYou />
      </Suspense>
    </WrappedLayout>
  );
}

export default Page;
