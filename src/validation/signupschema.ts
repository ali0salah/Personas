import * as zod from "zod";

export const signupSchema = zod
  .object({
    name: zod
      .string()
      .nonempty("Name is required")
      .min(3, "Name must be at least 3 characters long"),
    username: zod
      .string()
      .nonempty("User Name is required")
      .min(3, "User Name must be at least 3 characters long"),
    password: zod
      .string()
      .nonempty("Password is required")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      ),
    rePassword: zod.string().nonempty("Confirm password is required"),
    email: zod
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    dateOfBirth: zod
      .string()
      .nonempty("date is required")
      .refine((datevalue) => {
        const currentyear = new Date().getFullYear();
        const selectedyear = new Date(datevalue).getFullYear();
        const age = currentyear - selectedyear;
        return age >= 18;
      }, "age must be 18 or older"),
    gender: zod.enum(["male", "female"], "please select your gender"),
  })
  .refine((data) => data.password == data.rePassword, {
    message: "password does not match",
    path: ["rePassword"],
  });
