import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForn';
import { useState} from "react";
import './Homepage.css';

export default function Homepage() {
  const [registrationFormState, displayRegistrationForm] = useState(false);

    return (
    
    <>
      <Button className= "button-form" label='Зарегистрироваться' onClick = {() => displayRegistrationForm(true)}/>
      {registrationFormState && <RegistrationForm onClick={() => displayRegistrationForm(false)}/>} 
    </>
    
  )
}




