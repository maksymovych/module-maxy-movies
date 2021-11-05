import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import MyButton from "../../ui/MyButton/MyButton";
import MyInput from "../../ui/MyInput/MyInput";

const schema = yup
  .object()
  .shape({
    password: yup
      .string()
      .max(30)
      .min(4, "To short, minimum 4 characters")
      .required("The password is required field"),
    email: yup.string().email().max(30).min(4, "To short").required(),
  })
  .required();

function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const [fetchToken] = useFetching(async () => {
  //   const token = await generateToken();
  //   const requestUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/email`;
  //   window.open(requestUrl);
  // });

  const onSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyInput
        {...register("password")}
        label="Password"
        type="password"
        id="password"
        error={!!errors["password"]}
        helperText={errors["password"]?.message}
      />
      <MyInput
        {...register("email")}
        type="email"
        id="email"
        label="Email"
        error={!!errors["email"]}
        helperText={errors["email"]?.message}
      />
      <MyButton type="submit">Confirm</MyButton>
    </form>
  );
}

export default LogInForm;
