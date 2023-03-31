import { Button, FormControl, FormControlLabel, FormGroup, FormLabel, Input, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/navBar"

export default function CreateProduct() {

  const [product, setProduct] = useState({
    name: "",
    flavor: "",
    complement: "",
    price: "",
    image: "",
    type: "",
    subtype: ""
  });

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/product/" + id)
      const body = await response.json();
      setProduct(body)
    }
    if(id !== "new"){
      fetchData()
    }
  }, [id]);

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name

    let fullProduct = { ...product }
    fullProduct[name] = value

    setProduct(fullProduct)
  }

  async function handleSubmit(){
    console.log(product)
    await fetch("http://localhost:8080/product" + ((product.id) ? "/" + product.id : ""),
      {
        method: (product.id) ? "PUT" : "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }
    )
    navigate("/product")
  }

  return (
    <>
      <div>
        <NavBar />
        <h1>Criar novo produto</h1>
      </div>
      <div>
        <FormControl>
          <FormGroup>
            <FormLabel>Nome do produto</FormLabel>
            <Input type="text" name="name" id="name" onChange={handleChange} value={product.name}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Sabor</FormLabel>
            <Input type="text" name="flavor" id="flavor" onChange={handleChange} value={product.flavor}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Complemento</FormLabel>
            <Input type="text" name="complement" id="complement" onChange={handleChange} value={product.complement}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Preço</FormLabel>
            <Input type="number" name="price" id="price" onChange={handleChange} value={product.price}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Imagem</FormLabel>
            <Input type="text" name="image" id="image" onChange={handleChange} value={product.image}/>
          </FormGroup>
          <FormGroup row={<RadioGroup row />}>
            <FormLabel>Matinal ou Almoço</FormLabel>
            <RadioGroup value={product.type}>
              <FormControlLabel value="main" control={<Radio />} label="Matinal" onChange={handleChange} />
              <FormControlLabel  value="breakfast" control={<Radio />} label="Almoço" onChange={handleChange} />
            </RadioGroup>
          </FormGroup>
          <FormGroup row={<RadioGroup row />}>
            <FormLabel>Tipo de produto</FormLabel>
            <RadioGroup value={product.subtype}>
              <FormControlLabel value="sandwich" control={<Radio />} label="Lanche" onChange={handleChange} />
              <FormControlLabel value="sideDish" control={<Radio />} label="Acompanhamento" onChange={handleChange} />
              <FormControlLabel value="drink" control={<Radio />} label="Bebida" onChange={handleChange} />
              <FormControlLabel value="snack" control={<Radio />} label="Lanche matinal" onChange={handleChange} />
            </RadioGroup>
          </FormGroup>
          <FormGroup>
            <Button color="primary" onClick={handleSubmit} className="menu-button confirm-order">Salvar</Button>
            <Button color="secondary" tag={Link} href="/product" className="menu-button cancel-order">Cancelar</Button>
          </FormGroup>
        </FormControl>
      </div>
    </>
  )
}