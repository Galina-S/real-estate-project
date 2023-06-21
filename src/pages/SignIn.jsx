import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({email: '', password: ''});
  const {email, password} = formData;

  function onChange (e) {
    //console.log(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    <div>SignIn</div>
  )
}
