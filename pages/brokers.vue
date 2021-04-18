<template>
  <div class="wrapper">
    <div class="container intro-container">
      <div
        class="about-intro"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1000"
        style="background: url(/img/brokers-hero.jpg) no-repeat center top"
      >
        <div class="row">
          <div class="col-sm-10 col-lg-5">
            <div class="inner">
              <h1>For Brokers</h1>
              <p>
                Brandman Health Plan (BHP) works with select agencies to help
                ensure a seamless enrollment and service experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="features py-5"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <div class="row mx-0">
          <div class="col-sm-6 px-0">
            <div class="item alt">
              <p>
                <i class="fas fa-arrow-right"></i> If you are an agency or FMO
                interested in offering Brandman Health Plan, please email
                <br /><a href="mailto:sales@brandmanhealthplan.com"
                  >sales@brandmanhealthplan.com</a
                >
              </p>
            </div>
          </div>

          <div class="col-sm-6 px-0">
            <div class="item alt">
              <p>
                <i class="fas fa-arrow-right"></i> If you are an agent
                interested in selling Brandman Health Plan options, please check
                with your FMO or agency head for status and instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div
        class="features custom"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1000"
      >
        <p>
          Agents working under approved agency and FMO partners can use this
          site to complete online training and certification, order or download
          enrollment materials, and find other useful resources like physician
          or formulary lookup.
        </p>

        <div class="row mx-0">
          <div class="col-sm-6 px-0">
            <div class="item">
              <img
                src="~assets/img/icon-training.svg"
                class="img-fluid"
                alt=""
              />
              <h4>Training & Certification</h4>
              <p>
                View our online training module and take the certification quiz.
              </p>
              <a href="/broker-training" class="bttn bttn-blue"
                >View Training Module</a
              >
            </div>
          </div>

          <div class="col-sm-6 px-0">
            <div class="item">
              <img
                src="~assets/img/icon-resources.svg"
                class="img-fluid"
                alt=""
              />
              <h4>Broker Resources</h4>
              <p>
                Visit our resource center for enrollment materials, in-network
                physician lookup, and more.
              </p>
              <a href="/broker-resources" class="bttn bttn-blue"
                >Visit Resource Center</a
              >
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
    const title = 'Brokers - Brandman Health Plan'

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