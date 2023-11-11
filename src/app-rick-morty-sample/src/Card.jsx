import { useState } from 'react'
// Todo componente é uma função !!
// Hooks 


export default function Card({ valorInicial }){

  const [valor, setValor] = useState(valorInicial)
  const [nome, setNome] = useState('')
  return (
    <div style={{
      border: '1px solid #ccc',
      width: '400px',
    }}>
      <div>
        <h3>Hello world!</h3>
        <h3>Contador = {valor}</h3>
        <button onClick={ () => setValor(old => ++old)}> Botão </button>
      </div>
      <div>
        <h1> Meu nome é {nome}.</h1>
        <input value={nome} onChange={(evento) => setNome(evento.target.value )} />
      </div>
    </div>
  );
}