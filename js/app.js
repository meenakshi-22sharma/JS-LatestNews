//apikey 
//20bfd8de32c24e97938741ec38336cab
let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=20bfd8de32c24e97938741ec38336cab`;
let newsHeadline=document.getElementById('newsAccordian');
let html =``;


let newXHR= new XMLHttpRequest();
newXHR.open('GET',url,true);
newXHR.getResponseHeader('Content-type','application/json');
newXHR.onload=function(){
  if(this.status==200){
      console.log("OK Done");
     let json= JSON.parse(this.responseText);
     let articles = json.articles;
     Array.from(articles).forEach((element,index) => {
         console.log(element)
         html+=`<div class="accordion-item">
         <h2 class="accordion-header" id="headingOne">
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
           <h5><b>Breaking News ${index+1}</b>  ${element.title}</h5> 
           </button>
         </h2>
         <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordian">
           <div class="accordion-body">
           <img src="${element.urlToImage}" class="card-img-top" alt=".." style="width:80px;height:80px;">
             <strong>${element.source.name}.</strong>  ${element.description} . <a href="${element.url}">Click for more details</a> 
           </div>
         </div>
       </div>
       `;
     });
     newsHeadline.innerHTML=html;

  }
  else{
      console.log("EROOR");
  }
};
newXHR.send();;
