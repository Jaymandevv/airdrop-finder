"use client";

import AuthHeader from "@/features/Header/AuthHeader";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

//TOdo:
// Form schema - zod
// Get the value from form
// intergate supabe auth

// Form schema , what do i need ?
// email, username ,password, confirm password

const FormSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }),
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirm_password: z.string().min(8, { message: "Confirm password must be at least 8 characters long" }),
  })
  .refine((data) => data.password === data.confirm_password, { message: "Password don't match", path: ["confirm_password"] });

function Signup() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log("Value: ", values);
  };

  const handleShowPassword = () => {
    setShowPassword((s) => !s);
  };

  return (
    <div>
      <AuthHeader text="Sign up" />
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
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
                  <div className="flex relative items-center">
                    <Input placeholder="Enter password" {...field} type={showPassword ? "text" : "password"} />
                    <button className="absolute right-2" onClick={handleShowPassword}>
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="Confirm your password" {...field} type={showPassword ? "text" : "password"} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button>Submit</Button>
        </form>
      </Form>
      <p className="text-center mt-2">
        Already have an account ?
        <Link href="/signin" className="text-blue-400 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default Signup;
