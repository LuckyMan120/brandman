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
          <object data='/pdf/BHP-training.pdf?toolbar=1&navpanes=1' type="application/pdf" width="1000" height="560">
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
              <input type="text" v-model="frmname" name="Name" placeholder="First and Last Name*" required>
              <input type="text" v-model="frmlicense" name="License" placeholder="License Number*" required>
              <input type="text" v-model="frmagency" name="Agency" placeholder="Agency or FMO Name*" required>
              <input type="text" v-model="frmproducer" name="Producer Num" placeholder="National Producer Number*" required>
              <input type="text" v-model="frmemail" name="Email" placeholder="Email Address*" required>
              <input type="text" v-model="frmphone" name="Phone" placeholder="Phone Number*" required>
              
              <div class="button-wrap">
                <label for="file" class="button-file-upload">
                  <span class="fake-upload-button"><i class="fas fa-upload"></i> Upload Your Current CA Insurance License</span>
                  <span class="js-button-file-upload-text1 button-file-upload-text">{{firstUploadName}}</span>
                  <input type="file" id="file" @change="onFileChangeOne" name="License" class="js-button-file-upload-input1" required>
                </label>
              </div>	

              <div class="button-wrap">
                <label for="file2" class="button-file-upload">
                  <span class="fake-upload-button"><i class="fas fa-upload"></i> Upload Your Current AHIP Certification</span>
                  <span class="js-button-file-upload-text2 button-file-upload-text">{{secondUploadName}}</span>
                  <input type="file" id="file2" @change="onFileChangeTwo" name="AHIP Certification" class="js-button-file-upload-input2" required>
                </label>						  
              </div>		
              <div id="step-two-invalid-feedback" class="error" v-if="showValidFlag">Please fill out all fields above.</div>
              <a @click="onsubmitStepTwo" class="bttn">Submit</a>
              </form>
          </div>
        </div>
      </div>
    </div>	
    
    <!-- <div id="quiz-section-three" class="quiz-section" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000"> -->
    <div ref="threeStep">
      <div v-show="threeStepFlag" class="quiz-section" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000">
        <div class="container">
          <div class="head">
            <div class="quiz-step">3</div>
            <h3 class="mb-0">Quiz</h3>  				
          </div>
          
          <div class="quiz-list">
            <div class="quiz-item">
              <p>1. In 2021 Brandman Healthplan will have _____ C-SNP Products.</p>
              
              <ul class="quiz-cbox">
                <li><div><input @click="chooseAnswer(1, $event.target)" type="radio" value="1" name="question-1"><span>1</span></div></li>
                <li><div><input @click="chooseAnswer(1, $event.target)" type="radio" value="2" name="question-1"><span>2</span></div></li>
                <li><div><input @click="chooseAnswer(1, $event.target)" type="radio" value="5" name="question-1"><span>5</span></div></li>
                <li><div><input @click="chooseAnswer(1, $event.target)" type="radio" value="0" name="question-1"><span>0</span></div></li>
                <li v-if="answerTrueFlags[0]"><em class="correct answer">Correct! Move on to the next question.</em></li>
                <li v-if="answerFalseFlags[0]"><em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em></li>
              </ul>			
            </div>

            <div class="quiz-item">
              <p>2. The quarterly OTC benefit for Aspire and Arise plans in 2021 is:</p>
              
              <ul class="quiz-cbox">
                <li><div><input @click="chooseAnswer(2, $event.target)" type="radio" value="$75" name="question-2"><span>$75</span></div></li>
                <li><div><input @click="chooseAnswer(2, $event.target)" type="radio" value="$85" name="question-2"><span>$85</span></div></li>
                <li><div><input @click="chooseAnswer(2, $event.target)" type="radio" value="$60" name="question-2"><span>$60</span></div></li>
                <li><div><input @click="chooseAnswer(2, $event.target)" type="radio" value="$90" name="question-2"><span>$90</span></div></li>
                <li v-if="answerTrueFlags[1]"><em class="correct answer">Correct! Move on to the next question.</em></li>
                <li v-if="answerFalseFlags[1]"><em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em></li>
              </ul>			
            </div>

            <div class="quiz-item">
              <p>3. The quarterly benefit can <strong>NOT</strong> be rolled over to the following quarter. If you do not use it, you lose it.</p>
              
              <ul class="quiz-cbox">
                <li><div><input @click="chooseAnswer(3, $event.target)" type="radio" value="true" name="question-3"><span>True</span></div></li>
                <li><div><input @click="chooseAnswer(3, $event.target)" type="radio" value="false" name="question-3"><span>False</span></div></li>
                <li v-if="answerTrueFlags[2]"><em class="correct answer">Correct! Move on to the next question.</em></li>
                <li v-if="answerFalseFlags[2]"><em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em></li>
              </ul>			
            </div>
            
            <div class="quiz-item">
              <p>4. Brandman Healthplan will be offering a Dual eligible product for both Arise and Aspire:</p>
              
              <ul class="quiz-cbox">
                <li><div><input @click="chooseAnswer(4, $event.target)" type="radio" value="true" name="question-4"><span>True</span></div></li>
                <li><div><input @click="chooseAnswer(4, $event.target)" type="radio" value="false" name="question-4"><span>False</span></div></li>
                <li v-if="answerTrueFlags[3]"><em class="correct answer">Correct! Move on to the next question.</em></li>
                <li v-if="answerFalseFlags[3]"><em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em></li>
              </ul>			
            </div>

            <div class="quiz-item">
              <p>5. A Fitness benefit will be provided through:</p>
              
              <ul class="quiz-cbox">
                <li><div><input @click="chooseAnswer(5, $event.target)" type="radio" value="Silver Sneakers" name="question-5"><span>Silver Sneakers</span></div></li>
                <li><div><input @click="chooseAnswer(5, $event.target)" type="radio" value="LA Fitness" name="question-5"><span>LA Fitness</span></div></li>
                <li><div><input @click="chooseAnswer(5, $event.target)" type="radio" value="Silver & Fit" name="question-5"><span>Silver & Fit</span></div></li>
                <li><div><input @click="chooseAnswer(5, $event.target)" type="radio" value="YMCA" name="question-5"><span>YMCA</span></div></li>
                <li v-if="answerTrueFlags[4]"><em class="correct answer">Correct! Move on to the next question.</em></li>
                <li v-if="answerFalseFlags[4]"><em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em></li>
              </ul>			
            </div>
            
            <div class="quiz-item">
              <p>6. The Maximum Out of Pocket (MOOP) for 2021 is:</p>
              
              <ul class="quiz-cbox">
                <li><div><input @click="chooseAnswer(6, $event.target)" type="radio" value="$1199" name="question-6"><span>$1199</span></div></li>
                <li><div><input @click="chooseAnswer(6, $event.target)" type="radio" value="$1299" name="question-6"><span>$1299</span></div></li>
                <li><div><input @click="chooseAnswer(6, $event.target)" type="radio" value="$1899" name="question-6"><span>$1899</span></div></li>
                <li><div><input @click="chooseAnswer(6, $event.target)" type="radio" value="$999" name="question-6"><span>$999</span></div></li>
                <li v-if="answerTrueFlags[5]"><em class="correct answer">Correct! Move on to the next question.</em></li>
                <li v-if="answerFalseFlags[5]"><em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em></li>
              </ul>			
            </div>
            
            <div class="quiz-item">
              <p>7.Hearing Aid allowance is up to ____ every calendar year.</p>
              
              <ul class="quiz-cbox">
                <li><div><input @click="chooseAnswer(7, $event.target)" type="radio" value="$500" name="question-7"><span>$500</span></div></li>
                <li><div><input @click="chooseAnswer(7, $event.target)" type="radio" value="$1000" name="question-7"><span>$1000</span></div></li>
                <li><div><input @click="chooseAnswer(7, $event.target)" type="radio" value="$975" name="question-7"><span>$975</span></div></li>
                <li><div><input @click="chooseAnswer(7, $event.target)" type="radio" value="$750" name="question-7"><span>$750</span></div></li>
                <li v-if="answerTrueFlags[6]"><em class="correct answer">Correct! Move on to the next question.</em></li>
                <li v-if="answerFalseFlags[6]"><em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em></li>
              </ul>			
            </div>
            
            <div class="quiz-item">
              <p>8.How many one-Way trips are covered under transportation for non-emergency trips at no cost?</p>
              
              <ul class="quiz-cbox">
                <li><div><input @click="chooseAnswer(8, $event.target)" type="radio" value="12" name="question-8"><span>12</span></div></li>
                <li><div><input @click="chooseAnswer(8, $event.target)" type="radio" value="20" name="question-8"><span>20</span></div></li>
                <li><div><input @click="chooseAnswer(8, $event.target)" type="radio" value="24" name="question-8"><span>24</span></div></li>
                <li><div><input @click="chooseAnswer(8, $event.target)" type="radio" value="36" name="question-8"><span>36</span></div></li>
                <li v-if="answerTrueFlags[7]"><em class="correct answer">Correct! Move on to the next question.</em></li>
                <li v-if="answerFalseFlags[7]"><em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em></li>
              </ul>			
            </div>
            
            <div class="quiz-item">
              <p>9.The cost for the one-time Home Safety Assessment is:</p>
              
              <ul class="quiz-cbox">
                <li><div><input @click="chooseAnswer(9, $event.target)" type="radio" value="$0" name="question-9"><span>$0</span></div></li>
                <li><div><input @click="chooseAnswer(9, $event.target)" type="radio" value="$10" name="question-9"><span>$10</span></div></li>
                <li><div><input @click="chooseAnswer(9, $event.target)" type="radio" value="$15" name="question-9"><span>$15</span></div></li>
                <li><div><input @click="chooseAnswer(9, $event.target)" type="radio" value="None of the Above" name="question-9"><span>None of the Above</span></div></li>
                <li v-if="answerTrueFlags[8]"><em class="correct answer">Correct! Move on to the next question.</em></li>
                <li v-if="answerFalseFlags[8]"><em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em></li>
              </ul>			
            </div>
            
            <div class="quiz-item">
              <p>10.The co-pay for Emergency Care is:</p>
              
              <ul class="quiz-cbox">
                <li><div><input @click="chooseAnswer(10, $event.target)" type="radio" value="$250" name="question-10"><span>$250</span></div></li>
                <li><div><input @click="chooseAnswer(10, $event.target)" type="radio" value="$100" name="question-10"><span>$100</span></div></li>
                <li><div><input @click="chooseAnswer(10, $event.target)" type="radio" value="$150" name="question-10"><span>$150</span></div></li>
                <li><div><input @click="chooseAnswer(10, $event.target)" type="radio" value="$125" name="question-10"><span>$125</span></div></li>
                <li v-if="answerTrueFlags[9]"><em class="correct answer">Correct! Move on to the next question.</em></li>
                <li v-if="answerFalseFlags[9]"><em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em></li>
              </ul>			
            </div>

            <div v-if="submitFlag">
              <button id="final-submit" @click="onSubmit" class="bttn">Submit</button>
            </div>
            
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
  data() {
    return {
      showValidFlag: false,
      threeStepFlag: false,
      frmname: '',
      frmlicense: '',
      frmagency: '',
      frmproducer: '',
      frmphone: '',
      frmemail: '',
      file1: null,
      file2: null,
      answers: {
        'question-1': '2',
        'question-2': '$60',
        'question-3': 'true',
        'question-4': 'true',
        'question-5': 'Silver & Fit',
        'question-6': '$999',
        'question-7': '$1000',
        'question-8': '24',
        'question-9': '$0',
        'question-10': '$125',
      },
      answered: {
        'marked-1': 0,
        'marked-2': 0,
        'marked-3': 0,
        'marked-4': 0,
        'marked-5': 0,
        'marked-6': 0,
        'marked-7': 0,
        'marked-8': 0,
        'marked-9': 0,
        'marked-10': 0,
      },
      submitFlag: false,
      answerTrueFlags: [false, false, false, false, false, false, false, false, false, false],
      answerFalseFlags: [false, false, false, false, false, false, false, false, false, false],
      firstUploadName: '',
      secondUploadName: '',
    }
  },
  async mounted() {
    console.log(this.$refs.threeStep)
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    checkAuth: function () {
      let auth = sessionStorage.getItem('crtAuth')
      if (!auth) {
        window.location.replace('/broker-passcode')
      }
    },
    onsubmitStepTwo: function () {
      // validate
      if (this.frmname.length === 0 ||
      this.frmlicense.length === 0 ||
      this.frmagency.length === 0 ||
      this.frmproducer.length === 0 ||
      this.frmphone.length === 0 ||
      this.frmemail.length === 0 ||
      this.file1 === null ||
      this.file2 === null) {
        this.showValidFlag = true
        return;
      }

      const el = this.$refs.threeStep;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
        this.threeStepFlag = true
      }

    },
    onFileChangeOne: function (e) {
      this.firstUploadName = e.target.files[0].name
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
          return;
      }
      this.createImageOne(files[0]);
    },
    createImageOne: function(file) {
      /* eslint-disable no-undef */
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
          let image = e.target.result;
          let data = {};
          data['file'] = image;
          vm.file1 = data
      };
      reader.readAsDataURL(file);
    },
    onFileChangeTwo: function (e) {
      this.secondUploadName = e.target.files[0].name
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
          return;
      }
      this.createImageTwo(files[0]);
    },
    createImageTwo: function(file) {
      /* eslint-disable no-undef */
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
          let image = e.target.result;
          let data = {};
          data['file'] = image;
          vm.file2 = data
      };
      reader.readAsDataURL(file);
    },
    chooseAnswer: function (step, el) {
      let total = 0
      let question = el.name
      let marked = question.replace('question', 'marked')
      let trueTemp = [...this.answerTrueFlags]
      let falseTemp = [...this.answerFalseFlags]

      // check it is correct answer
      if (el.value === this.answers[question]) { // true answer
        this.answered[marked] = 1
        trueTemp[step - 1] = true
        falseTemp[step - 1] = false
      } else { // wrong answer
        this.answered[marked] = 0
        trueTemp[step - 1] = false
        falseTemp[step - 1] = true
      }

      // check all answers are correct?
      for (var property in this.answered) {
        total += this.answered[property]
      }

      if (total === Object.keys(this.answered).length) this.submitFlag = true

      // change the state with temp data
      this.answerTrueFlags = trueTemp
      this.answerFalseFlags = falseTemp
    },
    onSubmit:async function () {
      let name = this.frmname
      let agency = this.frmagency
      try {
        const token = await this.$recaptcha.execute('login')

        let data = {
          'frmname': this.frmname,
          'frmlicense': this.frmlicense,
          'frmagency': this.frmagency,
          'frmproducer': this.frmproducer,
          'frmphone': this.frmphone,
          'frmemail': this.frmemail,
          'file1': this.file1,
          'file2': this.file2,
          'g-recaptcha-response': token
        }

        // submit
        this.$axios.post("https://getform.io/f/1a79aeec-d8c1-4bab-b5d8-710d1363d348", data, {
          headers: {
            Accept: "application/json"
          }
        }).then(() => {
          sessionStorage.setItem('crtName', name)
          sessionStorage.setItem('crtAgency', agency)

          // go to broker confirmation
          this.$router.push({name: 'broker-confirmation'})
        }).catch(error => {
          console.log('An error occurred: ' + error)
        })

        // send token to server alongside your form data

        // at the end you need to reset recaptcha
        await this.$recaptcha.reset()
      } catch (error) {
        console.log('Login error:', error)
      }
    }
  },
  beforeMount() {
    this.checkAuth()
  },
  watch: {
    frmname: function () {
      this.showValidFlag = false
    },
    frmlicense: function () {
      this.showValidFlag = false
    },
    frmagency: function () {
      this.showValidFlag = false
    },
    frmproducer: function () {
      this.showValidFlag = false
    },
    frmphone: function () {
      this.showValidFlag = false
    },
    frmemail: function () {
      this.showValidFlag = false
    },
    file1: function () {
      this.showValidFlag = false
    },
    file2: function () {
      this.showValidFlag = false
    },
  }
}
</script>