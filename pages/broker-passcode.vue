<template>
  <div class="wrapper">
    <div
      class="container quiz-intro passcode"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
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
                type="password"
                placeholder="Enter Passcode"
              />
              <div id="pass-invalid-feedback" class="invalid-feedback">
                Incorrect Password.
              </div>
              <button type="submit" id="pass-submit" class="bttn">
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
}
</script>