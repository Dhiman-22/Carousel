//https://6398167e77359127a046d08d.mockapi.io/products
async function func(){
    let res = await fetch(`https://6398167e77359127a046d08d.mockapi.io/products`)
    let data = await res.json();
    append(data)
  }
func();

let i=4;
let carousel1_div = document.getElementById("carousel1")
function append(data){
  
      let AllData = [data[i],data[i+1],data[i+2],data[i+3]]
   let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2")
  let card3 = document.getElementById("card3")
  let card4 = document.getElementById("card4")
      card1.innerHTML = `<img src='${data[0].image}'></img>
                           <p>Name:${data[0].name}</p><br>
                           <p>Price:${data[0].price}</p>
                         <br>  <button class="card1">Add to Cart</button>`;
      card2.innerHTML = `<img src="${data[1].image}"></img>
                           <p> Name:${data[1].name}</p><br>
                           <p>Price:${data[1].price}</p>
                           <br>  <button class="card2">Add to Cart</button>`;
      card3.innerHTML = `<img src="${data[2].image}"></img>
                            <p>Name:${data[2].name}</p><br>
                          <p> Price:${data[2].price}</p>
                           <br>  <button class="card3">Add to Cart</button>`;
      card4.innerHTML = `<img src="${data[3].image}"></img>
                           <p>Name:${data[3].name}</p><br>
                           <p>Price:${data[3].price}</p>
                           <br>  <button class="card4">Add to Cart</button>`;
 
  ////Add to cart functionality 1
  
  /// arr of cart data
  let cart_data = []
  
      let addCart = document.querySelectorAll("#carousel1 button")
      addCart.forEach((el,index)=>{
           //console.log(index)
        el.addEventListener('click',(event)=>{
          event.preventDefault()
          if(index==0){
              console.log(data[index])  
            cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data))
           }else if(index==1){
              console.log(data[index]) 
             cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data))
           }else if(index==2){
              console.log(data[index]) 
             cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data))
           }else if(index==3){
              console.log(data[index])  
             cart_data.push(data[index])
            localStorage.setItem("Cart",JSON.stringify(cart_data))
           }
        })       
        
      })

      
  setInterval(function (){
  
    if(i==20){
      i=0;
    }
  
      card1.innerHTML = `<img src='${data[i].image}'></img>
                            Name:${data[i].name}<br>
                           Price:${data[i].price}
                           <br>  <button class="card1">Add to Cart</button>`;
      card2.innerHTML = `<img src="${data[i+1].image}"></img>
                             Name:${data[i+1].name}<br>
                           Price:${data[i+1].price}
                           <br>  <button class="card2">Add to Cart</button>`;
      card3.innerHTML = `<img src="${data[i+2].image}"></img>
                            Name:${data[i+2].name}<br>
                           Price:${data[i+2].price}
                           <br>  <button class="card3">Add to Cart</button>`;
      card4.innerHTML = `<img src="${data[i+3].image}"></img>
                            Name:${data[i+3].name}<br>
                           Price:${data[i+3].price}
                           <br>  <button class="card4">Add to Cart</button>`;
    
    ////add to cart functionality 2
   
    let addCart = document.querySelectorAll("#carousel1 button")
      addCart.forEach((el,index)=>{
         
        el.addEventListener('click',()=>{
          
           if(index==0){             
             console.log(data[index+i-1])
             cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))
           }else if(index==1){
              console.log(data[index+i-1]) 
             cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))
           }else if(index==2){
              console.log(data[index+i-1]) 
             cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))
           }else if(index==3){
              console.log(data[index+i-1]) 
             cart_data.push(data[index+i-1])
            localStorage.setItem("Cart",JSON.stringify(cart_data))
           }
        })
        
        
  })
    
    i++;
  },10000)
  
         //carousel1_div.append(card1,card2,card3,card4)  
  // let addCart = document.querySelectorAll("#carousel1 button")
      //console.log(addCart)
  

      }


