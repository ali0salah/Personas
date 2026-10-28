import * as zod from "zod";

export const changeSchema = zod
  .object({
    password: zod.string().nonempty("This field is required!"),
    newPassword: zod
      .string()
      .nonempty("New password is required!")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      ),
  })
  .refine((data) => data.newPassword !== data.password, {
    message: "New password must be different from previous password!",
    path: ["newPassword"],
  });
