var CURRENT_LOCATION = window.location.href;
$(document).ready(()=>{
        console.log($('body').height())
        $("#search-icon").click(() =>{
            openSearchBar();
        })
        $("#search-link").click(() =>{
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
              <img class='img-fit'  src="${CURRENT_LOCATION.includes('index.html')?product.IMG_URLS[0].slice(1,product.IMG_URLS[0].length) : product.IMG_URLS[0]}" alt=""/>
              </div>
              <a href="${CURRENT_LOCATION.includes('index.html')?'.':'..'}/page/product.html?tag=${product.TAG}&id=${product.ID}">${product.NAME}</a>
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
