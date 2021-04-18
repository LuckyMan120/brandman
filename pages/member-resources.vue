<template>
  <div class="wrapper">
      <div class="intro-container">
          <div class="minimal-head member-resource-hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="inner text-center">
                <h1>Member Resource Library</h1>
                <p>Useful tools and information for current and prospective Brandman Health Plan members</p>
              </div>
            </div>
          </div>
        </div>
          </div>
      </div>
    
    <div class="features alt-style">
      <div class="container">
        <div class="row mx-0">
          <div class="col-sm-6 px-0">
            <div class="item">
              <img src="~assets/img/icon-new-1.svg" class="img-fluid" alt="" />
              <h4>Finding Care</h4>
              <a @click="$bus.$emit('go-external', 'https://bhpenroll.advalent.com/provider')" target="_blank" class="bttn bttn-blue">Find a Physician</a>
              <p><b>24 Hour Nurse Advice Line <br>Call <a href="tel:888-969-3909">888-969-3909</a></b></p>
              <p><b>Transportation <br>Call <a href="tel:844-743-7179">844-743-7179</a></b></p>
            </div>
          </div>
          <div class="col-sm-6 px-0">
            <div class="item">
              <img src="~assets/img/icon-questions.svg" class="img-fluid" alt="" />
              <h4>Enrollment Questions?</h4>
              <a href="/contact" target="_blank" class="bttn bttn-blue">Contact Us</a>
              <p><b>Call <a href="tel:888-697-5662">888-697-5662</a> (TTY: 711)<br>Hours: 8:00 am – 8:00 pm, Mon-Fri</b></p>
            </div>				
          </div>
        </div>
      </div>
    </div>
    
    <PlanDocs/>
    
    <Benefits/>
    
    <div class="benefits-wrap alt">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-7 col-md-6">
            <h3 class="text-center mb-1">Part D</h3>
            <h4 class="text-center mb-4">Drug Coverage and Information</h4>
            
            <ul>
              <li><a @click="$bus.$emit('go-external','https://www.express-scripts.com/')" rel="noopener"><i class="fas fa-arrow-right"></i> Express Scripts Inc (ESI)</i></a></li>
              <!-- <li><a target="_blank" rel="noopener" href="#"><i class="fas fa-arrow-right"></i> Medication Therapy Management (MTM) Program</a></li> -->
              <!-- <li><a target="_blank" rel="noopener" href="#"><i class="fas fa-arrow-right"></i> Step Therapy</a></li> -->
              <li><a @click="$bus.$emit('go-external','https://www.cms.gov/medicare/prescription-drug-coverage/prescriptiondrugcovcontra/best_available_evidence_policy')" rel="noopener"><i class="fas fa-arrow-right"></i> Best Available Evidence (BAE)</i></a></li>
              <li><a @click="$bus.$emit('go-external','https://otc.brandmanhealthplan.com/Account/Login.aspx')" rel="noopener"><i class="fas fa-arrow-right"></i> Over The Counter (OTC) Benefits</a></li>
              <a href="/doc/2021 Brandman_OTC Catalog_110320_FINAL 508 v1.pdf" target="_blank"><i class="fas fa-file-pdf ml-3"></i> 2021 OTC Catalog (English)</a><br>
              <a href="/doc/2021 Brandman_OTC Catalog_110320_FINAL 508 SPANISH.pdf" target="_blank"><i class="fas fa-file-pdf ml-3"></i> 2021 OTC Catalog (Spanish)</a><br>
              <!-- <li><a target="_blank" rel="noopener" href="#"><i class="fas fa-arrow-right"></i> Low Income Subsidy Premium</a></li> -->
            </ul>
          </div>
          
          <div class="col-sm-5 col-md-6">
            <img src="~assets/img/benefits.jpg" class="img-full" alt="" />
          </div>
        </div>
      </div>
    </div>
    
    <!-- <div class="form-notices">
      <div class="container">
        <div class="head text-center">
          <img src="~assets/img/icon-form.svg" class="img-fluid" alt="" />
          <h3>Forms & Notices</h2>
          <p><b>Click to view or download lorem ipsum dolor amet.</b></p>
        </div>
        
        <div class="row">
          <div class="col-sm-6 col-lg-5">
            <div class="acc-item">
              <h5><i class="fas fa-external-link-alt"></i> Links</h5>
              <a target="_blank" href="https://www.libertydentalplan.com">Lorem Ipsum Dolor Sit Ipsum Dolor <i class="fas fa-arrow-right"></i> </a></li>
              <a target="_blank" href="https://hearingcaresolutions.com/brandman/">Lorem Sit Amet <i class="fas fa-arrow-right"></i> </a></li>
              <a target="_blank" href="https://www.vsp.com/advantageonly">Lorem Ipsum Dolor Sit <i class="fas fa-arrow-right"></i> </a></li>
              <a target="_blank" href="https://www.carecar.co/schedule">Lorem Ipsum Dolor Sit Amet <i class="fas fa-arrow-right"></i> </a></li>
            </div>
          </div>
          <div class="col-sm-6 col-lg-5 ml-auto">
            <div class="acc-item">
              <h5><i class="fas fa-download"></i> Downloads</h5>
              <a href="#"><i class="fas fa-file-pdf"></i> Lorem Ipsum Dolor Sit Amet</a>
              <a href="#"><i class="fas fa-file-pdf"></i> Lorem Ipsum Dolor</a>
              <a href="#"><i class="fas fa-file-pdf"></i> Ipsum Dolor Sit</a>
            </div>
          </div>
        </div>			
      </div>
    </div> -->
    
      <div class="cta">
          <div class="container">
              <p>Questions about Programs or Enrollment? <NuxtLink to="/contact" class="bttn">Contact Us</NuxtLink></p>
          </div>
      </div>	
  </div>
</template>
<script>
import { createSEOMeta } from '~/utils/seo'
import PlanDocs from '~/components/PlanDocs.vue'
export default {
  head() {
    const title = 'Member Resources - Brandman Health Plan'

    return {
      title,
      meta: createSEOMeta({
        title,
        url: this.$nuxt.$route.path,
      }),
    }
  },
  components: {
    PlanDocs,
  },
}
</script>