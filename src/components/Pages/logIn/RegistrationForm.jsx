import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { genderInputs } from "../../../data";
import { schemaRegistration } from "../../../utils/validation";
import { registrationFilds } from "../../../data/index";
import MyModal from "../../ui/MyModal/MyModal";
import MyInput from "../../ui/inputs/MyInput/MyInput";
import DateInput from "../../ui/inputs/DateInput/DateInput";
import MyButton from "../../ui/buttons/MyButton/MyButton";
import PasswordInputs from "../../ui/inputs/PasswordInputs/PasswordInputs";
import RadioButtons from "../../ui/buttons/RadioButtons/RadioButtons";

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
