/* eslint-disable react/prop-types */

import { useState } from "react"

export default function Categoria({ addCategories, setAddCategories }) {

  const [categoria, setCategoria] = useState({
    id: 0,
    title: '',
    subcategories: []
  })


  const handleCategoryName = (e) => {

    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  const handleGuardarCategoria = (e) => {
    e.preventDefault();

    if(categoria.title == ""){
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

    setCategoria({
      ...categoria,
      title: '',
    })
  }

  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "9px", padding: "1rem 0", border: "1px solid #D6D5A8", borderRadius: "9px", padding: "9px" }}
        onSubmit={handleGuardarCategoria}
      >
        <label style={{ color: "#fafafa" }} htmlFor="">Nombre de categoria</label>
        <input style={{ border: "1px solid #D6D5A8", padding: "5px" }} type="text" value={categoria.title} name='title' placeholder='EX. Muebles' onChange={handleCategoryName} />
        <button style={{ backgroundColor: "#D6D5A8", borderRadius: "99px", padding: "8px 16px" }}>Guardar</button>
      </form>
    </>
  )
}
