<template>
  <div class="wrapper">
    <div class="container intro-container">
      <div
        class="about-intro"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1000"
        style="
          background: url(/img/broker-resources-hero.jpg) no-repeat center top;
        "
      >
        <div class="row">
          <div class="col-sm-10 col-lg-6">
            <div class="inner">
              <h1>Broker <br />Resources</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="link-container text-center"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <ul>
          <li>
            <a @click.prevent="scrollToSection('1')"
              >Online Search &amp; Enrollment Tools</a
            >
          </li>
          <li>
            <a @click.prevent="scrollToSection('contact')"
              >Order Pre-Enrollment Kits</a
            >
          </li>
          <li>
            <a @click.prevent="scrollToSection('3')"
              >Download Pre-Enrollment Kits</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      class="btns-wrap text-center"
      id="1"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <a
          @click="
            $bus.$emit('go-external', 'https://bhp.advalent.com/#/authlogin')
          "
          class="bttn bttn-blue"
          >Enroll</a
        >
        <!-- <a href="https://bhpenroll.advalent.com/provider" target="_blank" class="bttn bttn-blue">Provider Lookup</a> -->
        <a
          href="/doc/Brandman%202021%20Formulary%20October%202020%20v4.pdf"
          target="_blank"
          class="bttn bttn-blue"
          >Formulary Lookup</a
        >
      </div>
    </div>

    <div
      class="contact text-center"
      id="contact"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container alt">
        <div class="row">
          <div class="col-lg-8 col-md-11 mx-auto">
            <h3>Order Printed Pre Enrollment Kits</h3>
            <p class="auto-width mb-5">
              <b
                >Please complete and submit this order form to request printed
                kits, making sure to specify how many kits you want in English
                and how many in Spanish.</b
              >
            </p>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-sm-6 col-md-4 px-lg-5">
            <img
              src="~assets/img/icon-check-blue.svg"
              class="img-fluid mb-4"
              alt=""
            />
            <p><b>Printed kits are limited to 25 per agent per order.</b></p>
          </div>

          <div class="col-sm-6 col-md-4 px-lg-5">
            <img
              src="~assets/img/icon-check-blue.svg"
              class="img-fluid mb-4"
              alt=""
            />
            <p>
              <b
                >If you would like to order more than 25 kits, or if you have
                questions, please email us at
                <a href="mailto:sales@brandmanhealthplan.com"
                  >sales@brandmanhealthplan.com</a
                >.</b
              >
            </p>
          </div>

          <div class="col-md-4 px-lg-5">
            <img
              src="~assets/img/icon-check-blue.svg"
              class="img-fluid mb-4"
              alt=""
            />
            <p>
              <b
                >Once you've made your selections and provided your delivery
                information below, you can expect your initial enrollment
                materials within 1 - 2 weeks.</b
              >
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <form
          action="https://getform.io/f/3bdfcc6f-09fe-4d00-933f-a58538df9765"
          method="POST"
        >
          <input name="Name" type="text" placeholder="Your Name*" />
          <input name="Agency" type="text" placeholder="Agency or FMO Name*" />
          <input
            name="CA License"
            type="text"
            placeholder="Your CA License Number*"
          />
          <input
            name="National Producer Number"
            type="text"
            placeholder="Your National Producer Number*"
          />
          <input name="Email" type="email" placeholder="Your Email*" />
          <input name="Phone" type="text" placeholder="Your Phone Number*" />
          <input
            name="Shipping Address"
            type="text"
            placeholder="Shipping Address*"
          />
          <input
            name="Shipping City"
            type="text"
            placeholder="Shipping City*"
          />

          <div class="row">
            <div class="col-sm-6">
              <select name="State">
                <option value="">Shipping State*</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div class="col-sm-6">
              <input name="Zip" type="text" placeholder="Shipping ZIP*" />
            </div>
            <div class="col-sm-6">
              <input
                name="English Kit Count"
                type="text"
                placeholder="Number of Kits in English"
              />
            </div>
            <div class="col-sm-6">
              <input
                name="Spanish Kit Count"
                type="text"
                placeholder="Number of Kits in Spanish"
              />
            </div>
          </div>
          <textarea
            name="Message"
            placeholder="Notes or Special Instructions"
          ></textarea>
          <div
            class="g-recaptcha"
            data-sitekey="6LehWj8aAAAAALSxwXaGf_ugskK7KDHuuqJ6MaCp"
          ></div>
          <button type="submit" class="bttn">Submit</button>
        </form>
      </div>
    </div>

    <div
      class="download-kit text-center"
      id="3"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <div class="head">
          <h3>Download Kits</h3>
          <p>
            Click the links below to download digital Pre Enrollment Kits to
            print yourself or distribute electronically.
          </p>
        </div>

        <hr />
        <h4>English</h4>

        <div class="row">
          <div class="col-md-3">
            <div class="item">
              <img
                src="~assets/img/pek-english-arise-220x290-2x.jpg"
                class="img-fluid"
                alt=""
              />
              <p>
                <b>Brandman Arise</b><br />
                (English)<br />
                <a
                  target="_blank"
                  href="/doc/Arise/Brandman Arise 001 English Downloadable PEK 2020-11-23.pdf"
                  ><i class="fas fa-file-download"></i> Download</a
                >
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="item">
              <img
                src="~assets/img/pek-english-arise-d-220x290-2x.jpg"
                class="img-fluid"
                alt=""
              />
              <p>
                <b>Brandman Arise D</b><br />
                (English)<br />
                <a
                  target="_blank"
                  href="/doc/Arise-D/Brandman AriseD 002 English Downloadable PEK 2020-11-23.pdf"
                  ><i class="fas fa-file-download"></i> Download</a
                >
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="item">
              <img
                src="~assets/img/pek-english-aspire-220x290-2x.jpg"
                class="img-fluid"
                alt=""
              />
              <p>
                <b>Brandman Aspire</b><br />
                (English)<br />
                <a
                  target="_blank"
                  href="/doc/Aspire/Brandman Aspire 003 English Downloadable PEK 2020-11-23.pdf"
                  ><i class="fas fa-file-download"></i> Download</a
                >
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="item">
              <img
                src="~assets/img/pek-english-aspire-d-220x290-2x.jpg"
                class="img-fluid"
                alt=""
              />
              <p>
                <b>Brandman Aspire D</b><br />
                (English)<br />
                <a
                  target="_blank"
                  href="/doc/Aspire-D/Brandman AspireD 004 English Downloadable PEK 2020-11-23.pdf"
                  ><i class="fas fa-file-download"></i> Download</a
                >
              </p>
            </div>
          </div>
        </div>

        <hr />
        <h4>Spanish</h4>

        <div class="row">
          <div class="col-md-3">
            <div class="item">
              <img
                src="~assets/img/pek-spanish-arise-220x290-2x.jpg"
                class="img-fluid"
                alt=""
              />
              <p>
                <b>Brandman Arise</b><br />
                (Spanish)<br />
                <a
                  target="_blank"
                  href="/doc/Arise/Brandman Arise Downloadable PEK Spanish.pdf"
                  ><i class="fas fa-file-download"></i> Download</a
                >
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="item">
              <img
                src="~assets/img/pek-spanish-arise-d-220x290-2x.jpg"
                class="img-fluid"
                alt=""
              />
              <p>
                <b>Brandman Arise D</b><br />
                (Spanish)<br />
                <a
                  target="_blank"
                  href="/doc/Arise-D/Brandman AriseD Downloadable PEK Spanish.pdf"
                  ><i class="fas fa-file-download"></i> Download</a
                >
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="item">
              <img
                src="~assets/img/pek-spanish-aspire-220x290-2x.jpg"
                class="img-fluid"
                alt=""
              />
              <p>
                <b>Brandman Aspire</b><br />
                (Spanish)<br />
                <a
                  target="_blank"
                  href="/doc/Aspire/Brandman Aspire Downloadable PEK Spanish.pdf"
                  ><i class="fas fa-file-download"></i> Download</a
                >
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="item">
              <img
                src="~assets/img/pek-spanish-aspire-d-220x290-2x.jpg"
                class="img-fluid"
                alt=""
              />
              <p>
                <b>Brandman Aspire D</b><br />
                (Spanish)<br />
                <a
                  target="_blank"
                  href="/doc/Aspire-D/Brandman AspireD Downloadable PEK Spanish.pdf"
                  ><i class="fas fa-file-download"></i> Download</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="cta"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <p>
          Not finding what you need?
          <a href="/contact" class="bttn">Contact Us</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'
export default {
  head() {
    const title = 'Broker Resources - Brandman Health Plan'

    return {
      title,
      meta: createSEOMeta({
        title,
        url: this.$nuxt.$route.path,
      }),
    }
  },
  methods: {
    scrollToSection: function (sectionID) {
      let element = document.getElementById(sectionID)
      element.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
