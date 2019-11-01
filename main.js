let chamada = [
    {
       Nome: 'Geysa',
       Idade: '20 Anos',
       Polo: 'PZR' ,
    },
    {
        Nome: 'Carol',
        Idade: '19 Anos',
        Polo: 'PZR' ,
     },
     {
        Nome: 'Maicon',
        Idade: '23 Anos',
        Polo: 'CPX' ,
     },
     {
        Nome: 'Victor',
        Idade: '24 Anos',
        Polo: 'CPX' ,
     },
     {
        Nome: 'Estefania',
        Idade: '22 Anos',
        Polo: 'PZR' ,
     },
     {
        Nome: 'Zayra',
        Idade: '24 Anos',
        Polo: 'PZR' ,
     },
     {
        Nome: 'Cleton',
        Idade: '19 Anos',
        Polo: 'CPX' ,
     },
     {
        Nome: 'Renan',
        Idade: '15 Anos',
        Polo: 'PZR' ,
     },
     {
        Nome: 'Rayssa',
        Idade: '21 Anos',
        Polo: 'CPX' ,
     },
     {
        Nome: 'Luan',
        Idade: '18 Anos',
        Polo: 'CPX' ,
     },
     {
        Nome: 'Arthur',
        Idade: '24 Anos',
        Polo: 'PZR' ,
     },
     {
        Nome: 'Cicero',
        Idade: '24 Anos',
        Polo: 'PZR', 
     },
     {
        Nome: 'Jorge',
        Idade: '58 Anos',
        Polo: 'CPX' ,
     },
     {
        Nome: 'Cassio',
        Idade: '31 Anos',
        Polo: 'PZR', 
     }
];

let lista = chamada.map(function(){
   for(let i=0; i<chamada.length; i++){
      return chamada[i].Nome
   }
}) 

console.log(lista)