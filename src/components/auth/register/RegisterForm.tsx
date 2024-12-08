"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import default styles
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
import { UserCheck } from "@/services/api/user";
import { UserCheckProps } from "@/models/userCheck";
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

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const validationCache = useRef<Record<string, boolean>>({});

  const validateField = (field: keyof UserCheckProps, value: string) => {
    if (!value) return;

    if (validationCache.current[`${field}-${value}`]) {
      return;
    }
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(async () => {
      const payload: Partial<UserCheckProps> = { [field]: value };
      try {
        const response = await UserCheck(payload);

        if (response.success && response.data[field]?.exists) {
          form.setError(field, {
            type: "manual",
            message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`,
          });
        } else {
          form.clearErrors(field);
          validationCache.current[`${field}-${value}`] = true;
        }
      } catch (error) {
        console.error(`Error validating ${field}:`, error);
        form.setError(field, {
          type: "manual",
          message: `Error validating ${field}. Please try again.`,
        });
      }
    }, 1000); 
  };

  const canProceedToNextStep = () => {
    const { email, phone_number, username, password } = form.getValues();
    const hasErrors =
      !!form.formState.errors.email ||
      !!form.formState.errors.phone_number ||
      !!form.formState.errors.username;
    const isAllFilled = email && phone_number && username && password;
    return !hasErrors && isAllFilled;
  };

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    if (Object.keys(form.formState.errors).length > 0) {
      return; 
    }

    try {
      await Register(data);
      toast.success("Registration successful! Redirecting...");
      setTimeout(() => router.push("/"), 2000); 
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <section>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-[30vw] mx-auto p-6 rounded-lg bg-white/30 backdrop-blur-md shadow-lg">
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
                {[{ label: "Email", name: "email" }, { label: "Phone Number", name: "phone_number" }, { label: "Username", name: "username" }, { label: "Password", name: "password" }].map((field) => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name as keyof FormSchemaType}
                    render={({ field: formField }) => (
                      <FormItem>
                        <FormLabel>{field.label}</FormLabel>
                        <FormControl>
                          <Input
                            type={field.name === "password" ? "password" : "text"}
                            placeholder={`Enter ${field.label}`}
                            {...formField}
                            onChange={(e) => {
                              const value = e.target.value;
                              formField.onChange(e); // Update form state
                              if (["email", "phone_number", "username"].includes(field.name)) {
                                validateField(
                                  field.name as "email" | "phone_number" | "username",
                                  value
                                );
                              }
                            }}
                            className={`rounded-xl ${
                              form.formState.errors[field.name as keyof FormSchemaType]
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!canProceedToNextStep()}
                  className="w-full py-2 bg-[#AE70FE] text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                {[{ label: "First Name", name: "first_name" }, { label: "Middle Name", name: "middle_name" }, { label: "Last Name", name: "last_name" }].map((field) => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name as keyof FormSchemaType}
                    render={({ field: formField }) => (
                      <FormItem>
                        <FormLabel>{field.label}</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={`Enter ${field.label}`}
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
                    onClick={() => setStep(1)}
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
          <Button>
            Already have an account? Login Now!
          </Button>
          </Link>
        </Form>
      </div>
    </section>
  );
}
