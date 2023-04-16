import { useState } from "react";
import AuthService from "../../service/authService"
import { useNavigate } from "react-router-dom";

const UseForm = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
  })


  const handleSubmit = e => {
    e.preventDefault();

    AuthService.login(values.username, values.password)
      .then((json) => {
        const id = json.id

        if (id !== null) {
          navigate("/order")
        } else {
          alert('Não cadastrado!')
        }
      })
      
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  return { handleChange, values, handleSubmit }
}

export default UseForm;