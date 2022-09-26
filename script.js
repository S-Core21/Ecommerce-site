let quantity= document.querySelector('.quantity')
let increase = document.querySelector('#add')
let decrease = document.querySelector('#minus')
let cart = document.querySelector('.cart')
let cartList = document.querySelector('#cartList')
let cartOpen = true
let cartLength = document.querySelector('#cartNumber')
let noOfProducts = document.querySelector('#amt')
let totalCost = document.querySelector('#total')
let costPrice = document.querySelector('#costPrice')
let emptyCart = document.querySelector('.empty_cart')
let checkOutList = document.querySelector('.checkoutList')
let addToCart = document.querySelector('#addToCart')
let addedToCart = false
let slide1 = document.querySelector('#one')
let slide2 = document.querySelector('#two')
let slide3 = document.querySelector('#three')
let slide4 = document.querySelector('#four')
let slide1A = document.querySelector('#b-one')
let slide2B = document.querySelector('#b-two')
let slide3C = document.querySelector('#b-three')
let slide4D = document.querySelector('#b-four')
let slideshow = document.querySelector('#mainImg')
let popUpImg = document.querySelector('#pop_up_img')
let clearCart = document.querySelector('#delete')
let popUp = document.querySelector('.pop_up')
let cancelpopUp = document.querySelector('#cancel')



quantity.textContent = 0
cartLength.textContent = 0
noOfProducts.textContent = 0
totalCost.textContent = 0

popUp.style.display = 'none'

checkOutList.style.display = 'none'

slideshow.addEventListener('click', ()=>{
    popUp.style.display = 'flex'
    document.querySelector('section').style.filter = 'blur(10px)'
    document.querySelector('nav').style.filter = 'blur(10px)'
})

cancelpopUp.addEventListener('click', ()=>{
    popUp.style.display = 'none'
    document.querySelector('section').style.filter = 'none'
    document.querySelector('nav').style.filter = 'none'
})

addToCart.addEventListener('click', ()=>{
    if(addedToCart==false)
    cartLength.style.display = 'block'
    emptyCart.style.cssText = 'display:none'
    checkOutList.style.cssText = 'display: flex'
    addedToCart = true
})


increase.addEventListener('click', ()=>{
    if(addedToCart == true){
        emptyCart.style.cssText = 'display:none'
        checkOutList.style.cssText = 'display: flex'
        cartLength.style.cssText = 'display: block'
    }
   
    quantity.textContent++
    cartLength.textContent++
    noOfProducts.textContent = quantity.textContent
    totalCost.textContent = parseFloat(costPrice.textContent) * parseFloat(noOfProducts.textContent)
})

decrease.addEventListener('click', ()=>{
    if(addedToCart == true){
        cartLength.style.cssText = 'display: block'
    }
    if(quantity.textContent>0){
        quantity.textContent--
       
        cartLength.textContent--
        noOfProducts.textContent = quantity.textContent
        totalCost.textContent = parseFloat(costPrice.textContent) * parseFloat(noOfProducts.textContent)
    }
    if (quantity.textContent < 1 && addedToCart == true){
        cartLength.style.cssText = 'display: none'
        emptyCart.style.cssText = 'display:block'
        checkOutList.style.cssText = 'display: none'
        addedToCart = false
    }
})

cartList.addEventListener('click', ()=>{
    if(cartOpen==true){
    cart.style.cssText ='display:flex; transition 2s ease-in-out'
    cartOpen = false
}else if(cartOpen==false){
    cart.style.cssText ='display:none; transition 2s ease-in-out'
    cartOpen = true
}
})


slide1.addEventListener('click', ()=>{
    slideshow.src = 'images/image-product-1.jpg'
})
slide2.addEventListener('click', ()=>{
    slideshow.src = 'images/image-product-2.jpg'
})
slide3.addEventListener('click', ()=>{
    slideshow.src = 'images/image-product-3.jpg'
})
slide4.addEventListener('click', ()=>{
    slideshow.src = 'images/image-product-4.jpg'
})


slide1A.addEventListener('click', ()=>{
    popUpImg.src = 'images/image-product-1.jpg'
})
slide2B.addEventListener('click', ()=>{
    popUpImg.src = 'images/image-product-2.jpg'
})
slide3C.addEventListener('click', ()=>{
    popUpImg.src = 'images/image-product-3.jpg'
})
slide4D.addEventListener('click', ()=>{
    popUpImg.src = 'images/image-product-4.jpg'
})

clearCart.addEventListener('click', ()=>{
    cartLength.style.cssText = 'display: none'
    cartLength.textContent = '0'
    emptyCart.style.cssText = 'display:block'
    checkOutList.style.cssText = 'display: none'
    quantity.textContent = 0
    addedToCart = false
})

let nextimg = 0

function next (){
   
    if(nextimg==0){
        popUpImg.src = 'images/image-product-2.jpg'
        nextimg = 1
    }
    else if(nextimg==1){
        popUpImg.src = 'images/image-product-3.jpg'
        nextimg = 2
    }
    else if(nextimg==2){
        popUpImg.src = 'images/image-product-4.jpg'
        nextimg = 3
    }
   
}

let previmg = 0

function prev (){
    if(previmg==0){
        popUpImg.src = 'images/image-product-3.jpg'
        previmg = 1
    }
    else if(previmg==1){
        popUpImg.src = 'images/image-product-2.jpg'
        previmg = 2
    }
    else if(previmg==2){
        popUpImg.src = 'images/image-product-1.jpg'
        previmg = 3
    }
   
}





