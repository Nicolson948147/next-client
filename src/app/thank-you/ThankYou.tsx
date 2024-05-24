"use client";
import PhonePreview from "@/components/PhonePreview";
import { formatPrice } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { GET_ORDER_PAYMENT_STATUS } from "../api/graphql/order";
import { SHIPPING_COST } from "@/config/products";

function ThankYou() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId") || "";

  const { data, loading, stopPolling } = useQuery(GET_ORDER_PAYMENT_STATUS, {
    variables: {
      orderId,
    },
    pollInterval: 1000,
  });

  const { shippingAddress, billingAddress } = data?.paymentStatus?.order ?? {};

  useEffect(() => {
    if (data?.paymentStatus?.status) {
      stopPolling();
    }
  }, [data?.paymentStatus?.status, stopPolling]);

  if (loading || data?.paymentStatus?.order == undefined) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
          <h3 className="font-semibold text-xl">Loading your order....</h3>
          <p>This will not take long</p>
        </div>
      </div>
    );
  }

  if (data?.paymentStatus?.status === false) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
          <h3 className="font-semibold text-xl">Verify your order....</h3>
          <p>This might take a moment</p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="text-3xl font-extrabold text-primary sm:text-4xl">
            Thank you for your order
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl ">
            Your case is on the way!
          </h1>
          <p className="mt-2 text-base text-zinc-500">
            We received your order and will send you an email with the tracking
          </p>
          <div className="mt-12 text-sm font-medium">
            <p className="text-zinc-900">Order number:</p>
            <p className="mt-2 text-zinc-500">
              {data?.paymentStatus?.order?.id}
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-200">
          <div className="mt-10 flex flex-auto flex-col">
            <h4 className="font-semibold text-zinc-900">
              You make a great choice!
            </h4>
            <p className="mt-2 text-base text-zinc-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
              architecto? Ab similique a, optio tempore aperiam ratione
              laboriosam, facere debitis nesciunt aliquid accusamus officiis ut
              architecto, error eius deserunt! Sed?
            </p>
          </div>
        </div>

        <div className="flex space-x-6 overflow-hidden mt-4 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
          <PhonePreview
            croppedImage={
              data?.paymentStatus?.order?.configuration?.croppedImgUrl
            }
            color={data?.paymentStatus?.order?.configuration?.caseColor}
          />
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-6 py-10 text-sm">
            <div>
              <p className="font-medium text-zinc-900">Shipping address</p>
              <div className="mt-2 text-zinc-700">
                <address className="not-italic">
                  <span className="block">{shippingAddress?.name ?? "--"}</span>
                  <span className="block">
                    {shippingAddress?.street ?? "--"}
                  </span>
                  <span className="block">
                    {shippingAddress?.postalCode ?? "--"} -{" "}
                    {shippingAddress?.city ?? "--"},{" "}
                    {shippingAddress?.state ?? "--"},{" "}
                    {shippingAddress?.country ?? "--"}
                  </span>
                </address>
              </div>
            </div>
            <div>
              <p className="font-medium text-zinc-900">Billing address</p>
              <div className="mt-2 text-zinc-700">
                <address className="not-italic">
                  <span className="block">{billingAddress?.name ?? "--"}</span>
                  <span className="block">
                    {billingAddress?.street ?? "--"}
                  </span>
                  <span className="block">
                    {billingAddress?.postalCode ?? "--"} -{" "}
                    {billingAddress?.city ?? "--"},{" "}
                    {billingAddress?.state ?? "--"},{" "}
                    {billingAddress?.country ?? "--"}
                  </span>
                </address>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 border-t border-zinc-200 py-10 text-sm">
            <div>
              <p className="font-medium text-zinc-900">Payment status</p>
              <p className="mt-2 font-medium text-zinc-700">
                {data?.paymentStatus?.order?.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>
            <div>
              <p className="font-medium text-zinc-900">Shipping method</p>
              <p className="mt-2 font-medium text-zinc-700">3-7 working days</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 border-t border-zinc-200 pt-10 text-sm">
          <div className="flex justify-between">
            <p className="font-medium text-zinc-900">Subtotal</p>
            <p className=" text-zinc-700">
              {formatPrice(data?.paymentStatus?.order?.amount ?? 0)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-zinc-900">Shipping</p>
            <p className=" text-zinc-700">{formatPrice(SHIPPING_COST)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-zinc-900">Total</p>
            <p className=" text-zinc-700">
              {formatPrice(
                data?.paymentStatus?.order?.amount + SHIPPING_COST ?? 0
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
