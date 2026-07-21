import type { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const gender = formData.get("gender");
    const role = formData.get("role");

    console.log("****", name, gender, role);
  };

  return (
    <form className="flex flex-col gap-3 p-10" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        placeholder="Please provide your name"
        type="text"
      />

      <label htmlFor="gender">Gender</label>
      <select id="gender" name="gender" defaultValue="">
        <option value="" disabled>
          Please select your gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
        <option value="prefer-not-to-say">Prefer not to say</option>
      </select>

      <fieldset>
        <legend>Role</legend>

        <div className="flex gap-3">
          <label htmlFor="student">
            <input id="student" type="radio" name="role" value="student" />
            Student
          </label>

          <label htmlFor="teacher">
            <input id="teacher" type="radio" name="role" value="teacher" />
            Teacher
          </label>

          <label htmlFor="other">
            <input id="other" type="radio" name="role" value="other" />
            Other
          </label>
        </div>
      </fieldset>

      <button>Submit</button>
    </form>
  );
};

export default Form;
