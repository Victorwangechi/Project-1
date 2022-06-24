const searchFrom = document.querySelector('.search');
const input =document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchFrom.addEventListener('submit', retrieve)

function retrieve(e){
let search; 


   if (input.value==''){
      alert('Type in your title first!')
      return
   } else {
      search = input.value
   }


   e.preventDefault()

   const apiKey = '4ee34072adc342389d94659d10e93c81'


let url =`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`


fetch(url).then((res)=>{

 return res.json()
   
}).then((data)=>{

  console.log(data)
  if(data.articles.length>0){
  data.articles.forEach(article => { 
     let li = document.createElement('li');
     let a = document.createElement('a');
     a.setAttribute('href', article.url);
     a.setAttribute('target', '_blank');
     a.textContent = article.title;
     
     li.appendChild(a);
     newsList.appendChild(li);
   })
} else {
   const noResults=document.createElement('p')
   noResults.textContent='no results found'
   newsList.appendChild(noResults)
  } 
   }).catch((error)=>{
      console.log(error)
   })



}



/* let topic = input.value;

console.log(topic)
 */

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}