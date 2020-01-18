
<?php 
$mod = $_GET['mod'];
$view = $_GET['view'];
echo "<span>";
print_r($mod);
echo "/span"
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Site</title>
  <script src='script/app.js' charset="utf-8">
    
  </script>
  <link rel="stylesheet" href="./style/style.css" type="text/css" >
  <script src="https://kit.fontawesome.com/cb9d22c56d.js" crossorigin="anonymous"></script>
</head>
<body>
  <div class="wrapper">
    <div class="header flex flex-row align-items space-between">
      <div class="logo">
        <span>
          My Site
        </span>
      </div>
      <div class="nav flex justify-center align-center">
        <ul class='list-items flex flex-row list-style-none space-around align-center'>
          <li class='nav-item-trang-chu'><a href="">Trang chủ</a></li>
          <li class='nav-item-san-pham'><a href="">Sản phẩm</a></li>
          <li class='nav-item-khuyen-mai'><a href="">Khuyến mãi</a></li>
          <li class='nav-item-lien-he'><a href="">Liên hệ</a></li>
          <li class='nav-item-gioi-thieu'><a href="">Giới thiệu</a></li>
        </ul>
      </div>
      <div class="nav-items flex flex-row justify-center align-center">
       <i class="fas fa-search"></i> 
       <i class="far fa-user"></i>
       <i class="fas fa-shopping-basket"></i>
      </div> 
    </div>
    <div class="banner">
    <div class="overlay"></div>
    </div>
    <div class="sale-content flex flex-column align-center">
      <div class="overlay"></div>
      <div class="sale-title">
        <h1>Thời gian khuyến mãi kết thúc vào</h1>
      </div>
      <div class="countdown flex flex-row justify-center">
        <div id="day"></div>
        <div id="hour"></div>
        <div id="minute"></div>
        <div id="second"></div>
      </div>
    </div>
    <div class="main-container flex flex-row">
      <div class="menu-items flex flex-column">
        <h1>Menu</h1> 
        <div class="item item-ao flex flex-row space-between">
          <a href="./page/Clothes.html">Áo</a>
          <i class="fas fa-chevron-right"></i>
          <ul class='list-ao'>
            <li><a href='#'>T-SHIRT</a></li>
            <li><a href='#'>JACKET</a></li>
            <li><a href='#'>HOODIE</a></li>
          </ul>
        </div>
        <div class="item item-quan flex flex-row space-between align-center">
          <a href="">Quần</a>
          <i class="fas fa-chevron-right"></i>
          <ul class='list-quan'>
            <li><a href='#'>Quần tây</a></li>
            <li><a href='#'>Quần Jean</a></li>
            <li><a href='#'>Quần Jogger</a></li>
            <li><a href='#'>Quần thể thao</a></li>
            <li><a href='#'>Quần short</a></li>
          </ul>
        </div>
        <div class="item item-balo flex flex-row space-between">
          <a href="">Balo</a>
          <i class="fas fa-chevron-right"></i>
          <ul class='list-balo'>
            <li><a href='#'>Balo đi học</a></li>
            <li><a href='#'>Balo du lịch</a></li>
            <li><a href='#'>Balo thời trang</a></li>
          </ul>
        </div>
        <div class="item item-giay flex flex-row space-between">
          <a href="">Giày</a>
          <i class="fas fa-chevron-right"></i>
          <ul class='list-giay'>
            <li><a href='#'>Giày nữ</a></li>
            <li><a href='#'>Giày nam</a></li>
            <li><a href='#'>Giày thể thao </a></li>
            <li><a href='#'>Giày Sandal </a></li>
            <li><a href='#'>Giày cao gót </a></li>
          </ul>
        </div>
        <div class="item item-tui-xach flex flex-row space-between">
          <a href="">Túi xách</a>
        </div>
        <div class="item flex flex-row space-between">
          <a href="">Nón</a>
        </div>
        <div class="item flex flex-row space-between">
          <a href="">Khuyến mãi</a>
        </div>
      </div> 
      <div class="sale-items">
        <div class="sale-header flex align-center">
          <p>Sản phẩm bán chạy</p>
        </div>
        <div class="sale-list-items flex flex-row space-between align-center">
          <div class="sale-item flex flex-column space-between align-center">
            <img src="./images/ao/apocalypse_truoc_1aa5b771bdc54b329d57da6a8bde0dd9_master.webp" alt=""/>
             <p class="sale-item-id">
              AO-0KGHVS
            </p><p class="sale-item-price">
              450,000đ 
            </p>
            <p class="sale-item-add">
              Thêm vào giỏ hàng 
            </p>  
          </div>
          
          <div class="sale-item flex flex-column space-between align-center">
            <img src="./images/ao/aurora_borealis_black_1_fa06fe2a5c674eee9039e72c7d33972a_master.webp" alt=""/>
             <p class="sale-item-id">
              AO-0KGBGS
            </p><p class="sale-item-price">
              450,000đ 
            </p>
            <p class="sale-item-add">
              Thêm vào giỏ hàng 
            </p>  
          </div>
          
          <div class="sale-item flex flex-column space-between align-center">
            <img src="./images/ao/aurora_borealis_white__f93e5ed709d44ce1a69158d18fbd5dc5_master.webp" alt=""/>
             <p class="sale-item-id">
              AO-09GB6H
            </p><p class="sale-item-price">
              450,000đ 
            </p>
            <p class="sale-item-add">
              Thêm vào giỏ hàng 
            </p>  
          </div>
          <div class="sale-item flex flex-column space-between align-center">
            <a href='google.com'><img src="./images/ao/casual_b_3_3f86651a6bde40a58f915c73095a6c7c.png" alt=""/></a>
             <p class="sale-item-id">
              AO-LK7HTV
            </p><p class="sale-item-price">
              450,000đ 
            </p>
            <p class="sale-item-add">
              Thêm vào giỏ hàng 
            </p>  
          </div>
          <div class="sale-item flex flex-column  space-between align-center">
            <img src="./images/ao/03_tee_b_1_2c6d911039d248e8847d0cf71ed694b5.png" alt=""/>
             <p class="sale-item-id">
              AO-8IKS7J
            </p><p class="sale-item-price">
              450,000đ 
            </p>
            <p class="sale-item-add">
              Thêm vào giỏ hàng 
            </p>  
          </div>
        </div>
     
