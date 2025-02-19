import React from "react";
import { useForm } from "react-hook-form";

const PracticeForm1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, disabled },
  } = useForm();

  function onSubmit(data) {
    console.log("Form detail", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input {...register("firstName",
            {minLength: 3, maxLength: 7, required: true}
          )} type="text" />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input {...register("email", {
            required: true
          })} type="email" />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default PracticeForm1;
