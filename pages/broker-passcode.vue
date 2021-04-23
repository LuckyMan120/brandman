<template>
  <div class="wrapper">
    <div class="container quiz-intro passcode">
      <div class="row">
        <div class="col-lg-5 order-12">
          <img
            class="img-fluid"
            src="~assets/img/passcode-illustration.svg"
            alt=""
          />
        </div>

        <div class="col-lg-7">
          <div class="inner">
            <h1>Brandman Health Plan (BHP) Broker Training</h1>
            <p>
              Thank you for your interest in becoming certified to sell Brandman
              Health Plan's Medicare Advantage C-SNP plans.
            </p>

            <p>
              To access our online training, please enter your training passcode
              below. If you don't know the passcode, or need to confirm if your
              FMO is contracted to offer Brandman Health Plan insurance plans,
              please email
              <a href="mailto:sales@brandmanhealthplan.com"
                >sales@brandmanhealthplan.com</a
              >.
            </p>

            <form>
              <input
                id="frmpass"
                ref="frmpass"
                type="password"
                placeholder="Enter Passcode"
              />
              <div
                id="pass-invalid-feedback"
                class="invalid-feedback"
                v-show="isInvalid"
              >
                Incorrect Password.
              </div>
              <button
                type="submit"
                @click.prevent="setCookie()"
                id="pass-submit"
                class="bttn"
              >
                Submit
              </button>
            </form>
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
      isInvalid: false,
    }
  },
  head() {
    const title = 'Broker Passcode - Brandman Health Plan'

    return {
      title,
      meta: createSEOMeta({
        title,
        url: this.$nuxt.$route.path,
      }),
    }
  },
  methods: {
    setCookie: function () {
      let pass = this.$refs.frmpass.value
      if (pass == 'bhp') {
        this.isInvalid = false
        sessionStorage.setItem('crtAuth', true)
        window.location.replace('/broker-training')
      } else {
        this.isInvalid = true
      }
    },
  },
}
</script>