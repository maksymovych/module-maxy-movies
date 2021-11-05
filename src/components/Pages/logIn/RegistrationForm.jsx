import React, { useState } from "react";
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
import MyModal from "../../ui/MyModal/MyModal";

function RegistrationForm() {
  const [showModal, setshowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegistration),
  });

  const onSubmit = () => {
    setshowModal(true);
  };
  const handleCloseModal = () => {
    window.location.reload(false);
  };
  if (showModal) {
    return (
      <MyModal label="Congratulate!" body="You successfully registered!">
        <MyButton color="success" onClick={handleCloseModal}>
          Ok!
        </MyButton>
      </MyModal>
    );
  }

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
