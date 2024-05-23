
//? richiamo la sezione nel dom
const sezione= document.querySelector('#section'); 

//> array del team 
let team= [ 
   //< oggetti 
   { img:'img_wayne',
    nome: 'Wayne Barnett',
    job : 'Founder & Ceo'
    },
    {
         img: 'img_angela',
          nome: 'Angela Caroll',
          job : 'Chief Editor'
    },
    {
        img: 'img_walter',
          nome: 'Walter Gordon',
          job : 'Office Manager'
    },
    {
        img: 'img_lopez',
        nome: 'Angela Lopez',
          job : 'Social Media Manager'
    },
    {
        img: 'img_scott',
          nome: 'Scott Estrada',
          job : 'Developer'
    },
    {
        img: 'img_barbara',
          nome: 'Barbara Ramos',
          job : 'Graphic Designer'
    },
  
  
]

//todo Ciclo for per stampare l'array


    for(let key in team){
        console.log(team[key]);
    }
  
    //$ stampo l'array sul dom

   
      
      for(let i=0; i < team.length; i++){
        
        let div=  document.createElement('div');
           
        div.classList.add('card');
        
        sezione.append(div);
            const single= team[i];
        
        for(let chiave in team[i]){
          
            div.append(single[ chiave]);
            

         }     

      }
  