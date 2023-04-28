/* eslint-disable react/prop-types */

import { useState } from "react"

const INITIAL_VALUE = {
  id: 1,
  title: '',
  subcategories: []
}

export default function Categoria({ addCategories, setAddCategories }) {

  const [categoria, setCategoria] = useState(INITIAL_VALUE)

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleCategoryName = (e) => {


    const nameValue = e.target.value
    let capitalizedNameValue = capitalize(nameValue);

    setCategoria({
      ...categoria,
      [e.target.name]: capitalizedNameValue
    })
  }

  const handleGuardarCategoria = (e) => {
    e.preventDefault();

    if (categoria.title == "") {
      alert('ingrese un nombre')
      return
    }
    // eslint-disable-next-line react/prop-types
    setAddCategories(
      [...addCategories,
      {
        ...categoria,
        id: Date.now(),
      }]
    )

    setCategoria(INITIAL_VALUE)
  }

  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", border: "1px solid #D6D5A8", borderRadius: "9px" }}
        onSubmit={handleGuardarCategoria}
      >
        <label style={{ color: "#fafafa" }} htmlFor="">Nombre de categoria</label>
        <input style={{ border: "1px solid #D6D5A8", padding: "5px" }} type="text" value={categoria.title} name='title' placeholder='EX. Muebles' onChange={handleCategoryName} />
        <button style={{ backgroundColor: "#D6D5A8", borderRadius: "99px", padding: "8px 16px" }}>Guardar</button>
      </form>
    </>
  )
}
