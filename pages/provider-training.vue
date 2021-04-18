<template>
  <div class="wrapper">
    <div class="intro-container">
      <div
        class="minimal-head"
        data-aos="fadeIn"
        data-aos-delay="60"
        data-aos-duration="1000"
      >
        <div class="row">
          <div class="col-lg-12">
            <div class="inner text-center">
              <h1>Provider Training</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="features custom white-bg provider-training"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <div class="head text-center">
          <h3>Welcome to the Provider Training Center</h3>
        </div>
        <div class="row mx-0">
          <div class="col-sm-6 px-0">
            <div class="item">
              <img
                src="~assets/img/icon-check-blue.svg"
                class="img-full"
                alt=""
              />
              <p>
                Click the <b>Download</b> button to download<br />
                and view training materials.
              </p>
            </div>
          </div>

          <div class="col-sm-6 px-0">
            <div class="item">
              <img
                src="~assets/img/icon-check-blue.svg"
                class="img-full"
                alt=""
              />
              <p>
                Click on the <b>Attestation</b> button after<br />
                you review the training to submit<br />
                your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="featured-trainings-list"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <h2>Featured Trainings</h2>

        <div class="f-list-block">
          <div class="row">
            <div class="col-sm-6 order-sm-12">
              <div class="img-block">
                <img
                  src="~assets/img/physician-reviewing-chart-with-senior-patient.jpg"
                  alt="Physician Reviewing Chart"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="content">
                <img src="~assets/img/icon-training.svg" alt="" />
                <h3 class="attestTitle">
                  Brandman Health Plan Model of Care Training for Providers
                </h3>
                <a
                  class="bttn bttn-blue download-training"
                  @click="dlLink = '/training/BHP MOC for providers.pdf'"
                  v-b-modal.download
                  ><img src="~assets/img/plan-icon-3.png" alt="" /> Download</a
                >
                <a
                  href="#attestation"
                  @click="
                    attestTraining =
                      'Brandman Health Plan Model of Care Training for Providers'
                  "
                  v-b-modal.attestation
                  class="bttn"
                  >Attestation</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      class="download"
      id="download"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      hide-header
      hide-footer
    >
      <div class="" role="document">
        <div class="modal-content rounded-0">
          <div class="modal-body">
            <div class="top-title">
              <h3>Training Attestation</h3>
              <p>
                Don't forget to return here to complete the attestation form.
              </p>
            </div>
            <div class="content">
              <h4>Attestation is mandatory for credit.</h4>
              <a
                href="#"
                v-on:click.prevent="dlResource()"
                class="bttn dl_close"
                id="dl_close"
                >Ok, got it!</a
              >
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="attestation"
      class="attestation cpopup"
      scrollable
      hide-header
      hide-footer
      size="xl"
    >
      <div class="cpopup">
        <div class="content">
          <h3>Provider Attestation</h3>
          <span class="date"
            >Completion Date:
            <span class="today">{{ currentDate | formatDate }}</span></span
          >
          <p class="text-bold training-name">
            Brandman Health Plan Model of Care Training for Providers
          </p>
        </div>
        <div class="top-title">
          <div class="form-wrapper">
            <form
              action="https://getform.io/f/416bc7f0-27e1-4eee-90bf-0d69c19630c8"
              method="POST"
            >
              <p>
                I,
                <input
                  class="inline-field"
                  name="Attest Name"
                  type="text"
                  placeholder=""
                />, hereby attest that I have completed the
                <span class="training-name">{{ attestTraining }}</span
                >.
              </p>
              <p>
                I understand the Model of Care and it's role in improving health
                outcomes for the vulnerable population.<br />It is understood
                that the annual training is mandatory for all providers that
                care for C-SNP members and is required for the Centers for
                Medicare and Medicaid Services (CMS).
              </p>
              <p class="text-muted">Fields marked with an * are required</p>
              <div class="provider-fields-wrap">
                <input name="Name" type="text" placeholder="Name*" />
                <input
                  name="Date"
                  id="today"
                  type="date"
                  value=""
                  placeholder="Date*"
                />
                <input
                  name="Physician Name"
                  type="text"
                  placeholder="Physician Name*"
                />
                <input name="NPI" type="text" placeholder="NPI (10 digits)*" />
                <input
                  name="IPA Affiliation"
                  type="text"
                  placeholder="IPA Affiliation*"
                />
                <div
                  class="g-recaptcha"
                  data-sitekey="6LehWj8aAAAAALSxwXaGf_ugskK7KDHuuqJ6MaCp"
                ></div>
                <button type="submit" class="bttn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { createSEOMeta } from '~/utils/seo'
export default {
  data() {
    return {
      currentDate: new Date(),
      attestTraining: '',
      dlLink: '',
    }
  },
  head() {
    const title = 'Provider Training - Brandman Health Plan'

    return {
      title,
      meta: createSEOMeta({
        title,
        url: this.$nuxt.$route.path,
      }),
    }
  },
  methods: {
    dlResource: function (context) {
      this.$bvModal.hide('download')
      window.open(this.$config.baseURL + this.dlLink, '_blank')
    },
  },
}
</script>
<style>
#attestation .modal-body {
  padding: 0;
}
</style>