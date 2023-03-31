import { useState, useEffect } from "react"
import { getAllProducts } from "../../service/dataService"

const UseForm = () => {

  const [productValue, setProductValue] = useState({
    name: '',
    flavor: '',
    complement: ''
  })

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setProductValue({
      ...productValue,
      [name]: value
    })
  }

  const productList = getAllProducts();

  useEffect(() => {
    if (productValue.name !== "" && 
        productValue.flavor !== "" &&  
        productValue.complement !== "") {
      productList.filter( (product) => {
        return product.name === productValue.name &&
               product.flavor === productValue.flavor &&
               product.complement === productValue.complement
               console.log()
      })
    }
  }, [productList, productValue]);


 



  const handleSubmit = () => {

  }

  return { handleChange, handleSubmit }
}

export default UseForm;