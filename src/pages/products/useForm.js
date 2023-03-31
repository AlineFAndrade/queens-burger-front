import { useState, useEffect } from "react";
import { getAllProducts, handleDelete } from "../../service/dataService"

const useForm = () => {

  let allProducts = [];

  const productList = () => {
    getAllProducts().then((result) => {
      result.json().then((data) => {
        allProducts = data
      })
    })
    return allProducts
  }


  const [values, setValues] = useState({
    id: "",

  })
  const [listProducts, setListProducts] = useState([]);
  const [showModalDel, setShowModalDel] = useState(false);
  const [idProduct, setIdProduct] = useState();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }
  const onClickDelete = (id) => {
    setShowModalDel(true);
    setIdProduct(id)
  }

  const toggleModal = () => {
    setShowModalDel(false)
    setIdProduct("")
  }
  async function fetchData() {
    const response = await fetch("http://localhost:8080/product");
    const body = await response.json();
    setListProducts(body);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleDelete(id) {
    await fetch("http://localhost:8080/product/" + values.id,
      {
        method: "DELETE",
      }
    );
    fetchData()
    toggleModal()
  }

  return { productList, handleChange, values, onClickDelete, toggleModal, fetchData, handleDelete, showModalDel }
}
export default useForm;