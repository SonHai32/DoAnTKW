var COUNT_DATE = new Date("Mar 1, 2020 00:00:00").getTime();

function countdown(){
    let now = new Date().getTime();
    let gap = COUNT_DATE - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let w = Math.floor((gap % (minute)) / (second));

    $(document).ready(() =>{
        $('#day').html(d)
        $('#hour').html(h)
        $('#minute').html(m)
        $('#second').html(w)
    })

}

setInterval(function(){
    countdown()
},1000);

$(document).ready(function(){
    
      console.log($("body").height())
      let SALE_PRODUCTS = [...PRODUCTS.BACK_PACK.filter( backPack =>{
        return backPack.SALE;
      }),...PRODUCTS.TSHIRT.filter(tshirt =>{
        return tshirt.SALE;
      }),...PRODUCTS.SHOES.filter(shoes =>{
        return shoes.SALE;
      }),...PRODUCTS.HOODIE.filter(hoodie =>{
        return hoodie.SALE;
      }),...PRODUCTS.PANTS.filter(pant =>{
        return pant.SALE;
      })];
      for(let i = 0 ; i < SALE_PRODUCTS.length ; i++){
        $('.sale-item>a')[i].setAttribute('href',"./page/product.html?tag="+SALE_PRODUCTS[i].TAG+"&id="+SALE_PRODUCTS[i].ID);
        $('.sale-item>a>img')[i].setAttribute('src',SALE_PRODUCTS[i].IMG_URLS[0].slice(1,SALE_PRODUCTS[i].IMG_URLS[0].length));
        $('.sale-item-id')[i].innerHTML = SALE_PRODUCTS[i].NAME;
        $('.sale-item-price')[i].innerHTML = SALE_PRODUCTS[i].SALE_PRICE
        
        let sale_label = document.createElement('div');
        sale_label.setAttribute('class','sale-label');
        sale_label.innerHTML = 'off'
        $('.sale-item')[i].appendChild(sale_label)
        
      }
      
        $("#search-icon").click(() =>{
            openSearchBar();
        })
        $(".close-search").click(() =>{
            closeSearchBar();
        })
        $(".lock-screen").on('click',event =>{
            if(event.target.className === "lock-screen"){
            closeSearchBar();
            }
        })

    //handle input search
    
        $(".search-bar>input").keyup(event =>{
            let allProduct = [...PRODUCTS.BACK_PACK,...PRODUCTS.TSHIRT,...PRODUCTS.HOODIE,...PRODUCTS.PANTS,...PRODUCTS.SHORTS,...PRODUCTS.SHOES];
            let searchKey = event.target.value.toUpperCase();
            let searchProduct = []
            searchProduct = allProduct.filter(product =>{
                return product.ID.toUpperCase().includes(searchKey) || product.NAME.toUpperCase().includes(searchKey) || product.TAG.toUpperCase().includes(searchKey) || product.VN_TAG.toUpperCase().includes(searchKey);
            })
            $('.search-result').css('height','320px');
            if(searchProduct.length < 1){
                $('.search-list').empty();
                $('.search-list').html('<div class="notfound"></div>')
                $('.notfound').html('<h2>Không tìm thấy kết quả phù hợp</h2>');
            }else{
                $('.notfound').empty();
                $('.search-list').empty();
                showSearchList(searchProduct);
            }

        })

    function showSearchList(products){
        products.forEach(product =>{
            $('.search-list').append(`<div class="search-list-item flex flex-row align-center">
              <div class="search-list-item-img">
              <img class='img-fit'  src="${product.IMG_URLS[0].slice(1,product.IMG_URLS[0].length)}" alt=""/>
              </div>
              <a href="./page/product.html?tag=${product.TAG}&id=${product.ID}">${product.NAME}</a>
            </div>
`);
        }) 
    }

    function openSearchBar(){
        $('.lock-screen').css('width','100%'); 
        $('.lock-screen').css('height',$('body').height()+'px'); 
        $('.close-search>i').css('display','block')
        $('.search-bar>i').css('display','block')
        $('body').css('overflow','hidden')
    }
    function closeSearchBar(){
        $('.lock-screen').css('width','0'); 
        $('.close-search>i').css('display','none')
        $('.search-bar>i').css('display','none')
        $('body').css('overflow-y','scroll')
      }
    })
