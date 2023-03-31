import NavBar from "../../components/navBar";
import burger from "../../images/burger.png";
import chicken from "../../images/chicken-burger.png";
import vegan from "../../images/vegan-burger.png";
import fries from "../../images/fries.png";
import onion from "../../images/onion-rings.png";
import water from "../../images/water.png";
import soda from "../../images/soda.png";

import UseForm from "./useForm";

export default function Order() {
  const { handleChange, handleSubmit } = UseForm();
  
  return (
    <div>
      <div>
        <h1>Anotar Pedido</h1>
      </div>
      <section>
            <div>
              <div>
                <h3>Burgers</h3>
              </div>
              <div>
                <div>
                  <img src={burger} alt="burger" />
                  <input
                    type="radio"
                    name="burger"
                    value="carne"
                    id="burger"
                    onChange={handleChange}
                  />
                  <label htmlFor="burger">
                    Carne
                  </label>
                </div>
                <div>
                  <img src={chicken} alt="chicken burger" />
                  <input
                    type="radio"
                    name="burger"
                    value="frango"
                    id="chicken-burger"
                    onChange={handleChange}
                  />
                  <label htmlFor="chicken-burger">
                    Frango
                  </label>
                </div>
                <div>
                  <img src={vegan} alt="vegan-burger" />
                  <input
                    type="radio"
                    name="burger"
                    value="vegetariano"
                    id="vegan-burger"
                    onChange={handleChange}
                  />
                  <label htmlFor="vegan-burger">
                    Vegetariano
                  </label>
                </div>
              </div>

              <div>
                <div>
                  <h3>Opções</h3>
                </div>
                <div>
                  <div>
                    <div>
                      <input
                        type="radio"
                        name="extra1"
                        value="Hambúrguer simples"
                        id="simple"
                        onChange={handleChange}
                      />
                      <label htmlFor="simple">
                        Simples
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="extra1"
                        value="Hambúrguer duplo"
                        id="double"
                        onChange={handleChange}
                      />
                      <label htmlFor="double">
                        Duplo
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3>Extras</h3>
                  </div>

                  <div>
                    <div>
                      <input
                        type="radio"
                        name="extra2"
                        value="queijo"
                        id="cheese"
                        onChange={handleChange}
                      />
                      <label htmlFor="cheese">
                        Queijo
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="extra2"
                        value="ovo"
                        id="egg"
                        onChange={handleChange}
                      />
                      <label htmlFor="egg">
                        Ovo
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="extra2"
                        value="nenhum"
                        id="none"
                        onChange={handleChange}
                      />
                      <label htmlFor="none">
                        Nenhum
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3>Acompanhamentos</h3>
              </div>
              <div>
                <div>
                  <img src={fries} alt="fries" />
                  <input
                    type="radio"
                    name="side"
                    value="Batata frita"
                    id="fries"
                    // onChange={filterByItemName}
                  />
                  <label htmlFor="fries">
                    Fritas
                  </label>
                </div>
                <div>
                  <img src={onion} alt="onion-rings" />
                  <input
                    type="radio"
                    name="side"
                    value="Anéis de cebola"
                    id="onion-rings"
                    // onChange={filterByItemName}
                  />
                  <label htmlFor="onion-rings">
                    Anéis de cebola
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3>Acompanhamentos</h3>
              </div>
              <div>
                <div className="drink">
                  <img src={water} alt="water" />
                  <input
                    className="input-radio items"
                    type="radio"
                    name="drink"
                    value="Água 500mL"
                    id="water"
                    // onChange={filterByItemName}
                  />
                  <label className="label" htmlFor="water">
                    Água
                  </label>
                </div>
                <div className="drink">
                  <img src={soda} alt="soda" />
                  <input
                    className="input-radio items"
                    type="radio"
                    name="drink"
                    value="Refrigerante 500mL"
                    id="soda"
                    // onChange={filterByItemName}
                  />
                  <label className="label" htmlFor="soda">
                    Refrigerante
                  </label>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}