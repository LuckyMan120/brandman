<template>
  <div class="wrapper">
    <div
      class="features bg-light custom"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <div class="head text-center">
          <h3>Thank you for your submission!</h3>
        </div>

        <div class="row mx-0">
          <div class="col-sm-4 px-0">
            <div class="item">
              <img src="~assets/img/icon-phone.svg" class="img-full" alt="" />
              <p>
                Call <a href="tel:888-697-5662">888-697-5662</a> (TTY: 711)
                <br />Hours: 8:00AM–8:00PM Mon-Fri
              </p>
            </div>
          </div>

          <div class="col-sm-4 px-0">
            <div class="item">
              <img src="~assets/img/icon-mail.svg" class="img-full" alt="" />
              <p>
                Brandman Health Plan <br />P.O. Box 19010 <br />Encino, CA 91416
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
                <a
                  href="mailto:providerservice@brandmanhealthplan.com"
                  class="text-black"
                  >providerservice@brandmanhealthplan.com</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createSEOMeta } from '~/utils/seo'
export default {
  head() {
    const title = 'Thank You - Brandman Health Plan'

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