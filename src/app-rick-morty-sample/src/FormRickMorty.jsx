import { useState } from "react";

export default function FormRickMorty( {adicionarPersonagem} ) {
    const [form, setForm] = useState({
        name: "",
        status: "",
        species: "",
        gender: "",
        origin: "",
        image: "",
      })

    const onSubmit = (evt) => {
        evt.preventDefault()
        console.log(form)
        adicionarPersonagem({
          ...form,
          id:Math.random(),
          origin:
              {
                  name: form.origin
              }
        })
      }

      const onChange = (evt) => setForm(old =>
        ({
            ...old,
            [evt.target.name]: evt.target.value
        }))



  return (
    <div>
      <h1>Formulário de Cadastro</h1>
      <form
        onSubmit= { onSubmit }
      >
        <div>
          <label>Nome</label>
          <input name="name" 
            value={form.name} 
            onChange={ onChange } />
        </div>
        <div>
          <label>Status</label>
          <input 
            name="status" 
            value={form.status}  
        //     onChange={evt => setForm(old => ({
        //         ...old,
        //         status: evt.target.value
        //   }))} 
            onChange={ onChange }
          />
        </div>

        <div>
          <label>Espécie</label>
          <input 
            name="species" 
            value={form.species}  
            onChange={ onChange }
             />
        </div>

        <div>
          <label>Gênero</label>
          <input
            name="gender" 
            value={form.gender}
            onChange={ onChange }
            />
        </div>

        <div>
          <label>Origem</label>
          <input
            name="origin" 
            value={form.origin}
            onChange={ onChange }
            />
        </div>
        <div>
          <label>Imagem</label>
          <input 
            name="image" 
            value={form.image}
            onChange={ onChange }
            />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
