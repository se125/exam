
let list=document.querySelector(".list")
let flas=document.querySelector('.flas')

$('.close').on('click', function () {

    console.log("hello");
    let x = $('.navbar').innerWidth()
    if ($('.nav-move').css('left') == '0px') {
        $('.nav-move').css('left', -x)
        $('.nav-img ').css("left", '0px')
        list.classList.remove("d-none")
        list.classList.add("d-inline-block")
        flas.classList.remove("d-inline-block")
        flas.classList.add("d-none")
    }
    
    else {
        $('.nav-move').css('left', '0px')
        $('.nav-img ').css("left", '75%')
        list.classList.remove("d-inline-block")
        list.classList.add("d-none")
        flas.classList.remove("d-none")
        flas.classList.add("d-inline-block")
    }

})


let Categories = document.getElementById('Categories')
Categories.addEventListener("click", function () {
    getCategory()
})

async function getCategory() {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let res = await data.json()
    console.log(res);

    displayCategory(res.categories)
    console.log(res.categories);
}

function displayCategory(response) {

    temp = ''
    for (let i = 0; i < response.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="layerr position-relative" onclick="getCategorymeal('${response[i].strCategory}')">
          <img src="${response[i].strCategoryThumb}" class="w-100 rounded-4" alt="">
          <div class="layer rounded-4 text-center">
            <h1>${response[i].strCategory}</h1>
            <p>${response[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
          </div>
        </div>
      </div>`
    }
    document.getElementById('data').innerHTML = temp;
    document.getElementById('search').innerHTML = '';
}














let Area = document.getElementById('Area')
Area.addEventListener("click", function () {
    getArea()

})

async function getArea() {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let res = await data.json()
    console.log(res);

    //console.log('helloooooooooo')
    displayArea(res.meals)
}


function displayArea(response) {


    temp = ''
    for (let i = 0; i < response.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="text-white text-center" onclick= "  getAreameal('${response[i].strArea}')" >
         <i class="fa-solid fa-house-laptop fa-4x"></i>
         
            <h3>${response[i].strArea}</h3>
            </div>
      </div>`
    }
    document.getElementById('data').innerHTML = temp;
    document.getElementById('search').innerHTML = '';
}











let Ingredients = document.getElementById('Ingredients')
Ingredients.addEventListener("click", function () {
    getIngredients()

})

async function getIngredients() {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let res = await data.json()
    console.log(res.meals);

    //console.log('helllllllloooooooooo')
    displayIngredients(res.meals.slice(0, 20))
}



function displayIngredients(response) {


    temp = ''
    for (let i = 0; i < response.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="text-white text-center" onclick="   getIngredientsmeal('${response[i].strIngredient}')" >
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
         
            <h3>${response[i].strIngredient}</h3>
            <p>${response[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
            </div>
      </div>`
    }
    document.getElementById('data').innerHTML = temp;

    document.getElementById('search').innerHTML = '';
}



let search = document.getElementById('Search')
search.addEventListener("click", function () {

    getSearch()
})


function getSearch(response) {



    temp = `  <div class="col-md-6">
<input id="SearchByName" class=" mt-5 form-control w-100" type="text" placeholder="SearchByName" onkeyup="searchName(this.value)">
</div>
<div class="col-md-6">
<input id="SearchByLetter" class=" mt-5 form-control w-100" type="text" placeholder="SearchByLetter"  onkeyup="searchFirst(this.value)">
</div> `

    document.getElementById('search').innerHTML = temp;
    document.getElementById('data').innerHTML = '';
}





 async function searchName(value) {

let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
let val= await data.json()
console.log(val);
    // console.log(value);
    diplaySearchName(val.meals  )
    
}


function diplaySearchName(meal) {
    temp = ''
    for (let i = 0; i < meal.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="layerr position-relative" onclick="getId(${meal[i].idMeal}) ">
          <img src="${meal[i].strMealThumb}" class="w-100 rounded-4" alt="">
          <div class="layer rounded-4 text-center">
            <h1>${meal[i].strMeal
            }</h1>
          
          </div>
        </div>
      </div>`
    }
    document.getElementById('data').innerHTML = temp;
   
    
}



searchName("m")




async function searchFirst(value) {

    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
    let val= await data.json()
    console.log(val);
        // console.log(value);
        diplaySearchfirst(val.meals  )
        
    }
    
    function diplaySearchfirst(meal) {
        temp = ''
        for (let i = 0; i < meal.length; i++) {
            temp += ` <div class="col-md-3">
            <div class="layerr position-relative" onclick="getId(${meal[i].idMeal}) ">
              <img src="${meal[i].strMealThumb}" class="w-100 rounded-4" alt="">
              <div class="layer rounded-4 text-center">
                <h1>${meal[i].strMeal
                }</h1>
              
              </div>
            </div>
          </div>`
        }
        document.getElementById('data').innerHTML = temp;
       
        
    }

















let contactus = document.getElementById('contactus')
contactus.addEventListener("click", function () {

    getContactUs()
})

function getContactUs(response) {
    temp = `<div class="col-md-6">
        <input id="name" type="text" class="form-control w-100 mt-5 " placeholder="Enter Your Name">
      </div>
      <div class="col-md-6">
        <input id="email" type="text" class="form-control w-100 mt-5 " placeholder="Enter Your Email">
      </div>
      <div class="col-md-6">
        <input id="phone" type="text" class="form-control w-100 mt-5 " placeholder="Enter Your Phone">
      </div>
      <div class="col-md-6">
        <input id="age" type="text" class="form-control w-100 mt-5 " placeholder="Enter Your Age">
      </div>
      <div class="col-md-6">
        <input id="password" type="text" class="form-control w-100 mt-5 " placeholder="Enter Your Password">
      </div>
      <div class="col-md-6">
        <input id="repassword" type="text" class="form-control w-100 mt-5 " placeholder="RePassword">
      </div>`

    document.getElementById('data').innerHTML = temp;
}




async function getCategorymeal(meal) {
    let cate = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`)
    let data = await cate.json()
    console.log("heloo");
    console.log(meal);
    console.log(data);
    displayCate(data.meals)
}

function displayCate(response) {

    temp = ''
    for (let i = 0; i < response.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="layerr position-relative" onclick= "getId('${response[i].idMeal}')">
          <img src="${response[i].strMealThumb}" class="w-100 rounded-4" alt="">
          <div class="layer rounded-4 text-center">
            <h1>${response[i].strMeal}</h1>
          </div>
        </div>
      </div>`
    }
    document.getElementById('data').innerHTML = temp;
    document.getElementById('search').innerHTML = '';
}


async function getAreameal(country) {
    let area = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    let data = await area.json()
    console.log(data);

    displayCountrymeal(data.meals)
}


function displayCountrymeal(response) {

    temp = ''
    for (let i = 0; i < response.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="layerr position-relative"  onclick= "getId('${response[i].idMeal}')">
          <img src="${response[i].strMealThumb}" class="w-100 rounded-4" alt="">
          <div class="layer rounded-4 text-center">
            <h1>${response[i].strMeal}</h1>
          </div>
        </div>
      </div>`
    }
    document.getElementById('data').innerHTML = temp;
    document.getElementById('search').innerHTML = '';
}



async function getIngredientsmeal(Ingredients) {
    let Ingred = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredients}`)
    let data = await Ingred.json()
    console.log(data.meals);
    console.log(Ingredients);
    displayIngredientsmeal(data.meals)
}

function displayIngredientsmeal(response) {

    temp = ''
    for (let i = 0; i < response.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="layerr position-relative"  onclick= "getId('${response[i].idMeal}')">
          <img src="${response[i].strMealThumb}" class="w-100 rounded-4" alt="">
          <div class="layer rounded-4 text-center">
            <h1>${response[i].strMeal}</h1>
          </div>
        </div>
      </div>`
    }
    document.getElementById('data').innerHTML = temp;
    document.getElementById('search').innerHTML = '';
}



 async function getId(id) {
  let data=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  let idmeal= await data.json()
  console.log(idmeal.meals
    
    );
    diplayMeal(idmeal.meals) 
}



function diplayMeal(meal) {
    temp=`
    <div class="col-md-4">
  <img src="${meal[0].strMealThumb}" class="w-100" alt="">
</div>
<div class="col-md-8 text-white">
<h2>Instructions</h2>
<p class="fw-light fs-5">${meal[0].
    strInstructions
    }</p>
<h3>Area: <span>${meal[0].strArea}</span></h3>
<h3>Category: <span>${meal[0].strCategory}</span></h3>
<h3>Recipes: <span></span></h3>

<ul  class="list-unstyled d-flex g-3">
  <li class="alert alert-info p-1 m-2">${meal[0].strIngredient1}</li>
  <li class="alert alert-info p-1 m-2">${meal[0].strIngredient2}</li>
  <li class="alert alert-info p-1 m-2">${meal[0].strIngredient3}</li>
  <li class="alert alert-info p-1 m-2">${meal[0].strIngredient4}</li>
  <li class="alert alert-info p-1 m-2">${meal[0].strIngredient5}</li>
</ul>
<ul  class="list-unstyled d-flex g-3">
  <li class="alert alert-info p-1 m-2">${meal[0].strIngredient6}</li>
  <li class="alert alert-info p-1 m-2">${meal[0].strIngredient7}</li>
  <li class="alert alert-info p-1 m-2">${meal[0].strIngredient8}</li>
  <li class="alert alert-info p-1 m-2">${meal[0].strIngredient9}</li>
  


</ul>

<h3>Tages:</h3>
<p>${meal[0].strTages}</p>

<a href="${meal[0].strSource}" class="btn btn-success p-2">source</a>
<a href="${meal[0].strYoutube}" class="btn btn-danger p-2">youtube</a>
</div>
    `
    document.getElementById('data').innerHTML = temp;
    document.getElementById('search').innerHTML = '';
}