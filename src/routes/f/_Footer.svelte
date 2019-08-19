<script>
  export let footerData = {};
  export let headerData = {};
</script>
<style>

footer{
		padding-top: 5px;
		padding-bottom: 5px;
  
    display: flex;
    flex-direction: column;
  
    color: white;
    flex-wrap: wrap;
	}

.row {
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  flex-wrap: wrap;
}
  a {
    color: white;
    text-decoration: none;
  }
section{margin: 0 10px;}

@media screen and (max-width: 600px){
  .row{
    justify-content: space-between;
  }
}
</style>
<footer>

      <div class="row">
          <div class="">
            <section>
              <span class="title">ABOUT US</span>
              <div class="content">
                <ul>
                  <li><a href="./f/page/about_us">Who we are?</a></li>
                  <li><a href="./f/page/about_us#mgmt">Management Team</a></li>
                </ul>
              </div>
            </section>
          </div>
          <div class="">
            <section>
              <span class="title">CUSTOMER DELIGHT</span>
              <div class="content">
                <ul>
                  <li><a href="./f/page/contact_us">Contact Us</a></li>
                  <li><a href="./f/page/faq">FAQ</a></li>
									<li class="phone-number">{footerData.mobile[0][4]}</li>
                  <li class="">(9 am-10 pm, 7 days a week)</li>
                </ul>
              </div>
            </section>
          </div>
          
          <div class="">
            <section>
              <span class="title">POLICIES</span>
              <div class="content">
                <ul>
                  <li><a href="./f/page/30_day_money_back_policy">30 -Day Retruns</a></li>
                  
                  <li><a href="./f/page/30_day_money_back_policy#lifetime-exchange">Lifetime Exchange & Buy-Back</a></li>
                  
                  <li><a href="./f/page/privacy">Privacy Policy</a></li>
                  <li><a href="./f/page/tnc">Terms&nbsp;&amp;&nbsp;Conditions</a></li>
                </ul>
              </div>
            </section>

          </div>
          <div class="">
            <section>
              <span class="title">SHOP WITH CONFIDENCE</span>
              <div class="content">
                <ul>
                  <li><a href="./f/page/whybuyfromus">Why Buy From Us?</a></li>
                  <li><a href="./f/page/certifications">Our Certifications</a></li>
                  <li><a href="./f/page/press-room">Press Room</a></li>
                  <li class="seperator"><a href="./f/page/testimonials">Testimonials</a></li>
                </ul>
              </div>
            </section>
            {#if false}            
                <section>
                  <span class="title">JEWELLERY GUIDE</span>
                  <div class="content">
                    <ul>
                        <li><a href="#!">Buying and Price Guide</a></li>
                        <li><a href="#!">Certification Guide</a></li>
                        <li><a href="#!">Diamond and Solitaire Guide</a></li>
                        <li><a href="#!">Gemstone Guide</a></li>
                        <li><a href="#!">Gifting Guide</a></li>
                        <li><a href="#!">Jewellery Care Guide</a></li>
                    </ul>
                  </div>
                </section>
            {/if}
            </div>
        <div class="">
          <section>
            <span class="title">Download Our App</span>
            <div class="content">
              <p>Comming Soon! Shining new app,<br> made just <br>for you! It's Free,<br> Easy &amp; Smart.</p>
              <span class="app-icon"><span ><i class="app"></i></span></span>
              <span class="app-icon"><span ><i class="app ios"></i></span></span>
              <div class="app-mobile"><span><img class="lazy-img" src="#!" alt="" style="display: inline;"></span></div>
            </div>
          </section>
        </div>
      </div>


      <div class="row">
        {#if false}
          <form id="subscriber-form" method="post" onsubmit="return false;">
            <div class="input-group">
            <label for="newsletter_subscriber">
            <input type="email" value="" placeholder="Enter email for our newsletter" name="newsletter_subscriber" id="newsletter_subscriber" class="validate[required,custom[email]] text-input form-text form-control elowrcase"></label>
            <span class="input-group-btn">
              <input type="submit" class="btn btn-light-blue" value="SUBSCRIBE" name="Submit">
            </span>
            </div>
            <!-- /.input-group -->
            <div class="msg-success" id="subscriber_msg" style="display: none"><strong>Thank you!</strong> We'll be in touch soon with a welcome email.</div>
          </form>
        {/if}

        <div id="follow-us" class="">
          <div class="content">
          <span ><img src="../images/feather/facebook.svg" alt="facebook"/></span>
          <span ><img src="../images/feather/twitter.svg" alt="twitter"/></span>
          <span ><img src="../images/feather/youtube.svg" alt="youtube"/></span>
          <span ><span class="icon-ion-social-pinterest"></span></span>
          <span ><img src="../images/feather/instagram.svg" alt="instagram"/></span>
          </div>
        </div>
        
        <div class="">
          <div class="content payment-methods">
            <i class="icon-cc-mastercard" title="Master Card"></i>
            <i class="icon-cc-visa" title="Visa"></i>
            <i class="icon-cc-amex" title="American Express"></i>
            <i class="icon-cc-paypal" title="PayPal"></i>
          </div>
        </div>
            
        <div class="">© 2019 {headerData.company[0][4]}. All Rights Reserved.&nbsp;</div>
        <div><a href="https://scesoftwares.com/">Made By SCE Softwares</a></div>

      </div>


</footer>