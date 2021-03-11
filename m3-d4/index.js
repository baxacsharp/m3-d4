window.onload=()=>{
    fetch("https://striveschool-api.herokuapp.com/books")
    .then(response=>response.json())
    .then(renderBooks).catch(err=>console.log(err))
   
}

function renderBooks (books){
   const body = document.querySelector("body")

   books.forEach(book=>{
       body.innerHTML+=BookComponent(book)
   })
}
function BookComponent(book){
    return `<div class="container">
    <div class="row">
    <div class="card">
      <img src=${book.img} class="card-img-top" style="width:200px; height:200px" alt="">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.category}</p>
        <p class="card-text">${book.price}</p>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <button type="button" id="Add" class="btn btn-sm btn-outline-secondary" onclick="AddedLists()">Add To Card</button>
            <button type="button" id="skip" class="btn btn-sm btn-outline-secondary" onclick="SkipLists()">Skip Item</button>
            </div>
        <p class="card-text"><small class="text-muted">${book.asin}</small></p>
        </div>
      </div>
      </div>
    </div>
    `
}
AddedLists=()=>{
    let lists = document.getElementById("Add")
    lists.style.backgroundColor="red"
    lists.innerText="Added"
    lists.addEventListener("click",AddedLists)
}
SkipLists=()=>{
let skipped= document.getElementById("skip")
let cotainer = document.getElementsByClassName("card")
cotainer.style.display="none"
skipped.addEventListener("click",cotainer)
}