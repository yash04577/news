const API_KEY = "18166c76c12641bfbf851520a7962ec9"
const main_container = document.getElementById("main_container");
let query = document.getElementById("query").value;

if(query == ""){
  query = "india"
}

let URL = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=18166c76c12641bfbf851520a7962ec9`

const get_data = async (main_url) => {

  main_container.innerHTML = ""

  if(main_url == undefined){

    query = document.getElementById("query").value;
    main_url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&apiKey=18166c76c12641bfbf851520a7962ec9`
  }
  
  const response = await fetch(main_url)
  const data = await response.json();
  console.log(data);
  
  data.articles.forEach(element => {
    
    let card = document.createElement('div');
    card.classList = "card my_card"

    card.innerHTML = ` 
    <div style="width: 18rem;">
      <img src="${element.urlToImage}" class="card-img-top" id="c_img1" alt="Loading.......">
      <div class="card-body">
        <h5 class="card-title" id="ct1">${element.title}</h5>
        <a href="${element.url}" class="btn btn-primary" id="lm1">Learn More</a>
      </div>
    </div>`
    
    main_container.appendChild(card);
  });
}

const quick_btn = document.getElementsByClassName("quick_btn");
const quick_btn_arr = Array.from(quick_btn);

quick_btn_arr.forEach(element =>{

   element.addEventListener('click', ()=>{
      query = element.textContent;
      get_data(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=18166c76c12641bfbf851520a7962ec9`)
   })
})

get_data(URL);
