<template>
  <div class="wrapper">
    <div class="container intro-container">
      <div
        class="about-intro"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1000"
        style="background: url(/img/contact-hero.jpg) no-repeat center top"
      >
        <div class="row">
          <div class="col-sm-10 col-lg-6">
            <div class="inner">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="features custom"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <div class="head text-center">
          <h3>We’re Here to Help</h3>
          <p>
            If you have questions, use one of the following options to get in
            touch with us.
          </p>
        </div>

        <div class="row mx-0">
          <div class="col-sm-4 px-0">
            <div class="item">
              <img src="~assets/img/icon-phone.svg" class="img-full" alt="" />
              <p>
                Call <a href="tel:888-697-5662">888-697-5662</a> (TTY/TDD: 711)
                <br />Hours: 8:00AM–8:00PM Mon-Fri
              </p>
            </div>
          </div>

          <div class="col-sm-4 px-0">
            <div class="item">
              <img src="~assets/img/icon-mail.svg" class="img-full" alt="" />
              <p>
                Brandman Health Plan <br />P.O. Box 18650 <br />Encino, CA 91416
              </p>
            </div>
          </div>

          <div class="col-sm-4 px-0">
            <div class="item">
              <img
                src="~assets/img/icon-envelope.svg"
                class="img-full"
                alt=""
              />
              <p>
                <a href="mailto:info@brandmanhealthplan.com" class="text-black"
                  >info@brandmanhealthplan.com</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="contact text-center"
      id="contact-form"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <p class="lead"><b>Or use the form below to send us a message.</b></p>

        <form
          action="https://getform.io/f/67ecfa79-4f20-4165-bd19-014688d4f10e"
          method="POST"
        >
          <input name="Name" type="text" placeholder="Your Name*" />
          <input name="Email" type="email" placeholder="Email Address*" />
          <input name="Phone" type="text" placeholder="Phone Number" />
          <select name="Interested In">
            <option value="">I’m interested in*</option>
            <option value="Enrolling">Enrolling in Brandman Health Plan</option>
            <option value="In-home Visit">
              Requesting an in-home visit with a certified insurance agent
            </option>
            <option value="Questions about Brandman">
              Asking questions about Brandman Health Plan
            </option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="Message"
            placeholder="Message or Questions"
          ></textarea>
          <div class="custom-control custom-checkbox">
            <input type="hidden" name="Contact Me" value="No" /><input
              type="checkbox"
              class="custom-control-input"
              id="customCheck"
              name="Contact Me"
              value="Yes"
            />
            <label class="custom-control-label" for="customCheck"
              >Contact me with more information or enrollment assistance.</label
            >
          </div>
          <p>
            Checking confirms that: I am interested in more information about
            Brandman Health Plan, a Health Maintenance Organization that
            contracts with Medicare. I am asking for a plan representative or
            licensed agent to contact me. I understand that I am under no
            obligation to enroll. I understand that if I choose to enroll with
            Brandman Health, the plan representative or licensed agent may
            receive compensation for assisting me.
          </p>
          <div
            class="g-recaptcha"
            data-sitekey="6LehWj8aAAAAALSxwXaGf_ugskK7KDHuuqJ6MaCp"
          ></div>
          <button type="submit" class="bttn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { createSEOMeta } from '~/utils/seo'
export default {
  head() {
    const title = 'Contact - Brandman Health Plan'

    return {
      title,
      meta: createSEOMeta({
        title,
        url: this.$nuxt.$route.path,
      }),
    }
  },
}
</script>