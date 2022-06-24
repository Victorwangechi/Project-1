const searchFrom = document.querySelector('.search');
const input =document.querySelector('.input');
const newList = document.querySelector('.news-list');

searchFrom.addEventListener('submit', retrieve)

function retrieve(e){

   if (input.value==''){
      alert('Type in your title first!')
      return
   }

   newList.innerHTML=''

   e.preventDefault()

   const apiKey = '4ee34072adc342389d94659d10e93c81'

let url =`https://newsapi.org/v2/everything?q=${covid-19}&apiKey=${apiKey}`

fetch(url).then((res)=>{

 return res.json()
   
}).then((data)=>{

  console.log(data)
  data.articles.forEach(article => { 
     let li = document.createElement('li');
     let a = document.createElement('a');
     a.setAttribute('href', article.url);
     a.setAttribute('target', '_blank');
     a.textContent = article.title;
     
     li.appendChild(a);
     newList.appendChild(li);

   }).catch((error)=>{
      console.log(error)
   })
})


}



/* let topic = input.value;

console.log(topic)
 */

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}