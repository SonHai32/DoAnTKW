const SEARCH = window.location.search.substring(1);
const ID_REGEX = /tag\=.{1,}\&id\=.{1,}$/ ; 

const PRODUCTS = {
    BACK_PACK : [
        {
            NAME: 'GOLDEN ROCKET BACKPACKS - GRB',
            ID: 'DG-01',
            PRICE: '450.000đ',
            SALE: true,
            SALE_PRICE: '300.000đ',
            IMG_URLS: [
                '../images/Products/Backpack/DG-Golden-1.webp', 
                '../images/Products/Backpack/DG-Golden-2.webp', 
                '../images/Products/Backpack/DG-Golden-3.webp', 
                '../images/Products/Backpack/DG-Golden-4.webp' 
            ]

        },
        {
            NAME: 'GOLDEN ROCKET BACKPACKS - GRB',
            ID: 'DG-02',
            PRICE: '450.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/DG-Golden-1.webp', 
                '../images/Products/Backpack/DG-Golden-2.webp', 
                '../images/Products/Backpack/DG-Golden-3.webp', 
                '../images/Products/Backpack/DG-Golden-4.webp' 
            ]

        },
        {
            NAME: 'GOLDEN ROCKET BACKPACKS - GRB',
            ID: 'DG-03',
            PRICE: '450.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/DG-Golden-1.webp', 
                '../images/Products/Backpack/DG-Golden-2.webp', 
                '../images/Products/Backpack/DG-Golden-3.webp', 
                '../images/Products/Backpack/DG-Golden-4.webp' 
            ]

        },
        {
            NAME: 'GOLDEN ROCKET BACKPACKS - GRB',
            ID: 'DG-04',
            PRICE: '450.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/DG-Golden-1.webp', 
                '../images/Products/Backpack/DG-Golden-2.webp', 
                '../images/Products/Backpack/DG-Golden-3.webp', 
                '../images/Products/Backpack/DG-Golden-4.webp' 
            ]

        },
        {
            NAME: 'GOLDEN ROCKET BACKPACKS - GRB',
            ID: 'DG-05',
            PRICE: '450.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/DG-Golden-1.webp', 
                '../images/Products/Backpack/DG-Golden-2.webp', 
                '../images/Products/Backpack/DG-Golden-3.webp', 
                '../images/Products/Backpack/DG-Golden-4.webp' 
            ]

        },
        {
            NAME: 'GOLDEN ROCKET BACKPACKS - GRB',
            ID: 'DG-06',
            PRICE: '450.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/DG-Golden-1.webp', 
                '../images/Products/Backpack/DG-Golden-2.webp', 
                '../images/Products/Backpack/DG-Golden-3.webp', 
                '../images/Products/Backpack/DG-Golden-4.webp' 
            ]

        },
        {
            NAME: 'GOLDEN ROCKET BACKPACKS - GRB',
            ID: 'DG-07',
            PRICE: '450.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/DG-Golden-1.webp', 
                '../images/Products/Backpack/DG-Golden-2.webp', 
                '../images/Products/Backpack/DG-Golden-3.webp', 
                '../images/Products/Backpack/DG-Golden-4.webp' 
            ]

        },
        {
            NAME: 'GOLDEN ROCKET BACKPACKS - GRB',
            ID: 'DG-08',
            PRICE: '450.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/DG-Golden-1.webp', 
                '../images/Products/Backpack/DG-Golden-2.webp', 
                '../images/Products/Backpack/DG-Golden-3.webp', 
                '../images/Products/Backpack/DG-Golden-4.webp' 
            ]

        },
        {
            NAME: 'GOLDEN ROCKET BACKPACKS - GRB',
            ID: 'DG-09',
            PRICE: '450.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/DG-Golden-1.webp', 
                '../images/Products/Backpack/DG-Golden-2.webp', 
                '../images/Products/Backpack/DG-Golden-3.webp', 
                '../images/Products/Backpack/DG-Golden-4.webp' 
            ]

        }
    ] 

}

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
    } 


    $(document).ready( ()=> {
        
        if(CURRENT_PRODUCT){
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
                console.log(event.target.getAttribute('key'))
                changeImage(event.target.getAttribute('key'))
            })

            for(let i = 0 ; i < 5 ; i++){
                $(".product-img>img")[i].setAttribute("src",CURRENT_PRODUCT[0].IMG_URLS[i]); 
            }
        }
    });
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
