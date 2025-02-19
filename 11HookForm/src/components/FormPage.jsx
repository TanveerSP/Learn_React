import React from "react";
import { useForm } from "react-hook-form";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => console.log("this is form data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name: </label>
        <input 
        className={errors.firstName ? 'input-error' : ""}
        {...register("firstName", 
            { required: true,
             minLength: {value:4, message:"Min len atleast 3"} , 
             maxLength: {value:7, message:"Max len atleast 7"}, 
             
            })} />
            {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor="">Middle Name: </label>
        <input {...register("middleName")} type="text" />
      </div>
      <div>
        <label htmlFor="">Last Name: </label>
        <input {...register("lastName", {pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Last name is not as per the rules"
        }})} />
        {errors.lastName && 
        <p className="error-msg">
            {errors.lastName.message}
        </p>
        }
      </div>
      <input type="submit" />
    </form>
  );
};

export default FormPage;
