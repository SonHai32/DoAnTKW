import PRODUCTS from "../script/ProductList.js"
const SEARCH = window.location.search.substring(1);
const ID_REGEX = /tag\=.{1,}\&id\=.{1,}$/ ; 
let CURRENT_PRODUCT;

if(ID_REGEX.test(SEARCH)){

    let searchSplit = SEARCH.split("&");
    let tag = searchSplit[0].split('=')[searchSplit[0].split('=').length-1];
    let ID = searchSplit[1].split('=')[searchSplit[1].split('=').length-1];
    switch(tag){
        case "BACK_PACK":
            CURRENT_PRODUCT = PRODUCTS.BACK_PACK.filter(function(item){
                return item.ID === ID;
            });
            break;
        case "TSHIRT":
            CURRENT_PRODUCT = PRODUCTS.TSHIRT.filter(function(item){
                return item.ID === ID;
            })
            break;
        case "HOODIE":
            CURRENT_PRODUCT = PRODUCTS.HOODIE.filter(function(item){
                return item.ID === ID;
            })
            break;
        case "PANTS":
            CURRENT_PRODUCT = PRODUCTS.PANTS.filter(function(item){
                return item.ID === ID;
            })
            break;
        case "SHORTS":
            CURRENT_PRODUCT = PRODUCTS.SHORTS.filter(function(item){
                return item.ID === ID;
            })
            break;
        case "SHOES":
            CURRENT_PRODUCT = PRODUCTS.SHOES.filter(function(item){
                return item.ID === ID;
            })
            break;
        default:
            window.location.href = "../page/404.html"
            break;

    } 


    $(document).ready( ()=> {
        if(CURRENT_PRODUCT.length > 0){
            $(".product-name").append(CURRENT_PRODUCT[0].NAME)
            if(CURRENT_PRODUCT[0].SALE){
                $("#product-sale-price").append(CURRENT_PRODUCT[0].PRICE);
                $("#product-price").append(CURRENT_PRODUCT[0].SALE_PRICE);
            }else{
                $("#product-price").append(CURRENT_PRODUCT[0].PRICE);
            }


            if(CURRENT_PRODUCT[0].COLOR === undefined){
                $(".product-color").hide();
            }
            
            $('.main-product-img>img').attr('src',CURRENT_PRODUCT[0].IMG_URLS[0]);
            $('.product-img').on('click', (event) =>{
                changeImage(event.target.getAttribute('key'))
            })

            for(let i = 0 ; i < 5 ; i++){
                $(".product-img>img")[i].setAttribute("src",CURRENT_PRODUCT[0].IMG_URLS[i]); 
            }
        }else{
            window.location.href = "../page/404.html"
        }
    });
}else{
    window.location.href = "../page/404.html"
}

function changeImage(index){
    $(document).ready(() =>{
        $('.main-product-img>img').attr('src',CURRENT_PRODUCT[0].IMG_URLS[index]);
    })
}


    


/*
const href = document.location.href;
if(href.includes('?')){
    const hrefSplit = href.split('?')
    if(hrefSplit[hrefSplit.length - 1].includes('=') && hrefSplit[hrefSplit.length -1].includes('id')){
        const idSplit = hrefSplit[hrefSplit.length - 1].split('=');
        const id = idSplit[idSplit.length - 1]
    }
    }
    */
