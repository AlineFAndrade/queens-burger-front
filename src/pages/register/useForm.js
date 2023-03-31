import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../service/dataService";

const UseForm = () => {

  const navigate = useNavigate()

  const [userBody, setUserBody] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  })

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name
    setUserBody({
      ...userBody,
      [name]: value
    })
  }

  const handleSubmit = () => {
    registerUser()
    navigate("/")
  }

  return { handleChange, userBody, handleSubmit }
}

export default UseForm;