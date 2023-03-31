import Logo from "../images/logo_queens_burguer.webp";

export function Header() {
  return (
    <header className="flex justify-center p-4">
      <img
        className="xs:w-full md:w-96"
        src={Logo}
        alt="Logo Queen´s Burguer"
      />
    </header>
  );
}
