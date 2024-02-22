var cartdat = [
    {image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Name:"sony Head phone", brand :"Sony",price:"$135"},
    {image:"https://images.unsplash.com/photo-1705530292519-ec81f2ace70d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Name:" Samsung glaxy", brand :"Samsung glaxy s24",price:"$8305"},
    {image:"https://images.unsplash.com/photo-1637496652486-99d500bcdd18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Name:"iphone 13peo max", brand :"Apple",price:"$835"},
    {image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/x/c/-original-imagx6rdpmhuq5ba.jpeg?q=70&crop=false",Name:"Realme 13pro max", brand :"Realme",price:"$135"},
    {image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/r/e/note-13-5g-23090ra98l-redmi-original-imagxywwhmac4gsz.jpeg?q=70&crop=false",Name:"remi 12 pro", brand :"Redmi",price:"$1935"},
    {image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/9/l/-original-imagtyw2cvvhz4hj.jpeg?q=70&crop=false",Name:"vovo s phone", brand :"vivo",price:"$195"}
];

function showproduct(){
var product = "";

cartdat.forEach(function(object, index){
product += `<div class="boxcontaine bg-slate-100 p-3 w-fit rounded-lg">
<div class="img bg-zinc-300 w-[14rem] h-[13rem] rounded-lg">
    <img class=" w-full h-full rounded-lg object-cover" src="${object.image}" alt="">

</div>
<div class="name capitalize  text-xl font-bold">
    <h3>${object.Name}</h3>
</div>
<div class="gap flex justify-between items-center">
<div class="left"> 
 <div class="caragore pt-2 font-semibold text-ellipsis capitalize text-gray-400">
<h3>
    ${object.brand}
</h3>
</div>
<div class= "price capitalize pt-3 font-bold">
<h3>${object.price}</h3>
</div>
</div>
<button  data-index=${index} class="add px-3 py-2 bg-slate-900 rounded-full"> 
<i data-index=${index} class="add ri-add-line text-xl text-yellow-500"></i>
</button>
</div>
</div>`;


});
document.querySelector(".products").innerHTML = product; 

}
showproduct();

var populardata = [
    {image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/x/c/-original-imagx6rdpmhuq5ba.jpeg?q=70&crop=false",Name:"Realme 13pro max", brand :"Realme",price:"$135"},
    {image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/r/e/note-13-5g-23090ra98l-redmi-original-imagxywwhmac4gsz.jpeg?q=70&crop=false",Name:"remi 12 pro", brand :"Redmi",price:"$1935"},
    {image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/9/l/-original-imagtyw2cvvhz4hj.jpeg?q=70&crop=false",Name:"vovo s phone", brand :"vivo",price:"$195"},
    {image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Name:"sony Head phone", brand :"Sony",price:"$135"},
    {image:"https://images.unsplash.com/photo-1705530292519-ec81f2ace70d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Name:" Samsung glaxy", brand :"Samsung glaxy s24",price:"$8305"}
];

function populardataa(){
    var ppopular = "";
    populardata.forEach(function(data){
        ppopular += `
        <div class="popularcontent bg-slate-100 rounded-lg w-fit py-2 pr-5 flex items-center gap-4">
        <div class="image w-[5rem] h-14 rounded-lg">
            <img class="w-full object-contain h-full rounded-lg" src="${data.image}" alt="">
        </div>
        <div class="content">
            <div class="name capitalize  font-bold">
                <h3>${data.Name}</h3>
            </div>
            <div class="caragore  font-semibold text-ellipsis capitalize text-gray-400">
                <h3>
                    ${data.brand}
                </h3>
            </div>
            <div class= "price capitalize  font-bold">
                <h3>${data.price}</h3>
            </div>
        </div>
    </div>
        `;
    document.querySelector(".popularcontainer").innerHTML = ppopular;
    
    });
};
populardataa();


var cartd = [ ];

function cart (){
    document.querySelector(".products").addEventListener("click", function(details) {
       if(details.target.classList.contains('add')){
        cartd.push(cartdat[details.target.dataset.index]);
        console.log(cartd)
       }
       var cullet = " ";
    cartd.forEach(function(objectt){
     cullet += `<div class=" mt-2 popularcontent bg-slate-100 rounded-lg w-40 py-1 pr-3 pl-2 flex items-center gap-4">
     <div class=" w-[5rem] h-14 rounded-lg">
     <img class=" w-full h-full rounded-lg object-cover" src="${objectt.image}" alt="">
     </div>
     <div class="content">
         <div class="name capitalize">
             <h3 class="cursor-pointer ">${objectt.Name}</h3>
         </div>
         <div class= "price capitalize  font-bold">
             <h3 class="cursor-pointer">${objectt.price}</h3>
         </div>
     </div>
   </div>`;
  
   });
   document.querySelector(".cartt").innerHTML = cullet;
    });
    
};
cart();

function showcart(){
    var one = 1;
    document.querySelector(".cart_logo").addEventListener("click", ()=> {
        
        if( one == 1){
            document.querySelector(".cartt").style.display = "block";
            one = 0;
        }
        else{
            document.querySelector(".cartt").style.display = "none";
            one = 1;
        }
          
            });
};

showcart();
