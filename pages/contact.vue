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

    <ContactForm />
  </div>
</template>
<script>
import { createSEOMeta } from '~/utils/seo'
import ContactForm from '~/components/ContactForm.vue'
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
  components: {
    ContactForm,
  },
}
</script>