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
            NAME: 'Degrey Backpack ss3 Hologram',
            ID: 'DG-02',
            PRICE: '650.000đ',
            SALE: true,
            SALE_PRICE: '450.000đ',
            IMG_URLS: [
                '../images/Products/Backpack/DG-holo-1.webp', 
                '../images/Products/Backpack/DG-holo-2.webp', 
                '../images/Products/Backpack/DG-holo-3.webp', 
                '../images/Products/Backpack/DG-holo-4.webp' 
            ]

        },
        {
            NAME: 'Degrey BackPack ss3',
            ID: 'DG-03',
            PRICE: '450.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/DG-vang-1.webp', 
                '../images/Products/Backpack/DG-vang-2.webp', 
                '../images/Products/Backpack/DG-vang-3.webp', 
                '../images/Products/Backpack/DG-vang-4.webp' 
            ]

        },
        {
            NAME: 'XOÀI CHUA BACKPACKS',
            ID: 'DG-04',
            PRICE: '690.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/DG-Xoai-Chua-1.webp', 
                '../images/Products/Backpack/DG-Xoai-Chua-2.webp', 
                '../images/Products/Backpack/DG-Xoai-Chua-3.webp', 
                '../images/Products/Backpack/DG-Xoai-Chua-4.webp' 
            ]

        },
        {
            NAME: 'Candy Land Backpack',
            ID: 'BHBP-01',
            PRICE: '600.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/Candy-land.webp', 
                '../images/Products/Backpack/Candy-land-2.jpg', 
                '../images/Products/Backpack/Candy-land-3.jpg', 
                '../images/Products/Backpack/Candy-land-4.jpg' 
            ]

        },
        {
            NAME: 'DANGER BACKPACK',
            ID: 'BHBP-02',
            PRICE: '500.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/Danger.webp', 
                '../images/Products/Backpack/Danger-2.webp', 
                '../images/Products/Backpack/Danger-3.webp', 
                '../images/Products/Backpack/Danger-4.webp' 
            ]

        },
        {
            NAME: 'BW Backpack',
            ID: 'BHBP-03',
            PRICE: '550.000đ',
            SALE: true,
            SALE_PRICE: '400.000đ',
            IMG_URLS: [
                '../images/Products/Backpack/dau-lau-trang-den.webp', 
                '../images/Products/Backpack/dau-lau-trang-den-2.webp', 
                '../images/Products/Backpack/dau-lau-trang-den-3.webp', 
                '../images/Products/Backpack/dau-lau-trang-den-4.webp' 
            ]

        },
        {
            NAME: 'Fire V2 Backpack',
            ID: 'BHBP-04',
            PRICE: '450.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/fire.webp', 
                '../images/Products/Backpack/fire-2.webp', 
                '../images/Products/Backpack/fire-3.webp', 
                '../images/Products/Backpack/fire-4.webp' 
            ]

        },
        {
            NAME: 'INSIGHT BACKPACK',
            ID: 'BHBP-05',
            PRICE: '500.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/insight.webp', 
                '../images/Products/Backpack/insight-2.webp', 
                '../images/Products/Backpack/insigh-3.webp', 
                '../images/Products/Backpack/insight-4.webp' 
            ]

        },
        {
            NAME: 'Hungry Backpack',
            ID: 'BHBP-06',
            PRICE: '550.000đ',
            SALE: false,
            SALE_PRICE: 0,
            IMG_URLS: [
                '../images/Products/Backpack/hungry.webp', 
                '../images/Products/Backpack/hungry-2.jpeg', 
                '../images/Products/Backpack/hungry-3.jpeg', 
                '../images/Products/Backpack/hungry-4.webp' 
            ]

        }
    ] 

}

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
                console.log(event.target.getAttribute('key'))
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
