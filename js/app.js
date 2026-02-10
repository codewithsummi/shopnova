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
   }
   catch(err){
     console.log(err)
   }
})();