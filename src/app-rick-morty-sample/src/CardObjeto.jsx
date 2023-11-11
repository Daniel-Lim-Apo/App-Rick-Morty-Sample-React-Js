// css modules
import classes from './CardObjeto.module.css'

export default function CardObjeto(props) {

    return(
        <div className={classes.card}>
            <h1>{props.titulo}</h1>
            <p>
                {props.children}
            </p>           
            <button onClick={props.onClick}>Executar</button> 
        </div>
    )
}