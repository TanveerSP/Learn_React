import React from "react";
import { useForm } from "react-hook-form";

const Practice3 = () => {
  const { register, handleSubmit,
    formState: {isSubmitting}
   } = useForm();

 async function submitForm(data) {
    await new Promise((resolve)=> setTimeout(resolve, 5000) )
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

        <input type="submit"
        disabled={isSubmitting}
        value={isSubmitting? "submittin..": "submit"}
        />
      </form>
    </div>
  );
};

export default Practice3;
