import { Link } from 'react-router-dom';
import { FormControl, FormGroup, FormLabel, Input, Select } from '@mui/material';
import { Header } from "../../components/header";
import useForm from "./useForm"
import "../../../styles/register.css"
import { Button } from '../../components/button';


export default function Register() {
  const { handleChange, handleSubmit } = useForm();

  return (

    <div className="register-page">
      <Header />
      <main className="register-page-main">
        <h2>Cadastro</h2>
        <FormGroup className="register-form">
          <FormControl className="form-group" fullWidth="false">
            <FormLabel htmlFor="name">Nome </FormLabel>
            <Input
              name="name"
              id="name"
              type="text"
              autoComplete="off"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className="form-group" fullWidth="false">
            <FormLabel htmlFor="email">Email </FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              autoComplete="off"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className="form-group type-password" fullWidth="false">
            <FormLabel htmlFor="password">Senha </FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              autoComplete="off"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className="form-group input-select-container" fullWidth="false">
            <FormLabel htmlFor="role">Função </FormLabel>
            <Select native label="Função" inputProps={{
              name: 'role'
            }} className="input-select" name="role" id="role" onChange={handleChange}>
              <option value=""></option>
              <option value="attendant">Atendente</option>
              <option value="chef">Cozinheiro(a)</option>
              <option value="admin">Administrador</option>
            </Select>
          </FormControl>
          <FormControl className="form-group register-btn-container" fullWidth="false">

            {/* <Button onClick={handleSubmit}
              className="button-primary"
            >Cadastrar</Button> */}
            <Button type="submit" buttonText="Cadastrar"
              onClick={handleSubmit} className="button-primary" />
          </FormControl>
        </FormGroup>
        <p className="already-a-user">Ja tem uma Conta?</p>
        <div className="link-container"><Link className="link" to="/">Faça o login</Link></div>
      </main>
    </div>
  )
}