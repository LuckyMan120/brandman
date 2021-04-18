<template>
  <div class="wrapper">
    <div class="container intro-container">
      <div
        class="about-intro"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1000"
        style="background: url(/img/physicians-hero.jpg) no-repeat center top"
      >
        <div class="row">
          <div class="col-sm-10 col-lg-6">
            <div class="inner">
              <h1>For Physicians</h1>
              <p>
                Helpful information and resources for <br />network physicians
                and staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="info-wrap alt pb-5 mb-5"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="info left">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto order-md-12">
              <img
                class="img-fluid alt"
                src="~assets/img/physicians-illustration.svg"
              />
            </div>
            <div class="col-md-6">
              <div class="inner">
                <h3>Helping Physicians <br />Help Patients</h3>
                <p>
                  As a Medicare Advantage Chronic Condition Special Needs Plan
                  (C-SNP), Brandman Health Plan is dedicated to helping
                  Medicare-eligible individuals who are diagnosed with either
                  diabetes, chronic heart failure, cardiovascular disorders, or
                  dementia.
                </p>

                <p>
                  These patients require additional care, time and resources.
                  Brandman Health Plan is here to assist you in providing care
                  for your patients.
                </p>

                <p>
                  We devote the time and attention to help your patients manage
                  these chronic conditions. Our benefits and plans are uniquely
                  tailored to the specific needs of this population. Our care
                  management programs can guide patients to the right care, at
                  the right time and at the right level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="programs alt style-3"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <h3 class="text-center">Our Plans</h3>

        <div class="row">
          <div class="col-md-6">
            <div class="item item-1">
              <img src="~assets/img/icon-arise.svg" class="img-full" alt="" />
              <h4>Brandman Arise</h4>
              <p>
                For individuals with either diabetes, chronic heart failure or
                cardiovascular disorders.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item item-2">
              <img src="~assets/img/icon-aspire.svg" class="img-full" alt="" />
              <h4>Brandman Aspire</h4>
              <p>
                For individuals who suffer from dementia or other cognitive
                disorders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="cta text-center alt"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <p>Interested in enrolling patients in our Aspire or Arise Plans?</p>

        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="row">
              <div class="col-sm-6 col-md-6">
                <small
                  >Call our <br />Care Management Department<a href="#"
                    >888-697-5662</a
                  ></small
                >
              </div>

              <div class="col-sm-6 col-md-6">
                <a href="/contact#contact-form" class="bttn"
                  ><i class="fas fa-file-download"></i> Click to Submit an
                  Online Request</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="custom-content">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<img src="~assets/img/physician-2.jpg" class="img-full" alt="" />
				</div>
		
				<div class="col-md-6">
					<div class="inner">
						<h3>Provider Resource Library</h3>
						<p>Visit our library for the resources, information, and documents you'll need to engage Brandman Health Plan benefits for your practice and your patients.</p>
						<a href="#" class="bttn bttn-blue">Visit Library</a>
					</div>
				</div>
			</div>
		</div>
	</div> -->
    <section class="provider-services-wrap">
      <div class="container">
        <div class="provider-services text-center">
          <h3>Provider Services</h3>
          <p>
            Need help with program support or have a system question? <br />Our
            provider services team is here with answers and support.
          </p>

          <div class="row">
            <div class="col-sm-6 col-md-6">
              <img src="~assets/img/icon-phone.svg" class="img-fluid" alt="" />
              <p>
                Call <a href="tel:888-697-5662">888-697-5662</a> (TTY/TTD: 711)
                <br />Hours: 8:00AM–8:00PM Mon-Fri
              </p>
            </div>

            <div class="col-sm-6 col-md-6">
              <img
                src="~assets/img/icon-envelope.svg"
                class="img-fluid"
                alt=""
              />
              <p>
                <a href="mailto:info@brandmanhealthplan.com"
                  >info@brandmanhealthplan.com</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { createSEOMeta } from '~/utils/seo'
export default {
  head() {
    const title = 'Physicians - Brandman Health Plan'

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