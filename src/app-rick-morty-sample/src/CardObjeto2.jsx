import classes from './CardObjeto.module.css'

export default function CardObjeto2({ dados }) {
    return(
        <div className={classes.card}>
            <h1>{dados.titulo}</h1>
            <p>
                {dados.descricao}
            </p>           
            <button onClick={dados.funcao}>Executar</button> 
        </div>
    )
    
}