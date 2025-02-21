import React from "react";
import { useForm } from "react-hook-form";

const Practice3 = () => {
  const { register, handleSubmit } = useForm();

  function submitForm(data) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            {...register("firstName", {
              minLength: { value: 3 },
              maxLength: { value: 7 },
            })}
          />
        </div>
        <div>
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            {...register("lastName", {
              minLength: { value: 3 },
              maxLength: { value: 7 },
            })}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Practice3;
