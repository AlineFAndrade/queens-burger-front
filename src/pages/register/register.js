import { Link } from "react-router-dom";
import { InputWithIcon } from "../../components/inputWithIcon";
import { Header } from "../../components/header";
import UseForm from "./useForm";
import { Button } from "../../components/button";

export default function Register() {
  const { handleChange, handleSubmit } = UseForm();
  const optionsSelect = [
    { value: "", label: "Selecione a sua função" },
    { value: "attendant", label: "Atendente" },
    { value: "chef", label: "Cozinheiro(a)" },
    { value: "admin", label: "Administrador" },
  ];
  return (
    <div className="bg-zinc-900 w-full h-full flex flex-col justify-center items-center p-8">
      <Header />
      <main className="w-full max-w-sm text-center">
        <h2 className="text-white text-3xl my-8">Cadastro</h2>
        <div className="flex flex-col gap-5 justify-center items-center ">
          <InputWithIcon
            type="text"
            placeholder="Insira seu nome"
            label="Nome"
            onChange={handleChange}
          />
          <InputWithIcon
            type="email"
            placeholder="Insira seu e-mail"
            label="E-mail"
            onChange={handleChange}
          />
          <InputWithIcon
            type="password"
            placeholder="Insira sua senha"
            label="Senha"
            onChange={handleChange}
          />
          <InputWithIcon
            type="select"
            placeholder="Escolha sua função"
            label="Função"
            onChange={handleChange}
            value={optionsSelect}
          />
          <Button
            buttonText="Cadastrar"
            onClick={handleSubmit}
            className="text-zinc-900 bg-yellow-500 font-semibold mt-5 mb-10 px-3 py-4 rounded text-base w-full transition-colors hover:bg-yellow-300 outline-none focus:ring-2 ring-white"
          />
        </div>

        <Link
          to={{
            pathname: "/",
          }}
          className="text-zinc-400"
        >
          Já possui conta? Faça login
        </Link>
      </main>
    </div>
  );
}
