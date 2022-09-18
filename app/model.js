// this is my model and it handles all of the service calls
var homeContent = `<section class="home-wrapper">
<div class="home-head">
  <img src="images/coolHead.webp" alt="coolHead">
</div>

<div class="home-mid-container">
  <div class="home-mid-img">
    <img src="images/cool1.jpeg" alt="">
    <img src="images/cool4.jpg" alt="">
    <img src="images/cool5.jpg" alt="">
    <button class="imgBtn">NEW RELEASES</button>
  </div>
</div>

<div class="home-text-container">
  <div class="home-text">
    <span class="big-text">Just My Type.</span>
    <span class="big-text">Shop Now!</span>
    <button class="txtBtn">Shop Now!</button>
  </div>
</div>

<div class="home-bottom-container">
  <div class="home-bottom-img">
    <img src="images/veryCool.png" alt="">
    <img src="images/veryCool2.jpg" alt="">
    <img src="images/veryCool3.webp" alt="">
  </div>
</div>
</section>`;

var aboutContent = `<section class="about-wrapper">
<div class="about-head">
  <img src="images/coolAbout.webp" alt="">
</div>

<div class="about-mid">
  <div class="about-head-text">
    <span class="about-txt">ABOUT US</span>
  </div>

  <div class="about-img-container">
    <div class="about-mid-img">
      <img src="images/coolOwner.jpg" alt="">
    </div>
    <div class="about-mid-text">
      <p class="owner-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima optio ad nisi, tempore repellat, quis deserunt a dignissimos sunt voluptate dicta quasi numquam cumque, rem quisquam ab ipsum. Perspiciatis, numquam! - Chad</p>
      <p class="owner-txt-two">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima optio ad nisi, tempore repellat, quis deserunt a dignissimos sunt voluptate dicta quasi numquam cumque, rem quisquam ab ipsum. Perspiciatis, numquam! - Max</p>
    </div>
  </div>
  <div class="about-img-container">
    <div class="about-mid-text-two">
      <p class="owner-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sapiente tenetur vel, sint quisquam non, libero expedita obcaecati tempore consectetur veritatis, in sequi culpa est aliquid impedit officia dicta. Inventore?
      Provident, totam temporibus eligendi soluta repellat dicta quasi sed, modi, quae sunt quam saepe impedit suscipit? Neque quos mollitia expedita asperiores sequi. Architecto eos, sit quis beatae veniam esse ut?
      </p>
    </div>
    <div class="about-mid-img">
      <img src="images/coolOwner2.jpg" alt="">
    </div>
  </div>
</div>
</section>`;

var productsContent = `<section class="products-wrapper">
<div class="product-head">
  <img src="images/coolProduct6.jpg" alt="">
  <img src="images/coolProduct.jpg" alt="">
  <img src="images/coolProduct3.jpg" alt="">
</div>
<div class="product-head-text">
  <span class="product-text">SHOP NOW</span>
</div>

<div class="product-rows-one">
    <div class="product-row-img">
      <img src="images/cool1.jpg" alt="">
      <button class="shop-btn">Buy Now</button>
    </div>
    <div class="product-row-img">
      <img src="images/cool2.jpg" alt="">
      <button class="shop-btn">Buy Now</button>
    </div>
    <div class="product-row-img">
      <img src="images/cool4.jpg" alt="">
      <button class="shop-btn">Buy Now</button>
    </div>
</div>
<div class="product-rows-one">
  <div class="product-row-img">
    <img src="images/cool6.webp" alt="">
    <button class="shop-btn">Buy Now</button>
  </div>
  <div class="product-row-img">
    <img src="images/cool5.jpg" alt="">
    <button class="shop-btn">Buy Now</button>
  </div>
  <div class="product-row-img">
    <img src="images/cool7.webp" alt="">
    <button class="shop-btn">Buy Now</button>
  </div>
</div>
<div class="product-rows-one">
<div class="product-row-img">
  <img src="images/cool8.webp" alt="">
  <button class="shop-btn">Buy Now</button>
</div>
<div class="product-row-img">
  <img src="images/cool9.webp" alt="">
  <button class="shop-btn">Buy Now</button>
</div>
<div class="product-row-img">
  <img src="images/cool10.webp" alt="">
  <button class="shop-btn">Buy Now</button>
</div>
</div>
</section>`;

var contactContent = `<section class="contact-wrapper">
<div class="contact-header">
  <img src="images/coolContact.webp" alt="">
</div>

<div class="contact-head-text">
  <span class="head-text">CONTACT US:</span>
</div>

<div class="contact-form-container">
  <div class="contact-form">
    <div class="form-text-input">
      <input type="text" placeholder="Your name..." />
    </div>
    <div class="form-text-input">
      <input type="text" placeholder="Your Email..." />
    </div>
    <div class="form-text-message-input">
      <input type="text" placeholder="Message..." />
    </div>
    <div class="contactBtn">SEND MESSAGE</div>
  </div>
  <div class="contact-form-img">
    <img src="images/veryCool.png" alt="">
  </div>
</div>
</section>`;

function setCurrentPageContent(pageID) {
    let contentName = pageID + "Content";
    $("#app").html(eval(contentName));
}

export {setCurrentPageContent};