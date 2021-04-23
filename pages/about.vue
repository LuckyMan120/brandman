<template>
  <div class="wrapper">
    <div class="container intro-container">
      <div
        class="about-intro"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1000"
      >
        <div class="row">
          <div class="col-sm-10 col-lg-6">
            <div class="inner">
              <h1>About Brandman <br />Health Plan</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="info-wrap alt"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="info left">
        <div class="container">
          <div class="row">
            <div class="col-md-5 ml-auto order-md-12">
              <img
                class="img-fluid"
                src="~assets/img/about-illustration-woman.svg"
              />
            </div>
            <div class="col-md-6">
              <div class="inner">
                <h3>Brandman History</h3>
                <p>
                  Our story began over 108 years ago when the founders of our
                  parent company set out to create a place for seniors to age
                  with care and dignity. Moved by the “forlorn old people
                  without family, friends, or shelter standing within our gates,
                  pleading for assistance” they laid the foundation for what
                  would become one of the longest-serving and most respected
                  senior care organizations in Los Angeles County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="info right"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1000"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5">
              <img
                class="img-fluid"
                src="~assets/img/about-illustration-man.svg"
              />
            </div>
            <div class="col-md-6">
              <div class="inner">
                <p>
                  Today, the organization encompasses retirement villages,
                  hospitals, skilled nursing facilities, a geriatric research
                  center, and more. Every facility models the standards of
                  innovative, evidence-based, patient-sensitive care learned
                  from over a hundred years of senior care. In particular, their
                  advancements in treatment have brought hope and a better
                  quality of life to people living with chronic conditions like
                  dementia, diabetes, CHF, and hypertension.
                </p>

                <p>
                  In 2020 we formed Brandman Health Plan to bring this same
                  expertise and proven standard of care to a wider audience
                  throughout Los Angeles County. Though much has changed in the
                  past century, Los Angeles is still home to many underserved
                  seniors. Brandman is here to help these seniors achieve and
                  maintain better health and improve their quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="info-alt"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="bg"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 order-md-12">
            <img src="~assets/img/about-who.jpg" class="img-full" alt="" />
          </div>

          <div class="col-md-6">
            <div class="inner">
              <h3>Who We Serve</h3>
              <p>
                Brandman Health Plan provides benefit plans and targeted care
                programs to Medicare-eligible individuals over 65 with one or
                more of these conditions:
              </p>

              <ul>
                <li>Diabetes</li>
                <li>Chronic Heart Failure</li>
                <li>Cardiovascular Disorders</li>
                <li>Dementia</li>
              </ul>

              <p>
                Brandman operates in Los Angeles County to make accessible,
                life-improving healthcare available to seniors from all walks of
                life. We work to bring comfort, improved health, dignity, and
                greater wellbeing to our members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section
      class="info-wrap-alt"
      style="background-image: url('/img/logo-background-1.svg')"
    >
      <div
        class="info left"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1000"
      >
        <div class="container">
          <div class="row">
            <div class="col col-md-9 ml-auto">
              <h3>Medicare with More</h3>

              <p>
                Brandman offers our members many benefits in addition to those
                provided by Original Medicare—without extra premiums or
                out-of-pocket costs. Plus, our coordinated care programs help
                guide patients with chronic conditions to the right care in the
                right order.
              </p>

              <p>
                By bringing all of this together, we help our members get the
                most from their health coverage while enjoying a better care
                experience and improved outcomes and quality of life.
              </p>

              <div class="row">
                <div class="col-md-6">
                  <ul>
                    <li>Chiropractic Services</li>
                    <li>Gym & Fitness Center Benefit</li>
                    <li>Routine Transportation</li>
                    <li>Acupuncture</li>
                    <li>Meal Benefit</li>
                    <li>Dental - Preventive & Comprehensive</li>
                    <li>Hearing Exams/Hearing Aids</li>
                  </ul>
                </div>

                <div class="col-md-6">
                  <ul>
                    <li>Health Education and Wellness Classes</li>
                    <li>OTC Drug Program</li>
                    <li>Nurse Advice Line</li>
                    <li>Telehealth</li>
                    <li>In-home Safety Assessment</li>
                    <li>Vision</li>
                  </ul>
                </div>
              </div>

              <a href="#contact" class="bttn bttn-blue">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="programs alt"
      id="program-about"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="inner-left">
              <h3>Brandman Plans</h3>
              <p>
                Living with a chronic condition can be one of the most difficult
                challenges patients and their caregivers can face. Not only are
                there obvious health complications, but these ailments can also
                reduce mobility, function, and life satisfaction.
              </p>

              <p>
                Chronic illness also takes an enormous toll on time and
                energy—often robbing patients and their loved ones of precious,
                happy moments together. Brandman offers help and hope to these
                individuals.
              </p>

              <p>
                Through years of serving seniors with chronic conditions at our
                parent company, we've developed time-tested, evidence-based
                programs to improve health outcomes and provide a new lease on
                life.
              </p>

              <div v-show="planAbout">
                <p>
                  Each program includes dedicated care managers who help our
                  members get the right care at the right time. Care managers
                  remove the uncertainty and frustration of navigating a complex
                  health care system. Their efforts improve outcomes and reduce
                  the health management burden for patients and caregivers. This
                  means less time spent arranging care, and more time spent with
                  loved ones and on activities they enjoy.
                </p>

                <a href="#contact" class="link"
                  >Learn More <i class="fas fa-angle-right"></i
                ></a>
              </div>

              <a href="#" @click.prevent="planAbout = true"
                >Read More <i class="fas fa-angle-down"></i
              ></a>
            </div>
          </div>

          <div class="col-md-6">
            <div class="inner">
              <div class="item item-1">
                <img src="~assets/img/icon-arise.svg" class="img-full" alt="" />
                <h4>Brandman Arise</h4>
                <p>
                  Arise encompasses care programs focused on helping those with
                  diabetes, chronic heart failure or cardiovascular disorders.
                </p>
                <!-- <a href="#" class="bttn bttn-green">Learn More</a> -->
              </div>

              <div class="item item-2">
                <img
                  src="~assets/img/icon-aspire.svg"
                  class="img-full"
                  alt=""
                />
                <h4>Brandman Aspire</h4>
                <p>
                  Aspire is our plan formulated specifically to help those who
                  suffer from dementia or other cognitive disorders.
                </p>
                <!-- <a href="#" class="bttn bttn-blue">Learn More</a> -->
              </div>
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
          Questions about Programs or Enrollment?
          <a href="/contact" class="bttn">Contact Us</a>
        </p>
      </div>
    </div>

    <!-- <div class="team text-center" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000">
          <div class="container">
              <h3>Meet Our Team</h3>
              <div class="row">
                  <div class="col-sm-6 col-md-3">
                      <div class="item">
                          <img src="~assets/img/team.svg" class="img-fluid" alt="" />
                          <h4>Stephen Martinez <span>President & CEO</span></h4>
                      </div>
                  </div>

                  <div class="col-sm-6 col-md-3">
                      <div class="item">
                          <img src="~assets/img/team.svg" class="img-fluid" alt="" />
                          <h4>Arnold Possick <span>Chief Strategy Officer</span></h4>
                      </div>
                  </div>

                  <div class="col-sm-6 col-md-3">
                      <div class="item">
                          <img src="~assets/img/team.svg" class="img-fluid" alt="" />
                          <h4>Audrey Godelia <span>Vice President of Operations</span></h4>
                      </div>
                  </div>


                  <div class="col-sm-6 col-md-3">
                      <div class="item">
                          <img src="~assets/img/team.svg" class="img-fluid" alt="" />
                          <h4>Maria Carreon <span>LVN Health Plan Liaison</span></h4>					
                      </div>
                  </div>
              </div>
          </div>
      </div> -->

    <div
      class="contact text-center"
      id="contact"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1000"
    >
      <div class="container">
        <h3>Experience Our Difference</h3>
        <p>
          <b
            >Interested in joining the Brandman family?<br />Call
            <a href="tel:888-697-5662">888-697-5662 TTY/TDD 711</a></b
          >
          <br />Or use the form below to start the conversation.
        </p>

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
  data() {
    return {
      planAbout: false,
    }
  },
  head() {
    const title = 'About - Brandman Health Plan'

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