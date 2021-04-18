<template>
  <div class="plans-notices">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="head text-center">
            <h3>Plan Forms & Notices</h3>
            <p>
              <b
                >Click through the sections below to find helpful plan
                information.</b
              >
            </p>
          </div>
        </div>
      </div>

      <div id="accordion">
        <div class="faq-card">
          <div class="faq-header">
            <a v-b-toggle.collapseOne aria-expanded="true" class="">
              <img
                src="~assets/img/icon-aspire-white.svg"
                class="img-fluid"
                alt=""
              />
              Arise
              <span><i class="fas fa-plus-circle"></i></span>
            </a>
          </div>
          <b-collapse
            id="collapseOne"
            visible
            accordion="plans-accordion"
            style=""
          >
            <div class="faq-body">
              <div class="row">
                <div class="col-sm-12 text-muted mb-2">
                  <h4>English</h4>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-2.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      2021 Formulary
                      <a
                        target="_blank"
                        href="/doc/Brandman 2021 Formulary October 2020 v4.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-3.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Arise Summary of Benefits
                      <a
                        target="_blank"
                        href="/doc/Arise/Brandman Arise 001 SB 2020-10-09.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-4.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Arise Enrollment Application
                      <a
                        target="_blank"
                        href="/doc/Arise/Arise Enrollment Form.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-5.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Arise 2021 Evidence of Coverage
                      <a
                        target="_blank"
                        href="/doc/Arise/H7594-20BHP_Arise EOC_C(508).pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 text-muted mb-2">
                  <h4>Spanish</h4>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-4.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Arise Enrollment Form (Spanish)
                      <a
                        target="_blank"
                        href="/doc/Arise/Arise Enrollment Form_Sp.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-3.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Arise Summary of Benefits (Spanish)
                      <a
                        target="_blank"
                        href="/doc/Arise/Brandman Arise 001 SB_Sp.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="faq-card">
          <div class="faq-header">
            <a v-b-toggle.collapseTwo>
              <img
                src="~assets/img/icon-aspire-white.svg"
                class="img-fluid"
                alt=""
              />
              Arise-D
              <span><i class="fas fa-plus-circle"></i></span>
            </a>
          </div>
          <b-collapse id="collapseTwo" accordion="plans-accordion">
            <div class="faq-body">
              <div class="row">
                <div class="col-sm-12 text-muted mb-2">
                  <h4>English</h4>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-2.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      2021 Formulary
                      <a
                        target="_blank"
                        href="/doc/Brandman 2021 Formulary October 2020 v4.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-3.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Arise-D Summary of Benefits
                      <a
                        target="_blank"
                        href="/doc/Arise-D/Brandman AriseD 002 SB 2020-10-09.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-4.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Arise-D Enrollment Application
                      <a
                        target="_blank"
                        href="/doc/Arise-D/Arise-D Enrollment Form.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-5.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Arise-D 2021 Evidence of Coverage
                      <a
                        target="_blank"
                        href="/doc/Arise-D/H7594-20BHP_AriseD EOC_C(508).pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 text-muted mb-2">
                  <h4>Spanish</h4>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-4.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Arise-D Enrollment Form (Spanish)
                      <a
                        target="_blank"
                        href="/doc/Arise-D/Arise-D Enrollment Form_Sp.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-3.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Arise-D Summary of Benefits (Spanish)
                      <a
                        target="_blank"
                        href="/doc/Arise-D/Brandman AriseD 002 SB_Sp.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="faq-card">
          <div class="faq-header">
            <a v-b-toggle.collapseThree>
              <img
                src="~assets/img/icon-aspire-d-white.svg"
                class="img-fluid"
                alt=""
              />
              Aspire
              <span><i class="fas fa-plus-circle"></i></span>
            </a>
          </div>
          <b-collapse id="collapseThree" accordion="plans-accordion">
            <div class="faq-body">
              <div class="row">
                <div class="col-sm-12 text-muted mb-2">
                  <h4>English</h4>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-2.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      2021 Formulary
                      <a
                        target="_blank"
                        href="/doc/Brandman 2021 Formulary October 2020 v4.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-3.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Aspire Summary of Benefits
                      <a
                        target="_blank"
                        href="/doc/Aspire/Brandman Aspire 003 SB 2020-10-09.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-4.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Aspire Enrollment Application
                      <a
                        target="_blank"
                        href="/doc/Aspire/Aspire Enrollment Form.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-5.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Aspire 2021 Evidence of Coverage
                      <a
                        target="_blank"
                        href="/doc/Aspire/H7594-20BHP_Aspire EOC_C(508).pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 text-muted mb-2">
                  <h4>Spanish</h4>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-4.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Aspire Enrollment Form (Spanish)
                      <a
                        target="_blank"
                        href="/doc/Aspire/Aspire Enrollment Form_Sp.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-3.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Aspire Summary of Benefits (Spanish)
                      <a
                        target="_blank"
                        href="/doc/Aspire/Brandman Aspire 003 SB_Sp.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="faq-card">
          <div class="faq-header">
            <a v-b-toggle.collapseFour>
              <img
                src="~assets/img/icon-aspire-d-white.svg"
                class="img-fluid"
                alt=""
              />
              Aspire-D
              <span><i class="fas fa-plus-circle"></i></span>
            </a>
          </div>
          <b-collapse id="collapseFour" accordion="plans-accordion">
            <div class="faq-body">
              <div class="row">
                <div class="col-sm-12 text-muted mb-2">
                  <h4>English</h4>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-2.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      2021 Formulary
                      <a
                        target="_blank"
                        href="/doc/Brandman 2021 Formulary October 2020 v4.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-3.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Aspire-D Summary of Benefits
                      <a
                        target="_blank"
                        href="/doc/Aspire-D/Brandman AspireD 004 SB 2020-10-09.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-4.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Aspire-D Enrollment Application
                      <a
                        target="_blank"
                        href="/doc/Aspire-D/Aspire-D Enrollment Form.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-5.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Aspire-D 2021 Evidence of Coverage
                      <a
                        target="_blank"
                        href="/doc/Aspire-D/H7594-20BHP_AspireD EOC_C(508).pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 text-muted mb-2">
                  <h4>Spanish</h4>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-4.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Aspire-D Enrollment Form (Spanish)
                      <a
                        target="_blank"
                        href="/doc/Aspire-D/Aspire-D Enrollment Form_Sp.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="plan_item">
                    <div class="ico">
                      <img
                        src="~assets/img/plan-icon-3.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <p>
                      Aspire-D Summary of Benefits (Spanish)
                      <a
                        target="_blank"
                        href="/doc/Aspire-D/Brandman AspireD 004 SB_Sp.pdf"
                        ><i class="fas fa-file-download"></i> Download</a
                      >
                    </p>
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