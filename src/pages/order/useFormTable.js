import { useEffect, useState } from "react";
import { getAllProducts } from "../../service/dataService"

const UseFormTable = () => {
  const [listProducts, setListProducts] = useState([]);
  const [productSelect, setProductSelect] = useState()
  const [tab, setTab] = useState([])
  const [valorTotal, setValeoTotal] = useState(0)

  useEffect(() => {
    getAllProducts().then((response) => {
      console.log("lista de produtos", response)
      setListProducts(response)
    })
  }, []);

  const handleProductSelect = (event, product) => {
    setProductSelect(product);
  }

  useEffect(() => {
    if(!productSelect) return
    const produtoRepetido = tab.find((item) => item.product == productSelect)
    if(produtoRepetido){
      produtoRepetido.quant++
    }else{
      tab.push({
        quant: 1,
        product: productSelect
      })
    }
    setTab([...tab])
    setProductSelect(undefined)
  }, [productSelect])

  const blabla = () => {
    console.log("calculei")
    return tab.reduce((valorAnterior, valorAtual) => {
      console.log(valorAtual)
      return valorAnterior + valorAtual.product.price * valorAtual.quant
    }, 0
    )
  }

  useEffect(() => {
    const calculado = blabla()
    console.log(calculado)
    setValeoTotal(calculado)
  }, [tab])

  return { listProducts, handleProductSelect, tab, valorTotal }
}
export default UseFormTable