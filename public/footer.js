const footerHTML = `
  <footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="./images/logo.png" alt="logo" />
        <p>
          Choose  for a Fantastic, enriching buying experience that
          empowers you to achieve your Budget.

          <br />
          cutting-edge gadgets!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div class="content_2">
        <h4>SHOPPING</h4>
        <a href="#">Vegetables</a>
        <a href="#">Fruits</a>
        <a href="#">Seasonal Fruits</a>
        
      </div>
      <div class="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="./payment.html" target="_blank"> Payment Method </a>
        <a href="./about.html" target="_blank"> Delivery </a>
       
      </div>
      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Be the first to know about new
          <br />
          arrivals!
        </p>
        <div class="f-mail">
          <input type="email" placeholder="Your Email" />
          <i class="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>© 2024 Kisan Bazaar. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
