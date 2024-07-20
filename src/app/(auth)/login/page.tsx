"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "@apollo/client";
import { LoginDocument } from "@/__generated__/graphql";
import { TOKEN } from "@/lib/contants";
import { LoaderCircle } from "lucide-react";
import WrappedLayout from "@/app/WrappedLayout";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(4).max(50),
});

export default function LoginPage() {
  const router = useRouter();
  const [login, { loading }] = useMutation(LoginDocument);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    login({
      variables: {
        input: {
          email: values.username,
          password: values.password,
        },
      },
      onCompleted: (data) => {
        if (data?.signIn) {
          // if (data.signIn?.isNotHavePassword) {
          // localStorage.setItem(TOKEN, data?.signIn?.access_token ?? "");
          //   router.push("/auth/set-password");
          //   return;
          // }
          if (data.signIn?.access_token) {
            localStorage.setItem(TOKEN, data?.signIn?.access_token ?? "");
            router.push("/auth-callback");
          }
        }
      },
      onError: (error) => {
        if (error?.graphQLErrors[0]?.extensions?.code === "ACCOUNT_NOT_FOUND")
          form.setError("username", {
            type: "manual",
            message: "Account not found",
          });
      },
    });
  }
  return (
    <WrappedLayout>
      <div className="flex flex-col justify-center items-center mt-[50px]">
        <h1 className="text-3xl font-bold mb-8">Log in to your account</h1>
        <Card className="w-1/3">
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between">
                  <Button className="w-full" type="submit" disabled={loading}>
                    {loading ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </div>
                <div className="w-full flex justify-center items-center">
                  <div className="w-full h-[1px] bg-slate-300"></div>
                  <div className="text-[14px] mx-4">Or</div>
                  <div className="w-full h-[1px] bg-slate-300"></div>
                </div>
                <Button
                  className="w-full gap-2"
                  variant={"outline"}
                  onClick={(event) => {
                    event.preventDefault();
                    router.push("/api/auth/google");
                  }}
                >
                  {false ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    <>
                      Login with
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                      </svg>
                    </>
                  )}
                </Button>
                <LoginLink
                  className={buttonVariants({
                    size: "default",
                    variant: "outline",
                    className: "text-gray-900 w-full",
                  })}
                >
                  Login with Kinde
                </LoginLink>
                <div>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  You don't have an account? {""}
                  <Link href="/register" className="text-primary">
                    Register here
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </WrappedLayout>
  );
}
