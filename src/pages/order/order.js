// import NavBar from "../../components/navBar";
// import burger from "../../images/burger.png";
// import chicken from "../../images/chicken-burger.png";
// import vegan from "../../images/vegan-burger.png";
// import fries from "../../images/fries.png";
// import onion from "../../images/onion-rings.png";
// import water from "../../images/water.png";
// import soda from "../../images/soda.png";

import UseForm from "./useForm";

export default function Order() {
  const { handleCheckProductName, handleCheckFlavor, handleCheckComplement, tab } = UseForm();

  return (
    <div className="flex p-8">
      <div>
        <h1>Anotar Pedido</h1>
        <div>
          <div >
            <div className="p-4">
              <h3>Burgers</h3>
              <div>
                <div >
                  {/* <img src={burger} alt="burger" /> */}
                  <input
                    type="radio"
                    name="burger"
                    value="Lanche de Carne"
                    id="burger"
                    onChange={handleCheckProductName}

                  />
                  <label htmlFor="burger">
                    Carne
                  </label>
                </div>
                <div>
                  {/* <img src={chicken} alt="chicken burger" /> */}
                  <input
                    type="radio"
                    name="burger"
                    value="Lanche de Frango"
                    id="chicken-burger"
                    onChange={handleCheckProductName}
                  />
                  <label htmlFor="chicken-burger">
                    Frango
                  </label>
                </div>
                <div>
                  {/* <img src={vegan} alt="vegan-burger" /> */}
                  <input
                    type="radio"
                    name="burger"
                    value="Lanche Vegetariano"
                    id="vegan-burger"
                    onChange={handleCheckProductName}
                  />
                  <label htmlFor="vegan-burger">
                    Vegetariano
                  </label>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3>Opções</h3>
              <div>
                <div>
                  <input
                    type="radio"
                    name="extra1"
                    value="simples"
                    id="simple"
                    onChange={handleCheckFlavor}
                  />
                  <label htmlFor="simple">
                    Hambúrguer simples
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="extra1"
                    value="duplo"
                    id="double"
                    onChange={handleCheckFlavor}
                  />
                  <label htmlFor="double">
                    Hambúrguer duplo
                  </label>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3>Extras</h3>
              <div>
                <input
                  type="radio"
                  name="extra2"
                  value="Queijo"
                  id="cheese"
                  onChange={handleCheckComplement}
                />
                <label htmlFor="cheese">
                  Queijo
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="extra2"
                  value="Cebola"
                  id="onion"
                  onChange={handleCheckComplement}
                />
                <label htmlFor="onion">
                  Cebola
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="extra2"
                  value=""
                  id="none"
                  onChange={handleCheckComplement}
                />
                <label htmlFor="none">
                  Nenhum
                </label>
              </div>
            </div>
            <div className="p-4">
              <h3>Acompanhamentos</h3>
              <div>
                <input
                  type="radio"
                  name="side"
                  value="Batata frita"
                  id="fries"
                  onChange={handleCheckProductName}
                />
                <label htmlFor="fries">
                  Fritas
                </label>
              </div>
              <div>
                {/* <img src={onion} alt="onion-rings" /> */}
                <input
                  type="radio"
                  name="side"
                  value="Cebola Empanada"
                  id="onion-rings"
                  onChange={handleCheckProductName}
                />
                <label htmlFor="onion-rings">
                  Cebola Empanada
                </label>

              </div>
              <div>
                <input
                  type="radio"
                  name="side"
                  value=""
                  id="none"
                  onChange={handleCheckProductName}
                />
                <label htmlFor="none">
                  Nenhum
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Bebidas</h3>
          <div className="drink">
            <input
              className="input-radio items"
              type="radio"
              name="drink"
              value="Água 500mL"
              id="water"
            onChange={handleCheckProductName}
            />
            <label className="label" htmlFor="water">
              Água
            </label>
          </div>
          <div className="drink">
            <input
              className="input-radio items"
              type="radio"
              name="drink"
              value="Refrigerante 500mL"
              id="soda"
            onChange={handleCheckProductName}
            />
            <label className="label" htmlFor="soda">
              Refrigerante
            </label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>Comanda</h2>
        </div>
        <div className="p-8">
          {tab.map((item) => {
            return (
              <div>
                {item.quant}
                {item.product.name}
                {item.product.price}
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}