<template>
  <div class="plans-notices additional-denefits">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="mb-1 head text-center">
            <h3>Additional Benefits</h3>
          </div>
        </div>
      </div>

      <div id="accordion-benefits">
        <div class="faq-card">
          <div class="faq-header">
            <a v-b-toggle.collapsebFour>
              CareCar
              <span><i class="fas fa-plus-circle"></i></span>
            </a>
          </div>
          <b-collapse id="collapsebFour" accordion="accordion-benefits">
            <div class="faq-body">
              <a
                @click="
                  $bus.$emit('go-external', 'http://www.carecar.co/schedule')
                "
                rel="noopener"
                >Visit Website <i class="fas fa-arrow-right"></i
              ></a>
              <div class="row">
                <div class="col-sm-6 col-lg-5">
                  <div class="acc-item">
                    <h5>English</h5>
                    <a href="/doc/CareCar English Flier.pdf" target="_blank"
                      ><i class="fas fa-file-pdf"></i> CareCar English Flier</a
                    >
                  </div>
                </div>
                <div class="col-sm-6 col-lg-5 ml-auto">
                  <div class="acc-item">
                    <h5>Spanish</h5>
                    <a href="/doc/CareCar Spanish Flier.pdf" target="_blank"
                      ><i class="fas fa-file-pdf"></i> CareCar Spanish Flier</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="faq-card">
          <div class="faq-header">
            <a v-b-toggle.collapsebTwo>
              Hearing Care Solutions (HCS)
              <span><i class="fas fa-plus-circle"></i></span>
            </a>
          </div>
          <b-collapse id="collapsebTwo" accordion="accordion-benefits">
            <div class="faq-body">
              <a
                @click="
                  $bus.$emit(
                    'go-external',
                    'https://hearingcaresolutions.com/brandman/'
                  )
                "
                rel="noopener"
                >Visit Website <i class="fas fa-arrow-right"></i
              ></a>

              <div class="row">
                <div class="col-sm-6 col-lg-5">
                  <div class="acc-item">
                    <h5>English</h5>
                    <a href="/doc/HCS Benefits Flier.pdf" target="_blank"
                      ><i class="fas fa-file-pdf"></i> HCS Benefits Flier</a
                    >
                  </div>
                </div>
                <!-- <div class="col-sm-6 col-lg-5 ml-auto">
                    <div class="acc-item">
                      <h5>Spanish</h5>
                      <a href="#"><i class="fas fa-file-pdf"></i> HCS Benefits Flier</a>
                    </div>
                  </div> -->
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="faq-card">
          <div class="faq-header">
            <a v-b-toggle.collapsebOne>
              Liberty Dental
              <span><i class="fas fa-plus-circle"></i></span>
            </a>
          </div>
          <b-collapse id="collapsebOne" accordion="accordion-benefits">
            <div class="faq-body">
              <a
                @click="
                  $bus.$emit('go-external', 'http://www.libertydentalplan.com/')
                "
                rel="noopener"
                >Visit Website <i class="fas fa-arrow-right"></i
              ></a>

              <div class="row">
                <div class="col-sm-6 col-lg-5">
                  <div class="acc-item">
                    <h5>English</h5>
                    <a
                      href="/doc/LibertyDental Benefits-D Flier.pdf"
                      target="_blank"
                      ><i class="fas fa-file-pdf"></i> Liberty Dental Benefits -
                      Arise-D & Aspire-D Flier</a
                    >
                    <a
                      href="/doc/LibertyDental Benefits-Flier.pdf"
                      target="_blank"
                      ><i class="fas fa-file-pdf"></i> Liberty Dental Benefits -
                      Arise & Aspire Flier</a
                    >
                  </div>
                </div>
                <!-- <div class="col-sm-6 col-lg-5 ml-auto">
                    <div class="acc-item">
                      <h5>Spanish</h5>
                      <a href="#"><i class="fas fa-file-pdf"></i> Liberty Dental Benefits-D Flier</a>
                      <a href="#"><i class="fas fa-file-pdf"></i> Liberty Dental Benefits Flier</a>
                    </div>
                  </div> -->
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="faq-card">
          <div class="faq-header">
            <a v-b-toggle.collapsebSix>
              Silver&Fit
              <span><i class="fas fa-plus-circle"></i></span>
            </a>
          </div>
          <b-collapse id="collapsebSix" accordion="accordion-benefits">
            <div class="faq-body">
              <a
                @click="$bus.$emit('go-external', 'http://silverandfit.com/')"
                rel="noopener"
                >Visit Website <i class="fas fa-arrow-right"></i
              ></a>

              <div class="row">
                <div class="col-sm-6 col-lg-5">
                  <div class="acc-item">
                    <h5>English</h5>
                    <a
                      href="/doc/Silver_Fit Connected and Rewards Flier.pdf"
                      target="_blank"
                      ><i class="fas fa-file-pdf"></i> Silver&Fit Connected and
                      Rewards Flier</a
                    >
                    <a
                      href="/doc/Silver_Fit Healthy Aging Coaching Flier.pdf"
                      target="_blank"
                      ><i class="fas fa-file-pdf"></i> Silver&Fit Healthy Aging
                      Coaching Flier</a
                    >
                    <a
                      href="/doc/Silver_Fit Prospective Member Flier.pdf"
                      target="_blank"
                      ><i class="fas fa-file-pdf"></i> Silver&Fit Prospective
                      Member Flier</a
                    >
                    <a href="/doc/Silver_Fit Q_A_MFC.pdf" target="_blank"
                      ><i class="fas fa-file-pdf"></i> Silver&Fit Q&amp;A</a
                    >
                  </div>
                </div>
                <div class="col-sm-6 col-lg-5 ml-auto">
                  <div class="acc-item">
                    <h5>Spanish</h5>
                    <a
                      href="/doc/M950-803G-BRND-SP S&F Connected and Rewards Flier.pdf"
                      ><i class="fas fa-file-pdf"></i> Silver&Fit Connected and
                      Rewards Flier</a
                    >
                    <a
                      href="/doc/M950-1104A-BRND-SP Healthy Aging Coaching Flier.pdf"
                      ><i class="fas fa-file-pdf"></i> Silver&Fit Healthy Aging
                      Coaching Flier</a
                    >
                    <a
                      href="/doc/S950-104I-BRND-SP Prospective Member Flier.pdf"
                      ><i class="fas fa-file-pdf"></i> Silver&Fit Prospective
                      Member Flier</a
                    >
                    <!-- <a href="#"><i class="fas fa-file-pdf"></i> Silver&Fit Q&amp;A</a> -->
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="faq-card">
          <div class="faq-header">
            <a v-b-toggle.collapsebThree>
              Vision Service Plan (VSP)
              <span><i class="fas fa-plus-circle"></i></span>
            </a>
          </div>
          <b-collapse id="collapsebThree" accordion="accordion-benefits">
            <div class="faq-body">
              <a
                @click="
                  $bus.$emit('go-external', 'https://www.vsp.com/advantageonly')
                "
                rel="noopener"
                >Visit Website <i class="fas fa-arrow-right"></i
              ></a>

              <div class="row">
                <div class="col-sm-6 col-lg-5">
                  <div class="acc-item">
                    <h5>English</h5>
                    <a href="/doc/VSP Benefits Flier.pdf"
                      ><i class="fas fa-file-pdf"></i> VSP Benefits Flier</a
                    >
                  </div>
                </div>
                <div class="col-sm-6 col-lg-5 ml-auto">
                  <div class="acc-item">
                    <h5>Spanish</h5>
                    <a href="/doc/VSP Spanish Benefits Flier.pdf"
                      ><i class="fas fa-file-pdf"></i> VSP Benefits Flier</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.faq-header:hover {
  cursor: pointer;
}
</style>
