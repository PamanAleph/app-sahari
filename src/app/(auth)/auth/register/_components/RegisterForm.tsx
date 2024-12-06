"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
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
import { Register } from "@/services/api/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  phone_number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  middle_name: z.string().optional(),
  last_name: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      phone_number: "",
      username: "",
      first_name: "",
      last_name: "",
      middle_name: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    toast.promise(Register(data), {
      pending: "Registering...",
      success: {
        render() {
          setTimeout(() => {
            router.push("/");
          }, 2000);

          return "Registration Successful!";
        },
      },
      error: "Registration Failed!",
    });
  };

  const nextStep = async () => {
    const isValid = await form.trigger([
      "email",
      "password",
      "phone_number",
      "username",
    ]);
    if (isValid) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  return (
    <section>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className=" max-w-[30vw] mx-auto p-6 rounded-lg bg-white/30 backdrop-blur-md shadow-lg">
        <div className="py-2 space-y-2">
          <h2 className="text-2xl font-bold text-black">
            Register Your Account!
          </h2>
          <p className="text-justify text-sm text-white/80">
            Please read the terms & conditions first, before creating an
            account.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {step === 1 && (
              <>
                {[
                  {
                    label: "Email",
                    name: "email",
                    type: "email",
                    placeholder: "john@example.com",
                  },
                  {
                    label: "Password",
                    name: "password",
                    type: "password",
                    placeholder: "********",
                  },
                  {
                    label: "Phone Number",
                    name: "phone_number",
                    type: "text",
                    placeholder: "81234567890",
                  },
                  {
                    label: "Username",
                    name: "username",
                    type: "text",
                    placeholder: "user123",
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
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  type="button"
                  onClick={nextStep}
                  className="w-full py-2 bg-[#AE70FE] text-white rounded-lg hover:bg-purple-700 transition"
                >
                  Next
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                {[
                  {
                    label: "First Name",
                    name: "first_name",
                    type: "text",
                    placeholder: "John",
                  },
                  {
                    label: "Middle Name",
                    name: "middle_name",
                    type: "text",
                    placeholder: "Doe",
                  },
                  {
                    label: "Last Name",
                    name: "last_name",
                    type: "text",
                    placeholder: "Smith",
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
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={prevStep}
                    className="w-full py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="w-full py-2 bg-[#AE70FE] text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Submit
                  </Button>
                </div>
              </>
            )}
          </form>
          <Link href="/auth/login" className="flex justify-center">
            <Button className="block mt-4 text-center text-white/70 hover:text-white">
              Already have an account? Login here.
            </Button>
          </Link>
        </Form>
      </div>
    </section>
  );
}
