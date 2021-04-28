<template>
  <div class="contact text-center" id="contact">
    <div class="container">
      <h3>Experience Our Difference</h3>
      <p>
        <b
          >Interested in joining the Brandman family?<br />Call
          <a href="tel:888-697-5662">888-697-5662 TTY/TDD 711</a></b
        >
        <br />Or use the form below to start the conversation.
      </p>

      <form action="" method="POST" @submit.prevent="onSubmit">
        <input
          name="Name"
          type="text"
          v-model="form.Name"
          placeholder="Your Name*"
        />
        <input
          name="Email"
          type="email"
          v-model="form.Email"
          placeholder="Email Address*"
        />
        <input
          name="Phone"
          type="text"
          v-model="form.Phone"
          placeholder="Phone Number"
        />
        <select name="Interested In" v-model="form.Interested">
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
          v-model="form.Message"
          placeholder="Message or Questions"
        ></textarea>
        <div class="custom-control custom-checkbox">
          <input type="hidden" name="Contact Me" value="No" /><input
            type="checkbox"
            class="custom-control-input"
            id="customCheck"
            name="Contact Me"
            value="Yes"
            v-model="form.Contact"
          />
          <label class="custom-control-label" for="customCheck"
            >Contact me with more information or enrollment assistance.</label
          >
        </div>
        <p>
          Checking confirms that: I am interested in more information about
          Brandman Health Plan, a Health Maintenance Organization that contracts
          with Medicare. I am asking for a plan representative or licensed agent
          to contact me. I understand that I am under no obligation to enroll. I
          understand that if I choose to enroll with Brandman Health, the plan
          representative or licensed agent may receive compensation for
          assisting me.
        </p>
        <button type="submit" class="bttn">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        Name: '',
        Email: '',
        Phone: '',
        Interested: '',
        Message: '',
        Contact: '',
      },
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    onSubmit: async function (submitEvent) {
      try {
        const token = await this.$recaptcha.execute('login')
        let formData = this.form
        formData['g-recaptcha-response'] = token
        console.log(formData)

        // submit
        this.$axios
          .post(
            'https://getform.io/f/67ecfa79-4f20-4165-bd19-014688d4f10e',
            formData,
            {
              headers: {
                Accept: 'application/json',
              },
            }
          )
          .then(() => {
            // go to thank you page
            this.$router.push({ name: 'thank-you' })
          })
          .catch((error) => {
            console.log('An error occurred: ' + error)
          })

        // at the end you need to reset recaptcha
        await this.$recaptcha.reset()
      } catch (error) {
        console.log('Validate error:', error)
      }
    },
  },
}
</script>