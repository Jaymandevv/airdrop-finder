"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthHeader from "@/features/Header/AuthHeader";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";

const FormSchema = z.object({
  email: z.string().min(1, { message: "email is required!" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

function Signin() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();
  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword((s) => !s);
  };

  function handleSubmit(values: z.infer<typeof FormSchema>) {
    if (!values) {
      toast({
        description: "Something went wrong!",
      });

      return;
    }

    router.push("/");
    toast({
      description: "Successfully login!",
    });
  }

  return (
    <div className="space-y-6">
      <AuthHeader text="Sign in" />
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
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
                  <div className="flex relative items-center">
                    <Input placeholder="Enter password" {...field} type={showPassword ? "text" : "password"} />
                    <button type="button" className="absolute right-2" onClick={handleShowPassword}>
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <p className="text-center mt-2">
        Already have an account ?
        <Link href="/signup" className="text-blue-400 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Signin;
