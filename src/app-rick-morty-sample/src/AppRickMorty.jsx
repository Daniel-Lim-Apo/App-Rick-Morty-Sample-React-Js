import { useEffect, useState } from "react";
import classes from "./AppRickMorty.module.css";
import FormRickMorty from "./FormRickMorty.jsx";
// const buscarPersonagens = () =>

export default function AppRickMorty() {
  const [loading, setLoading] = useState(false);
  const [lista, setLista] = useState([]);
  const [selecionados, setSelecionados] = useState([]);
  
  useEffect(() => {
    setLoading(true);
    fetch("https://rickandmortyapi.com/api/character")
      .then((result) => result.json())
      .then((dados) => setLista(dados.results.filter((x) => x.id < 5)))
      .then(() => setLoading(false));
  }, []);


  const adicionarPersonagem = (personagem) => {
    if (selecionados.find(p => p.id === personagem.id))
    {
        // alert(personagem.name & " já foi selecionado")
        alert(" já foi selecionado")
        return
    }
        console.log("Adicionando personagem", personagem)
        setSelecionados(old => [...old, personagem])
    
  }

  const removerPersonagem = (personagem) => {
    console.log("Removendo personagem", personagem)
    setSelecionados(old => [...old.filter(p => p.id !== personagem.id)])
  }

  return (
    <>
      <h1>App RickMorty</h1>

       <section>
        <FormRickMorty adicionarPersonagem={ adicionarPersonagem }/>
      </section>

      <section>
        <h3>Resultado da API</h3>
        {loading && <div>Carregando...</div>}
        <ListaPersonagens 
            lista={lista} 
            // selecionaPersonagem={(personagem) => 
            //     setSelecionados(old => [...old, personagem])}
            selecionaPersonagem={adicionarPersonagem}
            />
            <button onClick={() => setSelecionados(lista)}> Selecionar todos </button>
            <button onClick={() => setSelecionados([])}> Limpar seelção </button>
            <button onClick={() => setSelecionados([lista[0]])}> Selecionar o primeiro </button>
            <button onClick={() => setSelecionados([lista[1]])}> Selecionar o segundo </button>
      </section>
      <hr />
      <section>
        <h3>Itens Selecionados</h3>
        <ListaPersonagens
            lista={selecionados} 
             // selecionaPersonagem = {(personagem) => setSelecionados(old => [...old.filter(p => p.id !== personagem.id)])}
            selecionaPersonagem = {removerPersonagem}
            />
      </section>
    </>
  );
}

function ListaPersonagens({ lista, selecionaPersonagem }) {
  return (
    <div className={classes.box}>
      {/* {JSON.stringify(lista)} */}
      {lista.map((personagem) => (
        // <div key={personagem.id}>
        //     <img src={personagem.image} alt={personagem.name} />
        //     <h2>{personagem.name}</h2>
        //     <p>{personagem.status}</p>
        // </div>

        <div key={personagem.id} className={classes.card}>
          {/* <div key = {personagem.id}> */}
          {/* {console.log(personagem.name)} */}
          <img src={personagem.image} style={{ width: "100%" }} />
          <div 
            className="container"
            key={personagem.id}
            onClick={() => selecionaPersonagem(personagem)}
            >
            <h4>
              <b>{personagem.name}</b>
            </h4>
            <p>Status: {personagem.status}</p>
            <p>Espécie: {personagem.species}</p>
            <p>Gênero: {personagem.gender}</p>
            <p>Origem: {personagem.origin.name}</p>
          </div>

          {/* <div> <img src={personagem.image} /></div> */}

          {/* </div> */}
        </div>
      ))}
    </div>
  );
}
