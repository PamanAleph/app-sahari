"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Login } from "@/services/api/auth";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(1, { message: "Invalid account address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect");

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      await toast.promise(Login(data), {
        pending: "Logging in...",
        success: {
          render() {
            setTimeout(() => {
              if (redirectUrl) {
                router.push(decodeURIComponent(redirectUrl));
              } else {
                router.back();
              }
            }, 2000);
            return "Login Successful!";
          },
        },
        error: "Login Failed!",
      });
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <section>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="w-[30vw] mx-auto p-6 rounded-lg bg-white/30 backdrop-blur-md shadow-lg">
        <div className="py-2 space-y-2">
          <h2 className="text-2xl font-bold text-black">
            Login to Your Account!
          </h2>
          <p className="text-justify text-sm text-white/80">
            Enter your credentials to access your account.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {[
              {
                label: "Username",
                name: "username",
                type: "text",
                placeholder: "johndoe",
              },
              {
                label: "Password",
                name: "password",
                type: "password",
                placeholder: "********",
              },
            ].map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as keyof FormSchemaType}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      <Input
                        type={field.type}
                        placeholder={field.placeholder}
                        {...formField}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="submit"
              className="w-full py-2 bg-[#AE70FE] text-white rounded-lg hover:bg-purple-700 transition"
            >
              Login
            </Button>
          </form>
          <div className="flex flex-col">
            <Link href="/auth/register" className="flex justify-center">
              <Button className="block mt-4 text-center text-white/70 hover:text-white">
                Don&apos; t have an account? Register Now!
              </Button>
            </Link>
            <Link href="/auth/forgot-password" className="flex justify-center">
              <Button className="block text-center text-white/70 hover:text-white">
                Forgot Password?
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </section>
  );
}
