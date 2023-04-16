
import UseFormTable from "./useFormTable"

export default function OrderTable() {
  const { listProducts, handleProductSelect, tab, valorTotal } = UseFormTable()

  return (
    <div>
      <h1>Menu</h1>
      <nav className="w-8 h-6 m-1 bg-gray-400 relative">
        <ul >
          <li className="w-20 p-0  block text-center">
            <input type="radio" name="tabs" className="hidden checked:bg-blue-900" id="tab1" />
            <label className="cursor-pointer " htmlfor="tab1">Produto</label>
            <div className="content">
              <table className=" border-separate border-spacing-2 border border-slate-400 ...">
                <thead className="table-header">
                  <tr>
                    <th className="w-10 border border-slate-600">Nomedoproduto</th>
                    <th className="w-10 border border-slate-300">Sabor/Característica</th>
                    <th className="w-10 border border-slate-300 ...">Complemento</th>
                    <th className="w-10 border border-slate-300 ...">Preço</th>
                  </tr>
                </thead>
                <tbody>
                  {listProducts.filter((product) => {
                    return product.subtype === "sandwich"
                  }).map((product) =>
                    <tr className="cursor-pointer" onClick={event => handleProductSelect(event, product)}>
                        <td>{product.name} </td>
                        <td>{product.flavor} </td>
                        <td>{product.complement} </td>
                        <td>{product.price} </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </li >
          <li className="w-20 p-0  block text-center">
            <input type="radio" name="tabs" className="hidden " id="tab2" />
            <label className="checked:bg-blue-500  cursor-pointer" htmlfor="tab2">Acompanhamento</label>
            <div className="content">
              <table className="table-auto border-separate border-spacing-2 border border-slate-400 ...">
                <thead className="table-header">
                  <tr>
                    <th className="w-10 border border-slate-600">Nomedoproduto</th>
                    <th className="w-10 border border-slate-300">Sabor/Característica</th>
                    <th className="w-10 border border-slate-300 ...">Complemento</th>
                    <th className="w-10 border border-slate-300 ...">Preço</th>
                  </tr>
                </thead>
                <tbody>
                  {listProducts.filter((product) => {
                    return product.subtype === "sideDish"
                  }).map((product) =>
                    <tr className="cursor-pointer" onClick={event => handleProductSelect(event, product)}>
                      <td>{product.name} </td>
                      <td>{product.flavor} </td>
                      <td>{product.complement} </td>
                      <td>{product.price} </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </li >
          <li className="w-20 p-0  block text-center">
            <input type="radio" name="tabs" className="hidden" id="tab3" />
            <label className="checked:bg-blue-500 cursor-pointer" htmlfor="tab3">Bebidas</label>
            <div className="content">
              <table className="table-auto border-separate border-spacing-2 border border-slate-400 ...">
                <thead className="table-header">
                  <tr>
                    <th className="w-10 border border-slate-600">Nomedoproduto</th>
                    <th className="w-10 border border-slate-300">Sabor/Característica</th>
                    <th className="w-10 border border-slate-300 ...">Complemento</th>
                    <th className="w-10 border border-slate-300 ...">Preço</th>
                  </tr>
                </thead>
                <tbody>
                  {listProducts.filter((product) => {
                    return product.subtype === "drinks"
                  }).map((product) =>
                    <tr onClick={event => handleProductSelect(event, product)}>
                      <td>{product.name} </td>
                      <td>{product.flavor} </td>
                      <td>{product.complement} </td>
                      <td>{product.price} </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </li >
          <li className="w-20 p-0 block text-center">
            <input type="radio" name="tabs" className="hidden" id="tab4" />
            <label className="checked:bg-blue-500  cursor-pointer" for="tab4">Snacks</label>
            <div className="content">
              <table className="table-auto border-separate border-spacing-2 border border-slate-400 ...">
                <thead className="table-header">
                  <tr>
                    <th className="w-10 border border-slate-600">Nomedoproduto</th>
                    <th className="w-10 border border-slate-300">Sabor/Característica</th>
                    <th className="w-10 border border-slate-300 ...">Complemento</th>
                    <th className="w-10 border border-slate-300 ...">Preço</th>
                  </tr>
                </thead>
                <tbody>
                  {listProducts.filter((product) => {
                    return product.subtype === "snack"
                  }).map((product) =>
                    <tr onClick={event => handleProductSelect(event, product)}>
                      <td>{product.name} </td>
                      <td>{product.flavor} </td>
                      <td>{product.complement} </td>
                      <td>{product.price} </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </li >
        </ul>
      </nav>
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
                {item.product.flavor}
                {item.product.complement}
                {item.product.price}
              </div>
            )
          })}
        </div>
        <div>
          <h3>Valortotal</h3>
          <h3>{valorTotal}</h3>
        </div>

      </div>
    </div>
  )
}