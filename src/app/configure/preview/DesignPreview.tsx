"use client";
import { CREATE_CHECKOUT_SESSION } from "@/app/api/graphql/order";
import LoginModal from "@/components/LoginModal";
import Phone from "@/components/Phone";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { CONFIGURATION_ID } from "@/lib/contants";
import { cn, formatPrice } from "@/lib/utils";
import { COLORS, FINISH, MODELS } from "@/validatiors/option-validator";
import { useMutation } from "@apollo/client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Arrow } from "@radix-ui/react-hover-card";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Confetti from "react-dom-confetti";

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

interface DesignPreviewProps {
  configuration: {
    id: string;
    imgUrl: string;
    color?: string;
    model?: string;
    finish?: string;
    material?: string;
  };
}
function DesignPreview({ configuration }: DesignPreviewProps) {
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [isShowModalLogin, setIsShowModalLogin] = React.useState(false);

  const { toast } = useToast();
  const { getUser } = useKindeBrowserClient();

  const user = getUser();

  const [createCheckoutSession, { loading }] = useMutation(
    CREATE_CHECKOUT_SESSION
  );

  const router = useRouter();
  useEffect(() => setShowConfetti(true), []);

  const tw = COLORS.find((c) => c.value === configuration.color)?.tw;

  const { label: phoneModelLabel } = MODELS.options.find(
    (m) => m.value === configuration.model
  )!;

  const totalPrice = (() => {
    let price = BASE_PRICE;
    if (configuration.finish === "textured") {
      price += PRODUCT_PRICES.finish.textured;
    }
    if (configuration.material === "polycarbonate") {
      price += PRODUCT_PRICES.material.polycarbonate;
    }
    return price;
  })();

  const handleCheckout = async () => {
    if (user) {
      await createCheckoutSession({
        variables: {
          input: {
            configurationId: configuration.id,
            amount: totalPrice,
            kindeUserId: user.id,
          },
        },
        onCompleted: (data) => {
          if (data.createCheckoutSession.url) {
            router.push(data.createCheckoutSession.url);
            return;
          }
          toast({
            title: "Something went wrong!",
            description: "Failed to create checkout session, please try again.",
            variant: "destructive",
          });
        },
        onError: (error) => {
          toast({
            title: "Something went wrong!",
            description: "Failed to create checkout session, please try again.",
            variant: "destructive",
          });
        },
      });
      return;
    }
    setIsShowModalLogin(true);
    localStorage.setItem(CONFIGURATION_ID, configuration.id);
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center "
      >
        <Confetti active={showConfetti} config={config} />
      </div>
      <div className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 ">
        <div className="sm:col-span-4 md:col-span-3 md:row-span-3 md:row-end-2">
          <Phone className={cn(`bg-${tw}`)} imgSrc={configuration.imgUrl} />
        </div>
        <div className="mt-6 sm:col-span-9 sm:mt-0 ">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Your {phoneModelLabel} Case
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="h-4 w-4 text-primary" />
            In stock and ready to ship
          </div>
        </div>
        <div className="sm:col-span-12 md:col-span-9 text-base">
          <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <p className="font-medium text-zinc-950">Highlights</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>
                  Wireless charging compatible, so you can charge your phone
                </li>
                <li>Easy access to all ports and buttons</li>
                <li>Protects your phone from scratches and drops</li>
                <li>5 years print waranty</li>
              </ol>
            </div>
            <div>
              <p className="font-medium text-zinc-950">Materials</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>
                  Hight quality silicone material that is soft to the touch
                </li>
                <li>Scratch-resistant coating</li>
              </ol>
            </div>
          </div>
          <div className="mt-8 ">
            <div className="bg-gray-200 p-6 sm:rounded-lg sm:p-8 ">
              <div className="flow-root text-sm ">
                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="text-gray-600">Base price</p>
                  <p className="font-medium text-gray-900">
                    {formatPrice(BASE_PRICE)}
                  </p>
                </div>
                {configuration.finish === "textured" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Textured finish</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.finish.textured)}
                    </p>
                  </div>
                ) : null}
                {configuration.material === "polycarbonate" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Soft polycarbonate material</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.material.polycarbonate)}
                    </p>
                  </div>
                ) : null}

                <div className="my-2 bg-gray-200 h-px"></div>
                <div className="flex items-center justify-between py-2">
                  <p className="font-semibold text-gray-900"> Total Price</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(totalPrice)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end pb-12">
              <Button
                className="px-4 sm:px-6 lg:px-8"
                onClick={handleCheckout}
                disabled={loading}
              >
                Checkout{" "}
                {loading ? (
                  <Loader2 className="w-4 h-4 ml-2 inline animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <LoginModal isShow={isShowModalLogin} setIsShow={setIsShowModalLogin} />
    </>
  );
}

export default DesignPreview;
