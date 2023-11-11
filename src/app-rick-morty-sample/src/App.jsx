import { useState } from 'react'
import CardObjeto from './CardObjeto'
import CardObjeto2 from './CardObjeto2'

const dados = {
    titulo: 'Título 4',
    descricao: 'sdfasdfasdfasdfasdf',
    funcao: () => console.log('teste 4')
}

const lista = [
    {
        titulo: 'Título 5',
        descricao: 'sdfasdfa sd fa sdfasdf',
        funcao: () => {}
    },
    {
        titulo: 'Título 6',
        descricao: 'sdfasdadghhhhhfasdfasdfasdf',
        funcao: () => {}
    },
    {
        titulo: 'Título 7',
        descricao: 'ASDAKKDKsdfasdfasdfasdfasdf',
        funcao: () => {}
    }

]


export default function App(){

    const [mostrar, setMostrar] = useState(true)

    return (
        <>
        <div>
            {mostrar === true && <CardObjeto titulo = "Título 1" onClick={() => console.log("Teste 1")}>
                Conteúdo Teste
            </CardObjeto>}
            <CardObjeto titulo = "Título 2" onClick={() => alert("Teste 2")}>
                Conteúdo Teste 2
            </CardObjeto>
            <CardObjeto titulo = "Título 3" onClick={() => setMostrar(old => !old)}>
                Conteúdo Teste 3
            </CardObjeto>
        </div>
        <div style = {{
            backgroundColor: '#123456'
        }}>
            {lista.map(elemento => <CardObjeto2 key={elemento.titulo} dados={elemento} />) }
        </div>
        </>
    )
}
