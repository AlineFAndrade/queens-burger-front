import { Button, ButtonGroup, Modal, Table } from '@mui/material';
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar";
import UseForm from "./useForm";

export default function Products() {

  const { productList, handleChange, values, onClickDelete, toggleModal, fetchData, handleDelete, showModalDel } = UseForm();

  return (
    <div className="bg-zinc-900 w-full h-screen flex flex-col justify-center items-center p-8">
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
            productList.map((product) =>
              <tr>
                <td>{product.name}</td>
                <td>{product.flavor}</td>
                <td>{product.complement}</td>
                <td>{product.type}</td>
                <td>{product.price}</td>

                <ButtonGroup>
                  <Button tag={Link} href={"/product/" + product.id}>Editar</Button>
                  <Button onClick={() => onClickDelete(product.id)}>Remover</Button>
                </ButtonGroup>
              </tr>
            )
          }
        </tbody>
      </Table>
      <Modal isOpen={showModalDel} toggle={toggleModal}>
        <div toggle={toggleModal}>Exclusão de cliente</div>
        <div>
          Tem certeza que deseja excluir o cliente ID {handleChange()}?
        </div>
        <div>
          <Button color="primary" onClick={() => handleDelete(handleChange())}>Sim</Button>
          <Button color="secondary" onClick={toggleModal}>Não</Button>
        </div>
      </Modal>
    </div>
  )
}