/* eslint-disable react/prop-types */

import { Box, Button, FormLabel, Input, Select, Text } from "@chakra-ui/react"
import { useState } from "react"


function SubCategoria({ addCategories, setAddCategories }) {


  const [subCategoria, setSubCategoria] = useState({
    id: 0,
    title: '',
    subcategories: []
  })
  const [id, setId] = useState(0)

  const handleCategoryName = (e) => {

    setSubCategoria({
      ...subCategoria,
      [e.target.name]: e.target.value
    })
  }

  const handleGuardarCategoria = (e) => {
    e.preventDefault();
    if(subCategoria.title == ""){
      alert('ingrese un nombre')
      return
    }
    // eslint-disable-next-line react/prop-types
    setAddCategories([...addCategories],
      addCategories.filter((category) => category.id == id).map((item) => (
        item.subcategories.push(subCategoria)
      ))
    )

    setSubCategoria({
      ...subCategoria,
      title: '',
    })

  }


  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "9px", padding: "1rem 0", border: "1px solid #D6D5A8", borderRadius: "9px", padding: "9px" }}
        onSubmit={handleGuardarCategoria}
      >
        <label style={{ color: "#fafafa" }} htmlFor="">nombre de subcategoría</label>
        <input style={{ border: "1px solid #D6D5A8", padding: "5px" }} type="text" name='title' placeholder='EX. Muebles' value={subCategoria.title} onChange={handleCategoryName} />
        <label style={{ color: "#fafafa" }} >categoría</label>
        <select style={{ border: "1px solid #D6D5A8", padding: "5px" }} name="" id="" onChange={(e) => setId(e.target.value)}>
          {
            addCategories.map((category, idx) => (
              <option  key={idx} value={category.id}>{category.title}</option>
            ))
          }
        </select >
        <button style={{ backgroundColor: "#D6D5A8", borderRadius: "99px", padding: "8px 16px" }}>Guardar</button>
      </form></>
  )
}

export default SubCategoria