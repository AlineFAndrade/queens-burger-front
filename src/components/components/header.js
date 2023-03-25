import Logo from "../../images/Logo.svg";

export function Header(){
  return(
    <header className="header">
        <img
          className="responsive center"
          src={Logo}
          alt="Logo Burguer Queen"
        />
      </header>
  )
}