import { useState } from "react";
import { useForm } from "react-hook-form";
import './RegistrationForm.css';

export default function RegistartionForm() {
   const [data, setData] = useState("");
   const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<FormData>({mode: "onBlur"});
   type FormData = {
      name: string
      email: string
      pass: string
    }

   return (
             <form onSubmit={handleSubmit((data) => {alert(JSON.stringify(data)); reset();})}>
       <label> Ваше имя:
       <input {...register("name", {required: 'Поле обязательно к заполнению', minLength: {value: 3, message: "Имя должно содержать не менее 2 символов"}})} placeholder = "Ваше имя"/>
       </label>
      <div className="errors">
         {errors?.name && <p>{errors?.name?.message ||'Error!'}</p>}
      </div>
      <label> E-mail:
       <input type='email'{...register("email", {required: 'Поле обязательно к заполнению', pattern: {value: /^\S+@\S+$/i, message: "Введен неверный адрес"}})} placeholder = "Адрес электронной почты"/>
       </label>
      <div className="errors">
         {errors?.email && <p>{errors?.email?.message ||'Error!'}</p>}
      </div> 
      <label> Пароль:
       <input type='password'{...register("pass", {required: 'Поле обязательно к заполнению', minLength: {value: 8, message: "Пароль должен содержать не менее 8 символов"}})} placeholder = "Пароль"/>
       </label>
      <div className="errors">
         {errors?.pass && <p>{errors?.pass?.message ||'Error!'}</p>}
      </div> 
    
       <p>{data}</p>
       <input type="submit" disabled={!isValid}/>
     </form>
     
   );
 }
 