<div class="sale-list-items flex flex-row space-between align-center">
          <div class="sale-item flex flex-column space-between align-center">
            <img src="./images/ao/03_tee_b_1_2c6d911039d248e8847d0cf71ed694b5.png" alt=""/>
             <p class="sale-item-id">
              AO-66UJHS
            </p><p class="sale-item-price">
              450,000đ 
            </p>
            <p class="sale-item-add">
              Thêm vào giỏ hàng 
            </p>  
          </div>
          
          <div class="sale-item flex flex-column space-between align-center">
            <img src="./images/Ao-khoat/291bd21e-6b7f-42d2-b392-018edf3e5511_a59c018307e34a8ca14946e15d0cfbee_master.webp" alt=""/>
             <p class="sale-item-id">
              AO-0KOOS5
            </p><p class="sale-item-price">
              450,000đ 
            </p>
            <p class="sale-item-add">
              Thêm vào giỏ hàng 
            </p>  
          </div>
          
          <div class="sale-item flex flex-column space-between align-center">
            <img src="./images/Ao-khoat/4__2___1__34d1c9bb0a7643b8954a9bd695371f02_master.webp" alt=""/>
             <p class="sale-item-id">
              AO-LLK42J
            </p><p class="sale-item-price">
              450,000đ 
            </p>
            <p class="sale-item-add">
              Thêm vào giỏ hàng 
            </p>  
          </div>
          <div class="sale-item flex flex-column space-between align-center">
            <img src="./images/Ao-khoat/apocalyspe_hooide_400c33b9a71f4bdabc0f632c0c6686e1_master.webp" alt=""/>
             <p class="sale-item-id">
              AO-KK131K
            </p><p class="sale-item-price">
              450,000đ 
            </p>
            <p class="sale-item-add">
              Thêm vào giỏ hàng 
            </p>  
          </div>
          <div class="sale-item flex flex-column space-between align-center">
            <img src="./images/Ao-khoat/dospace_tee_pi_3_fdb9359e2a0d440792b3cad79fe93d99.webp" alt=""/>
             <p class="sale-item-id">
              AO-9OKJSH
            </p><p class="sale-item-price">
              450,000đ 
            </p>
            <p class="sale-item-add">
              Thêm vào giỏ hàng 
            </p>  
          </div>
        </div>
    </div>
    </div>
    <section class='payment-and-delivery flex flex-row justify-center'>
     <div class="payment">
        <i class="fas fa-credit-card"></i>
        <div class="payment-content flex flex-column">
          <p>Thanh toán trực tiếp nhanh chóng và an toàn </p> 
          <p>với các đơn vị uy tín</p>
          <h2>Hình thức thanh toán</h2>
          <div class="payment-icon flex flex-row space-around">
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-cc-paypal"></i>
            <i class="fab fa-cc-mastercard"></i>
            <i class="fab fa-cc-jcb"></i>
          </div>
        </div>
     </div>
     <div class="delivery">
        <i class="fas fa-plane"></i>
        <div class="delivery-content">
          <p>Chúng tôi hợp tác với các đối tác vận chuyển lớn trên toàn quốc như GHN Giaohangtietkiem Viettel Post VietNam Post.Chúng tôi cam kết việc giao hàng đúng với chất luọng và thời gian quy định</p>
        </div>
     </div>
    </section>
    <div class="footer">
      <div class="designed-info text-white flex flex-row justify-center">
        <span>Designed by </span><strong><a class='text-white ' href="https://github.com/lamsonhai1379" target="_blank"> LamSonHai</a></strong>
      </div>
      <div class="overlay"></div>  
      <div class="footer-contents flex flex-row space-around align-center">
        <div class="site-slogan flex flex-column flex-start align-center">
          <div class="logo">
            <h1>Logo</h1>
          </div>
          <span class='introduce text-gray'>BAD HABITS
