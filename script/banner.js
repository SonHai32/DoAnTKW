const BANNERS = [
  { URL: "./images/banner/sale.png", LINK: "sale.html" },
  {
    URL: "./images/banner/new-backpack.png",
    LINK: "product.html?tag=BACK_PACK&id=BHBP-06"
  }
];
let CURRENT_INDEX = 0;
let HREF = window.location.href;

$(document).ready(function() {
  $(".next-banner").click(function() {
    nextBanner();
  });
  $(".prev-banner").click(function() {
    prevBanner();
  });
  $(".banner").click(function(event) {
    if (event.target.className === "banner") {
      window.location.href = `${
        HREF.includes("index.html")
          ? `./page/` + BANNERS[CURRENT_INDEX].LINK
          : BANNERS[CURRENT_INDEX].LINK
      } `;
    }
  });
});

function nextBanner() {
  if (CURRENT_INDEX >= 1) {
    CURRENT_INDEX = 0;
  } else {
    CURRENT_INDEX++;
  }
  changeBanner(CURRENT_INDEX);
}

function prevBanner() {
  if (CURRENT_INDEX <= 0) {
    CURRENT_INDEX = BANNERS.length - 1;
  } else {
    CURRENT_INDEX--;
  }

  changeBanner(CURRENT_INDEX);
}
function changeBanner(index) {
  $(document).ready(function() {
    $(".banner").css(
      "background-image",
      `url('${
        HREF.includes("index.html")
          ? BANNERS[index].URL
          : "." + BANNERS[index].URL
      }')`
    );
  });
}

changeBanner(CURRENT_INDEX);

setInterval(function() {
  nextBanner();
}, 5000);
