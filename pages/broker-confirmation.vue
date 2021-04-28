<template>
  <div class="wrapper">
    <div
      class="container quiz-intro confirmation"
      id="certificate"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="row">
        <div class="col-lg-5 order-12">
          <img
            class="img-fluid"
            src="~assets/img/quiz-confirmation-grn-flag.svg"
            alt=""
          />
        </div>

        <div class="col-lg-7">
          <div class="inner">
            <h1>Congratulations!</h1>
            <p>
              You've passed your Brandman Health Plan certification.<br />Please
              print this confirmation page for your records.
            </p>

            <div class="conf-data">
              <p>
                <span id="name">{{ crtName }}</span
                ><br />
                <span id="agency"> {{ crtAgency }}</span
                ><br />
                Certification completed on
                <span id="date">{{ currentDate | formatDate }}</span>
              </p>
            </div>

            <a
              href="#"
              v-on:click.prevent="printCert()"
              class="bttn bttn-blue px-4"
              ><i class="fas fa-print mr-2"></i> Print</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'
export default {
  data() {
    return {
      crtName: '',
      crtAgency: '',
      currentDate: new Date(),
    }
  },
  head() {
    const title = 'Broker Confirmation - Brandman Health Plan'
    return {
      title,
      meta: createSEOMeta({
        title,
        url: this.$nuxt.$route.path,
      }),
    }
  },
  methods: {
    pageData: function () {
      let auth = sessionStorage.getItem('crtAuth')
      if (auth) {
        this.crtName = sessionStorage.getItem('crtName')
        this.crtAgency = sessionStorage.getItem('crtAgency')
      } else {
        window.location.replace('/broker-passcode')
      }
    },
    printCert: function () {
      console.log('clicked')
      window.print()
    },
  },
  mounted() {
    this.pageData()
  },
}
</script>
