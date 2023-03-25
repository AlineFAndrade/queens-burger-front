import { FormControl } from "@mui/material";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

import "../../../styles/header.css"
import "../../../styles/login.css"

export default function Login() {

  return (
    <div className="loginPage">
      <Header/>
      <div className="loginPage__main">
        <h2 className="text">Login</h2>
          <FormControl className="formControl">
            <label className="text">Email </label>
            <Input type="text" className="input"/>
          </FormControl>
          <FormControl className="formControl">
            <label className="text">Senha </label>
            <Input type="text" className="input"/>
          </FormControl>
          <FormControl className="formControl ">
            <Button buttonText="Login" className="button-primary"/>
            <Button buttonText="Cadastrar novo usuário" className="button"/>
          </FormControl>
      </div>
    </div>
  )
}