import * as React from "react";
import { Link } from "react-router-dom";
import UseForm  from "./useForm";
import { Button } from "../../components/button";
import { InputWithIcon } from "../../components/inputWithIcon";

import Logo from "../../images/logo_queens_burguer.webp";

export default function Login() {
  const { handleChange, handleSubmit } = UseForm();
  return (
    <div className="bg-zinc-900 w-full h-screen flex flex-col justify-center items-center p-8">
      <img className="xs:w-full md:w-96" src={Logo} alt="Logo Burguer Queen" />
      <h2 className="text-white text-3xl my-8">Login</h2>
      <div className="flex flex-col gap-5 justify-center items-center w-full max-w-sm">
        <InputWithIcon
          type="email"
          placeholder="Insira seu nome de usuário"
          label="Username"
          onChange={handleChange}
          name="username"
        />
        <InputWithIcon
          type="password"
          placeholder="Insira sua senha"
          label="Senha"
          onChange={handleChange}
          name="password"
        />
        <Button
          buttonText="Login"
          className="text-zinc-900 bg-yellow-500 font-semibold mt-5 mb-10 px-3 py-4 rounded text-base w-full transition-colors hover:bg-yellow-300 outline-none focus:ring-2 ring-white"
          onClick={handleSubmit}
        />
      </div>
      <Link
        to={{
          pathname: "/register",
        }}
        className="text-zinc-400"
      >
        Não possui conta? Crie uma agora
      </Link>
    </div>
  );
}
