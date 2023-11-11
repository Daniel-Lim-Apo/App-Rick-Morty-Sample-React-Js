// http://localhost:5291/Procedimentos?Unidade=51040100&Tipo=2&Ano=2019&TipoPrisao=1

fetch('http://localhost:5291/Procedimentos/150/11/2019/51040100')
    .then( result => response.json() )
    .then( dados => console.log(dados));