import React from "react";
import { useForm } from "react-hook-form";

const PracticeForm1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

//   function onSubmit(data) {
//     console.log("Form detail", data);
//   }

async  function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve,5000))
    console.log("Form detail", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
          className={errors.firstName ? "input-error" : ""}
            {...register("firstName", {
              minLength: {value:3, message:"Minmum 3 latters"},
              maxLength: {value:7, message:"Mixmum 7 latters"},
              required: true,
            })}
            type="text"
          />
          {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
          className={errors.email ? "input-error": ""}
            {...register("email", {
              required: {value: true, message:"Email are required"},
            })}
            type="email"
          />
          {errors.email && (<p>
            {errors.email.message}
          </p>)}
        </div>

        <input type="submit"
         disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default PracticeForm1;
