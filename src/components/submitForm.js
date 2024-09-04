//خواندن اینپوتهای فرم و سابمیت
import { useForm } from "react-hook-form";
//inputs validation in form
import * as yup from "yup";
//ربط دادن شرایط ولیدیشن در اسکیما به فرم
import { yupResolver } from "@hookform/resolvers/yup";

const SubmitForm = () => {
  //inputs validation in form
  const schema = yup.object().shape({
    name: yup.string().required("نام اجباری است"),
    email: yup.string().email("ایمیل نامعتبر").required("ایمیل اجباری"),
    age: yup.number().positive().min(18).max(100).required(),
    password: yup
      .string()
      .min(4)
      .max(15)
      .matches(/[a-z]+/, "باید کوچیک باشه!!!")
      .matches(/[A-Z]+/, "بزرگ یادت رفت")
      .matches(/\d+/, "عدد بذار"), //regular expression/ (/\d*/) for including 0???
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password not matches!")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    console.log("the form was submited");
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder="Name..." {...register("name")} />
      {/* for not show <p> if error not exist */}
      {errors.name && <p>{errors.name?.message}</p>}
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
export default SubmitForm;
