import React from "react";
import { useForm } from "react-hook-form";

const Practice2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function submitOn(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  }

  return (
    <div>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit(submitOn)}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            {...register("firstName", {
              minLength: { value: 3, message: "Minmum 3 letter atlest" },
              maxLength: { value: 12, message: "Maxmum 12 word required" },
              required: true,
            })}
          />
        </div>

        {/* last name */}
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            {...register("lastName", {
              minLength: { value: 3, message: "Minmum 3 letter atlest" },
              maxLength: { value: 12, message: "Maxmum 12 word required" },
              required: true,
            })}
          />
        </div>
        <input
          disabled={isSubmitting}
          value={isSubmitting ? "submitting.." : "submit"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Practice2;
