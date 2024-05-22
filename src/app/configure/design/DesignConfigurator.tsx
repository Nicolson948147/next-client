"use client";
import React from "react";
import NextImage from "next/image";
import PhoneTemplate from "@/../public/phone-template.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Radio,
  RadioGroup,
  Label as RadioLabel,
  Description as RadioDescription,
} from "@headlessui/react";
import { cn, formatPrice } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "@/components/HandleComponent";
import {
  COLORS,
  FINISH,
  MATERIAL,
  MODELS,
} from "@/validatiors/option-validator";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCheck, ChevronsUpDown } from "lucide-react";
import { BASE_PRICE } from "@/config/products";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@apollo/client";
import { UPDATE_CONFIGURATION } from "@/app/api/graphql/configuration";
import { useRouter } from "next/navigation";

interface DesignConfiguratorProps {
  configurationId: string;
  imgUrl: string;
  imgDimensions: {
    width: number;
    height: number;
  };
}

function base64ToBlob(base64: string, mimeType: string) {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
}
function DesignConfigurator({
  configurationId,
  imgUrl,
  imgDimensions,
}: DesignConfiguratorProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [updateConfiguration, { loading }] = useMutation(UPDATE_CONFIGURATION);
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data?.serverData?.configId;
    },
  });
  const [options, setOptions] = React.useState<{
    color: (typeof COLORS)[number];
    model: (typeof MODELS)["options"][number];
    material: (typeof MATERIAL)["options"][number];
    finish: (typeof FINISH)["options"][number];
  }>({
    color: COLORS[0],
    model: MODELS["options"][0],
    material: MATERIAL["options"][0],
    finish: FINISH["options"][0],
  });

  const [renderedDimensions, setRenderedDimensions] = React.useState({
    width: imgDimensions.width / 4,
    height: imgDimensions.height / 4,
  });

  const [renderedPosition, setRenderedPosition] = React.useState({
    x: 150,
    y: 205,
  });

  const phoneCaseRef = React.useRef<HTMLDivElement>(null);
  const containerPhoneCaseRef = React.useRef<HTMLDivElement>(null);

  async function saveConfiguration() {
    try {
      const {
        left: caseLeft,
        top: caseTop,
        width,
        height,
      } = phoneCaseRef.current!.getBoundingClientRect();
      const { left: containerLeft, top: containerTop } =
        containerPhoneCaseRef.current!.getBoundingClientRect();

      const leftOffset = caseLeft - containerLeft;
      const topOffset = caseTop - containerTop;
      const actualX = renderedPosition.x - leftOffset;
      const actualY = renderedPosition.y - topOffset;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");

      const userImage = new Image();
      userImage.crossOrigin = "anonymous";
      userImage.src = imgUrl;

      await new Promise((resolve) => {
        userImage.onload = resolve;
      });

      ctx?.drawImage(
        userImage,
        actualX,
        actualY,
        renderedDimensions.width,
        renderedDimensions.height
      );

      const base64 = canvas.toDataURL();
      const base64Data = base64.split(",")[1];

      const blob = base64ToBlob(base64Data, "image/png");
      const file = new File([blob], "phone_case.png", { type: "image/png" });

      await startUpload([file], { configId: configurationId });

      const { color, finish, material, model } = options;

      await updateConfiguration({
        variables: {
          input: {
            id: configurationId,
            caseColor: color.value,
            caseFinish: finish.value,
            caseMaterial: material.value,
            phoneModel: model.value,
          },
        },
        onCompleted: (data) => {
          if (!data?.updateConfiguration?.id) {
            toast({
              title: "Something went wrong!",
              description: "Failed to save configuration, please try again.",
              variant: "destructive",
            });
            return;
          }
          toast({
            title: "Configuration saved!",
            description: "Your configuration has been saved.",
          });
          router.push(`/configure/preview?id=${data.updateConfiguration.id}`);
        },
        onError: () => {
          toast({
            title: "Something went wrong!",
            description: "Failed to save configuration, please try again.",
            variant: "destructive",
          });
        },
      });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: "Failed to save configuration, please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20">
      <div
        ref={containerPhoneCaseRef}
        className="relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
          <AspectRatio
            ratio={896 / 1831}
            className="pointer-events-none aspect-[896/1831] relative z-50 w-full"
            ref={phoneCaseRef}
          >
            <NextImage
              src={PhoneTemplate}
              alt="phone img"
              className="pointer-events-none z-50 select-none"
            />
          </AspectRatio>
          <div className="absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
          <div
            className={cn(
              "absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]",
              `bg-${options.color.tw}`
            )}
          />
        </div>
        <Rnd
          default={{
            x: 150,
            y: 205,
            width: imgDimensions.width / 4,
            height: imgDimensions.height / 4,
          }}
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topLeft: <HandleComponent />,
            topRight: <HandleComponent />,
          }}
          className="absolute z-20 border-[2px] border-primary"
          onResizeStop={(_, __, ref, ___, { x, y }) => {
            setRenderedDimensions({
              width: parseInt(ref.style.width.slice(0, -2)),
              height: parseInt(ref.style.height.slice(0, -2)),
            });
            setRenderedPosition({
              x,
              y,
            });
          }}
          onDragStop={(_, data) => {
            setRenderedPosition({
              x: data.x,
              y: data.y,
            });
          }}
        >
          <div className="relative w-full h-full">
            <NextImage
              fill
              src={imgUrl}
              alt="image case"
              className="pointer-events-none"
            />
          </div>
        </Rnd>
      </div>
      <div className="h-[37.5rem] w-full col-span-full lg:col-span-1 flex flex-col bg-white ">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div
            aria-hidden="true"
            className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none "
          />
          <div className="px-8 pt-8 pb-12">
            <h2 className="tracking-tight font-bold text-3xl text-gray-900">
              Customize your case
            </h2>
            <div className="w-full h-px bg-zinc-200 my-6" />
            <div className="relative mt-4 h-full flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={options.color}
                  onChange={(value) => {
                    setOptions((prev) => ({
                      ...prev,
                      color: value as (typeof COLORS)[number],
                    }));
                  }}
                >
                  <Label className={`text-gray-900`}>
                    Color: {options.color.label}
                  </Label>
                  <div className="mt-3 flex items-center space-x-3 ">
                    {COLORS.map((color) => (
                      <Radio
                        value={color}
                        key={color.value}
                        className={({ focus, checked }) =>
                          cn(
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
                            {
                              [`border-${color.tw}`]: focus || checked,
                            }
                          )
                        }
                      >
                        <span
                          className={cn(
                            `bg-${color.tw}`,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        ></span>
                      </Radio>
                    ))}
                  </div>
                </RadioGroup>
                <div className="relative flex flex-col gap-3 w-full">
                  <Label className={`text-gray-900`}>Model</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full"
                      >
                        {options.model.label}
                        <ChevronsUpDown className="w-4 h-4 ml-4 shrink-0 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {MODELS.options.map((model) => (
                        <DropdownMenuItem
                          key={model.label}
                          className={cn(
                            "flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100",
                            {
                              "bg-zinc-100":
                                model.label === options.model.label,
                            }
                          )}
                          onClick={() => {
                            setOptions((prev) => ({
                              ...prev,
                              model,
                            }));
                          }}
                        >
                          <CheckCheck
                            className={cn(
                              "mr-2 h-4 w-4 text-primary opacity-0",
                              {
                                "opacity-100":
                                  model.label === options.model.label,
                              }
                            )}
                          />
                          {model.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {[MATERIAL, FINISH].map(
                  ({ name, options: selectableOptions }) => (
                    <RadioGroup
                      key={name}
                      value={options[name]}
                      onChange={(val) => {
                        setOptions((prev) => ({
                          ...prev,
                          [name]: val,
                        }));
                      }}
                    >
                      <Label>
                        {name.slice(0, 1).toUpperCase() + name.slice(1)}
                      </Label>
                      <div className="mt-3 space-y-4">
                        {selectableOptions.map((option) => (
                          <Radio
                            key={option.value}
                            value={option}
                            className={({ checked, focus }) => {
                              return cn(
                                "relative block cursor-pointer px-6 py-4 rounded-lg bg-white shadow-sm border-2 border-zinc-200 focus:outline-none ring-0 focus:ring-0 outline-none sm:flex sm:justify-between",
                                {
                                  "border-primary": checked || focus,
                                }
                              );
                            }}
                          >
                            <span className="flex items-center">
                              <span className=" flex flex-col text-sm ">
                                <RadioLabel
                                  className="font-medium text-gray-900"
                                  as="span"
                                >
                                  {option.label}
                                </RadioLabel>
                                {option.description ? (
                                  <RadioDescription
                                    as="span"
                                    className="text-gray-500"
                                  >
                                    <span className="block sm:inline">
                                      {option.description}
                                    </span>
                                  </RadioDescription>
                                ) : null}
                              </span>
                            </span>
                            <RadioDescription
                              as="span"
                              className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                            >
                              <span className="font-medium text-gray-900">
                                {formatPrice(option.price)}
                              </span>
                            </RadioDescription>
                          </Radio>
                        ))}
                      </div>
                    </RadioGroup>
                  )
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="w-full px-8 py-16 bg-white ">
          <div className="h-px w-full bg-zinc-200"></div>
          <div className="h-full w-full flex justify-end items-center mt-3">
            <div className="w-full flex gap-6 items-center">
              <p className="font-medium whitespace-nowrap">
                {formatPrice(
                  BASE_PRICE + options.material.price + options.finish.price
                )}
              </p>
              <Button
                size="sm"
                className="w-full"
                onClick={saveConfiguration}
                disabled={isUploading || loading}
              >
                {isUploading || loading ? (
                  "..."
                ) : (
                  <>
                    Continue <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignConfigurator;
