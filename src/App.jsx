
import { useState } from 'react'
import './App.css'


function App() {

  const [nombreCategoria, setNombreCategoria] = useState('')
  const [nombreCategoriaHijo, setNombreCategoriaHijo] = useState('')

  const [categoriaPadre, setCategoriaPadre] = useState([
    {
      id: 1,
      name: "Muebles",
      subcategories: []
    }
  ])

  const [categoriaHijo, setCategoriaHijo] = useState([
    {
      id: 1,
      name: "Muebles de cocina",
      padre: '',
      subcategories: []
    }
  ])

  const handleCategoriaPadre = (e) => {
    const nombreCategoria = e.target.value
    setNombreCategoria(nombreCategoria)

    // return nuevaCategoriaPadre = { id: Date.now(), name: nombreCategoria, subcategories: [] }
  }

  const handleSubmitCategoriaPadre = (e) => {
    e.preventDefault()
    const nuevaCategoriaPadre = { id: Date.now(), name: nombreCategoria, subcategories: [] }
    setCategoriaPadre(nuevaCategoriaPadre)
    setNombreCategoria('')
    alert('Categoria creada correctamente')

  }

  // categiras hijo
  const handleNameCatHijo = (e) => {
    const nombreCategoriaHijo = e.target.value
    setNombreCategoriaHijo(nombreCategoriaHijo)
  }

  const handleSubmitHijo = (e) => {
    e.preventDefault()
    const nuevaCategoriaHijo = { id: Date.now(), name: nombreCategoria, padre: '' , subcategories: [] }
    setCategoriaHijo(nuevaCategoriaHijo)
  }



  return (
    <>
      <h1>Categorias</h1>
      <form onSubmit={handleSubmitCategoriaPadre}>
        <label htmlFor="">Nombre de categoria</label>
        <input type="text" name='categoria_padre' placeholder='EX. Muebles' onChange={handleCategoriaPadre} />
        <button>Guardar</button>
      </form>
      <hr />
      <form onSubmit={handleSubmitHijo}>
        <div>
          {/* <label htmlFor=""></label>
          <input type="text" placeholder='EX. Muebles' /> */}
          <label htmlFor="">categoria padre</label>
          <select name="" id="">

            {
              categoriaPadre.map((padre, idx) => (
                <option key={idx} value="">{padre.name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <label htmlFor="">Nombre de categoria hijo</label>
          <input type="text" placeholder='EX. Muebles para el comedor' onChange={handleNameCatHijo} />
        </div>


        <button>Guardar</button>
      </form>
      <hr />
      <section style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
        {
          categoriaPadre.map((categoria, idx) => (
            <div key={idx}>
              <h3>{categoria.name}</h3>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default App