Chúng tôi, những người trẻ đam mê văn hoá đường phố, những nét văn hoá mang đầy tính bụi bặm, dựa trên những cảm xúc mà chúng tôi cảm nhận được ở Sài Gòn này, chúng tôi muốn mang đến cho những khách hàng của chúng tôi những chiếc áo mang những graphic, những câu chuyện đường phố nhất có thể.
Đối với chúng tôi, những chiếc áo thun không đơn thuần chỉ là để mặc, mà nó còn mang cả một câu chuyện mà chúng tôi muốn mang đến cho các khách hàng. </span>
        </div>
        <div class="product flex flex-column flex-start  ">
          <div class="product-title">
              <h1>Top sale</h1>
          </div>
            
<div class="product-items flex flex-column v-padding space-between">
            <div class="items flex flex-row">
                
<div class="item-sale  flex flex-row ">
                  <div class="item-img">
                    <img class='img-fit' src="./images/ao/03_tee_b_1_2c6d911039d248e8847d0cf71ed694b5.png" alt=""/>
                  </div>
                  <div class="item-info flex flex-column v-padding ">
                   <div class="item-name text-white">
                      <span>áo Hologram</span>
                    </div>
                    <div class="item-price line-through text-white">
                        650.000đ 
                    </div>
                    <div class="item-price text-white">
                        400.000đ
                    </div>
                  </div>    
              </div>
              <div class="item-sale  flex flex-row ">
                  <div class="item-img">
                    <img class='img-fit' src="./images/ao/03_tee_b_1_2c6d911039d248e8847d0cf71ed694b5.png" alt=""/>
                  </div>
                  <div class="item-info flex flex-column v-padding h-padding">
                   <div class="item-name text-white">
                      <span>áo Hologram</span>
                    </div>
                    <div class="item-price line-through text-white">
                        650.000đ 
                    </div>
                    <div class="item-price text-white">
                        400.000đ
                    </div>
                  </div>    
              </div>
            </div>    
          </div>
          <div class="product-items flex flex-column space-between">
            <div class="items flex flex-row">
                
<div class="item-sale  flex flex-row ">
                  <div class="item-img">
                    <img class='img-fit' src="./images/ao/03_tee_b_1_2c6d911039d248e8847d0cf71ed694b5.png" alt=""/>
                  </div>
                  <div class="item-info flex flex-column v-padding h-padding">
                   <div class="item-name text-white">
                      <span>áo Hologram</span>
                    </div>
                    <div class="item-price line-through text-white">
                        650.000đ 
                    </div>
                    <div class="item-price text-white">
                        400.000đ
                    </div>
                  </div>    
              </div>
              <div class="item-sale  flex flex-row ">
                  <div class="item-img">
                    <img class='img-fit' src="./images/ao/03_tee_b_1_2c6d911039d248e8847d0cf71ed694b5.png" alt=""/>
                  </div>
                  <div class="item-info flex flex-column v-padding h-padding">
                   <div class="item-name text-white">
                      <span>áo Hologram</span>
                    </div>
                    <div class="item-price line-through text-white">
                        650.000đ 
                    </div>
                    <div class="item-price text-white">
                        400.000đ
                    </div>
                  </div>    
              </div>
            </div>    
          </div>
        </div>
        <div class="contact flex flex-column flex-start align-center">
          <div class="contact-title">
            <h1>Liên hệ</h1>
          </div>
          <div class="email">
            <span class='text-white'>Email: </span>
            <span class='text-white'>lamsonhai1379@gmail.com</span>
          </div>
          <div class="social">
            <ul class="social-icon flex flex-row" > 
              <li><a href="https://www.facebook.com/hai.lam.3726613" target='blank'><i class="fab fa-facebook-square text-gray"></i></a></li>
              <li><a href="https://github.com/lamsonhai1379" target='blank'><i class="fab fa-github-square text-gray"></i></a></li>
              <li><a href="https://www.instagram.com/hai.lam.3726613/" target='blank'><i class="fab fa-instagram text-gray"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
