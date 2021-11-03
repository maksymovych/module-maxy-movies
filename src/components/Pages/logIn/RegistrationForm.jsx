import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyButton from "../../ui/MyButton/MyButton";
import MyInput from "../../ui/MyInput/MyInput";
import RadioButtons from "../../ui/RadioButtons/RadioButtons";
import { genderInputs } from "../../../data";
import { schemaRegistration } from "../../../utils/validation";
import DateInput from "../../ui/DateInput/DateInput";
import { registrationFilds } from "../../../data/index";
import PasswordInputs from "../../ui/PasswordInputs/PasswordInputs";
// import { useFetching } from "../../../utils/hoocks/useFetching";
// import { generateToken } from "../../../apis/auth";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegistration),
  });

  // const [fetchToken] = useFetching(async () => {
  //   const token = await generateToken();
  //   const requestUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/session`;
  //   window.open(requestUrl, "_blank", "noopener noreferrer");
  // });

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <form type="submit" onSubmit={handleSubmit(onSubmit)}>
      {registrationFilds.map(({ name, label, required, type }, i) => (
        <MyInput
          key={i}
          label={label}
          required={required}
          {...register(`${name}`)}
          id={name}
          type={type}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      ))}

      <DateInput />
      <RadioButtons mainLabel="Gender" inputsArray={genderInputs} />
      <PasswordInputs />

      <MyButton type="submit">Submit</MyButton>
    </form>
  );
}

export default RegistrationForm;
