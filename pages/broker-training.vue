<template>
  <div class="wrapper">
    
      <div class="container quiz-intro" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000">
      <div class="row">
        <div class="col-lg-5 order-12">
          <img class="img-fluid" src="~assets/img/about-illustration-man.svg" alt="" />				
        </div>
      
        <div class="col-lg-7">
          <div class="inner">
            <h1>Brandman Health Plan Agent Certification</h1>
            <p>You'll find everything you need within this page to learn about BHP plan options and become certified. <b>Before you begin, please have a digital copy (PDF or image file) of your current State of California insurance license and your current AHIP certification on hand.</b> You will need to upload both before you may proceed to the certification quiz.</a>
            
            <ul>
              <li>Review the embedded training presentation as many times as you need.  Already familiar? Simply scroll to the Information Intake Panel to move right on to the quiz.</li>
              <li>Provide all requested information in the Information Intake Panel and upload your insurance license and AHIP certification where indicated.</li>
              <li>Complete the multiple-choice quiz. The system will notify you of incorrect answers and give you the chance to try again.</li>
              <li>Once completed you'll receive a confirmation message. Please print this page for your records.</li>
            </ul>
            
            <p>If you have any questions about certification or for follow-up, please contact <a href="mailto:sales@brandmanhealthplan.com">sales@brandmanhealthplan.com</a>.</p>
          </div>
        </div>
      </div>
      </div>

    <div class="quiz-section">
      <div class="container">
        <div class="head" data-aos="fade-down" data-aos-delay="60" data-aos-duration="1000">
          <div class="quiz-step">1</div>
          <p>Please review our training presentation.  You may download it, print it, or scroll vertically through the pages in the window below.  Review the content as much as you need to prepare for the quiz.</p>
          <p>Already familiar?  Scroll down past the presentation to the Information Intake Panel to unlock the quiz at any time.</p>
        </div>
        
        <div class="iframe-pdf d-table mx-auto">
          <object data='~assets/pdf/BHP-training.pdf?toolbar=1&navpanes=1' type="application/pdf" width="1000" height="560">
            <p>It looks like your browser can't open the file. <a target="_blank" href="~assets/pdf/BHP-training.pdf">Click here to view</a></p>
          </object>			
        </div>
      </div>
    </div>
    
    <div class="quiz-section" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000">
      <div class="container">
        <div class="head">
          <div class="quiz-step">2</div>
          <h3>Information Intake</h3>  				
          <p>Before we share the quiz, we need to get to know more about you. Please fill out the form below, upload your current CA insurance license and AHIP certification (PDF or image file accepted) where indicated and click the submit button to access the quiz.</p>
        </div>
        
        <div class="contact">
          <div class="quiz-form text-center">
            <p>All fields and uploads are required in order to take the quiz.</p>
            <form id="step-two-form" action="https://getform.io/f/1a79aeec-d8c1-4bab-b5d8-710d1363d348" method="POST" enctype="multipart/form-data" accept-charset="UTF-8">
              <input type="text" id="frmname" name="Name" placeholder="First and Last Name*" required>
              <input type="text" id="frmlicense" name="License" placeholder="License Number*" required>
              <input type="text" id="frmagency" name="Agency" placeholder="Agency or FMO Name*" required>
              <input type="text" id="frmproducer" name="Producer Num" placeholder="National Producer Number*" required>
              <input type="text" id="frmemail" name="Email" placeholder="Email Address*" required>
              <input type="text" id="frmphone" name="Phone" placeholder="Phone Number*" required>
              
              <div class="button-wrap">
                <label for="file" class="button-file-upload">
                  <span class="fake-upload-button"><i class="fas fa-upload"></i> Upload Your Current CA Insurance License</span>
                  <span class="js-button-file-upload-text1 button-file-upload-text"></span>
                  <input type="file" id="file" name="License" class="js-button-file-upload-input1" required>
                </label>
              </div>	

              <div class="button-wrap">
                <label for="file2" class="button-file-upload">
                  <span class="fake-upload-button"><i class="fas fa-upload"></i> Upload Your Current AHIP Certification</span>
                  <span class="js-button-file-upload-text2 button-file-upload-text"></span>
                  <input type="file" id="file2" name="AHIP Certification" class="js-button-file-upload-input2" required>
                </label>						  
              </div>		
              <div id="step-two-invalid-feedback" class="invalid-feedback">Please fill out all fields above.</div>
              <a href="#" id="step-two-submit" class="bttn">Submit</a>
              </form>
          </div>
        </div>
      </div>
    </div>	
    
    <div id="quiz-section-three" class="quiz-section" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000">
      <div class="container">
        <div class="head">
          <div class="quiz-step">3</div>
          <h3 class="mb-0">Quiz</h3>  				
        </div>
        
        <div class="quiz-list">
          <div class="quiz-item">
            <p>1. In 2021 Brandman Healthplan will have _____ C-SNP Products.</p>
            
            <ul class="quiz-cbox">
              <li><div><input type="radio" value="1" name="question-1"><span>1</span></div></li>
              <li><div><input type="radio" value="2" name="question-1"><span>2</span></div></li>
              <li><div><input type="radio" value="5" name="question-1"><span>5</span></div></li>
              <li><div><input type="radio" value="0" name="question-1"><span>0</span></div></li>
            </ul>			
          </div>

          <div class="quiz-item">
            <p>2. The quarterly OTC benefit for Aspire and Arise plans in 2021 is:</p>
            
            <ul class="quiz-cbox">
              <li><div><input type="radio" value="$75" name="question-2"><span>$75</span></div></li>
              <li><div><input type="radio" value="$85" name="question-2"><span>$85</span></div></li>
              <li><div><input type="radio" value="$60" name="question-2"><span>$60</span></div></li>
              <li><div><input type="radio" value="$90" name="question-2"><span>$90</span></div></li>
            </ul>			
          </div>

          <div class="quiz-item">
            <p>3. The quarterly benefit can <strong>NOT</strong> be rolled over to the following quarter. If you do not use it, you lose it.</p>
            
            <ul class="quiz-cbox">
              <li><div><input type="radio" value="true" name="question-3"><span>True</span></div></li>
              <li><div><input type="radio" value="false" name="question-3"><span>False</span></div></li>
            </ul>			
          </div>
          
          <div class="quiz-item">
            <p>4. Brandman Healthplan will be offering a Dual eligible product for both Arise and Aspire:</p>
            
            <ul class="quiz-cbox">
              <li><div><input type="radio" value="true" name="question-4"><span>True</span></div></li>
              <li><div><input type="radio" value="false" name="question-4"><span>False</span></div></li>
            </ul>			
          </div>

          <div class="quiz-item">
            <p>5. A Fitness benefit will be provided through:</p>
            
            <ul class="quiz-cbox">
              <li><div><input type="radio" value="Silver Sneakers" name="question-5"><span>Silver Sneakers</span></div></li>
              <li><div><input type="radio" value="LA Fitness" name="question-5"><span>LA Fitness</span></div></li>
              <li><div><input type="radio" value="Silver & Fit" name="question-5"><span>Silver & Fit</span></div></li>
              <li><div><input type="radio" value="YMCA" name="question-5"><span>YMCA</span></div></li>
            </ul>			
          </div>
          
          <div class="quiz-item">
            <p>6. The Maximum Out of Pocket (MOOP) for 2021 is:</p>
            
            <ul class="quiz-cbox">
              <li><div><input type="radio" value="$1199" name="question-6"><span>$1199</span></div></li>
              <li><div><input type="radio" value="$1299" name="question-6"><span>$1299</span></div></li>
              <li><div><input type="radio" value="$1899" name="question-6"><span>$1899</span></div></li>
              <li><div><input type="radio" value="$999" name="question-6"><span>$999</span></div></li>
            </ul>			
          </div>
          
          <div class="quiz-item">
            <p>7.Hearing Aid allowance is up to ____ every calendar year.</p>
            
            <ul class="quiz-cbox">
              <li><div><input type="radio" value="$500" name="question-7"><span>$500</span></div></li>
              <li><div><input type="radio" value="$1000" name="question-7"><span>$1000</span></div></li>
              <li><div><input type="radio" value="$975" name="question-7"><span>$975</span></div></li>
              <li><div><input type="radio" value="$750" name="question-7"><span>$750</span></div></li>
            </ul>			
          </div>
          
          <div class="quiz-item">
            <p>8.How many one-Way trips are covered under transportation for non-emergency trips at no cost?</p>
            
            <ul class="quiz-cbox">
              <li><div><input type="radio" value="12" name="question-8"><span>12</span></div></li>
              <li><div><input type="radio" value="20" name="question-8"><span>20</span></div></li>
              <li><div><input type="radio" value="24" name="question-8"><span>24</span></div></li>
              <li><div><input type="radio" value="36" name="question-8"><span>36</span></div></li>
            </ul>			
          </div>
          
          <div class="quiz-item">
            <p>9.The cost for the one-time Home Safety Assessment is:</p>
            
            <ul class="quiz-cbox">
              <li><div><input type="radio" value="$0" name="question-9"><span>$0</span></div></li>
              <li><div><input type="radio" value="$10" name="question-9"><span>$10</span></div></li>
              <li><div><input type="radio" value="$15" name="question-9"><span>$15</span></div></li>
              <li><div><input type="radio" value="None of the Above" name="question-9"><span>None of the Above</span></div></li>
            </ul>			
          </div>
          
          <div class="quiz-item">
            <p>10.The co-pay for Emergency Care is:</p>
            
            <ul class="quiz-cbox">
              <li><div><input type="radio" value="$250" name="question-10"><span>$250</span></div></li>
              <li><div><input type="radio" value="$100" name="question-10"><span>$100</span></div></li>
              <li><div><input type="radio" value="$150" name="question-10"><span>$150</span></div></li>
              <li><div><input type="radio" value="$125" name="question-10"><span>$125</span></div></li>
            </ul>			
          </div>

          <div id="final-submit-wrap">
            <button type="submit" id="final-submit" class="bttn">Submit</button>
          </div>
          
        </div>
      </div>
    </div>
  <!-- </form> -->

  </div>
</template>
<script>
import { createSEOMeta } from '~/utils/seo'
export default {
  head() {
    const title = 'Broker Training - Brandman Health Plan'

    return {
      title,
      meta: createSEOMeta({
        title,
        url: this.$nuxt.$route.path,
      }),
    }
  },
  methods: {
    checkAuth: function () {
      let auth = sessionStorage.getItem('crtAuth')
      if (!auth) {
        window.location.replace('/broker-passcode')
      }
    },
  },
  beforeMount() {
    this.checkAuth()
  },
}
</script>