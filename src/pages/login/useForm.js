import { useState } from "react";
import { loginWithUserPassword } from "../../service/dataService"
import { useNavigate } from "react-router-dom";

const UseForm = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  function navigateToHall() {
    navigate.push('/hall');
  }

  const handleSubmit = e => {
    e.preventDefault();

    loginWithUserPassword(values.email, values.password)
      .then(res => res.json())
      .then((json) => {
        const token = json.token
        const id = json.id

        if (token !== null && id !== null) {
          navigateToHall()
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