import AuthHeader from "@/features/Header/AuthHeader";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

//TOdo:
// Form schema - zod
// Get the value from form
// intergate supabe auth

// Form schema , what do i need ?
// email, username ,password, confirm password

const FormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  confirm_password: z
    .string()
    .min(8, { message: "Confirm password is required" })
    .refine((data) => data.password === data.confirm_password, { message: "Password don't match", path: ["confirm_password"] }),
});

function Signup() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <div>
      <AuthHeader text="Sign up" />p
    </div>
  );
}

export default Signup;
