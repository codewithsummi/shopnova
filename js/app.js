const API="https://fakestoreapi.com/products";
const prodData=async ()=>{
    const res=await fetch(API);
    return res.json();
}
let products=[];
//iife function 
(async function init(){
   try{
        products=await prodData();
        console.log(products);
        // render products 
        const list=document.getElementById("productList");
        const cards=products.map(prod=> 
            `
            <div class="col-md-4">
              <div class="card" style="width: 18rem;">
  <img src="${prod.image}" class="card-img-top" alt="..." width="200" height="150">
  <div class="card-body">
    <h5 class="card-title">${prod.title}</h5>
    <p class="card-text">Price : $ ${prod.price}</p>
    <a href="#" class="btn btn-primary">More Details</a>
  </div>
</div>
            </div>
            `
        ).join("");
        list.innerHTML=cards;
   }
   catch(err){
     console.log(err)
   }
})();