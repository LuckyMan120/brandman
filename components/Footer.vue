<template>
  <footer data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000">
    <div class="container">
      <a href="/" class="flogo"
        ><img
          src="~assets/img/logo-footer.svg"
          width="78"
          class="img-fluid"
          alt=""
      /></a>

      <div class="row">
        <div class="col-sm-3">
          <h4>Hours</h4>
          <p>8:00AM–8:00PM Mon-Fri</p>

          <h4 class="mt-4">Address</h4>
          <p>
            P.O. Box 18650<br />
            Encino, CA 91416
          </p>
        </div>

        <div class="col-sm-3">
          <h4>Contact</h4>
          <ul>
            <li>
              <i class="fas fa-phone-alt"></i>
              <a href="tel:1-888-697-5662">1-888-697-5662</a>
            </li>
            <li>
              <i class="fas fa-tty"></i> <a href="tel:711">TTY/TDD 711</a>
            </li>
            <li>
              <i class="fas fa-fax"></i>
              <a href="fax:818-484-3522">818-484-3522</a>
            </li>
            <li class="footer-email">
              <i class="fas fa-envelope"></i>
              <a href="mailto:info@brandmanhealthplan.com"
                >info@brandmanhealthplan.com</a
              >
            </li>
          </ul>
        </div>

        <div class="col-sm-3">
          <h4>24 hour Nurse</h4>
          <ul>
            <li>
              <i class="fas fa-phone-alt"></i>
              <a href="tel:1-888-969-3909">1-888-969-3909</a>
            </li>
          </ul>
          <h4>Transportation</h4>
          <ul>
            <li>
              <i class="fas fa-phone-alt"></i>
              <a href="tel:1-844-743-7179">1-844-743-7179</a>
            </li>
          </ul>
        </div>

        <!-- <div class="col-sm-3">
          <h4>Follow Us</h4>
          <div class="social">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div> -->
      </div>

      <div class="footer-bottom text-center">
        <!-- <p><a href="#">Disclaimers</a> | <a href="#">Privacy</a> | <a href="#">Terms of Use</a></p> -->
        <p>
          &copy; Copyright {{ currentDate.getFullYear() }} Brandman Health Plan,
          All Rights Reserved. <br />Brandman Health Plan is an HMO C-SNP with a
          Medicare Contract. Enrollment in Brandman Health Plan depends on
          annual contract renewal.<br />H7594_20BHP_URL_M File & Use 10/06/2020
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    }
  },
}
</script>