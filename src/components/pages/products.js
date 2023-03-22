import NavBar from "../navBar";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, Table } from '@mui/material';
import { Link } from "react-router-dom";

export default function Products() {

  const [listProducts, setListProducts] = useState([]);

  async function fetchData() {
    const response = await fetch("http://localhost:8080/product");
    const body = await response.json();
    setListProducts(body);
  }

  useEffect(() => {
    fetchData();
  },[]);

  async function handleDelete(id) {
    await fetch("http://localhost:8080/product/" + id,
      {
        method: "DELETE",
      }
    );
    console.log("cheguei no delete")
    fetchData();
  }

  return (
    <>
      <NavBar />
      <div>
        <h1>Produtos</h1>
      </div>
      <Button tag={Link} href="/product/new">Incluir Produto</Button>
      <Table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Sabor</th>
            <th>Complemento</th>
            <th>Tipo</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            listProducts.map((product) =>
              <tr>
                <td>{product.name}</td>
                <td>{product.flavor}</td>
                <td>{product.complement}</td>
                <td>{product.type}</td>
                <td>{product.price}</td>

                <ButtonGroup>
                  <Button tag={Link} href={"/product/" + product.id}>Editar</Button>
                  <Button onClick={() => handleDelete(product.id)}>Remover</Button>
                </ButtonGroup>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>

  )
}