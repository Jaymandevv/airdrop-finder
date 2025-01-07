"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthHeader from "@/features/Header/AuthHeader";
import { useToast } from "@/hooks/use-toast";
import { user1 } from "@/mock/mockData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SignInData {
  email?: string;
  password?: string;
}

function Signin() {
  const [data, setData] = useState<SignInData>({
    email: "",
    password: "",
  });

  const { toast } = useToast();
  const router = useRouter();

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (data.email === "" || data.password === "") {
      console.log("input your login details");

      return;
    }

    if (data.email != user1.email || data.password != user1.password) {
      toast({
        description: "Something went wrong!",
      });

      return;
    }

    router.push("/");
    toast({
      description: "Successfully login!",
    });
    console.log("sign in");
    console.log("login data:", data);
  }

  return (
    <div className="space-y-6">
      <AuthHeader text="Sign in" />
      <form action="" onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" name="email" placeholder="Enter your email" value={data.email} onChange={handleOnChange} />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" placeholder="Enter your password" value={data.password} onChange={handleOnChange} />
        </div>
        <Button className="">Sign in</Button>
      </form>
      <p className="text-center">
        You don&apos;t have an account yet? go to{" "}
        <Link href="/signup" className="text-blue-400 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Signin;
