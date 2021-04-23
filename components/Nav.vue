<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-lg d-flex align-items-center">
      <div class="container d-flex align-items-center">
        <!-- <select class="lang">
          <option>Select Language</option>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
        
        <select class="lang lang-mob d-md-none d-lg-none d-xl-none">
          <option>EN</option>
          <option>FR</option>
          <option>ES</option>
        </select>			 -->
        <NuxtLink class="navbar-brand" to="/"
          ><img class="img-fluid logo" src="~assets/img/logo.svg"
        /></NuxtLink>
        <button class="navbar-toggler"><i class="fas fa-bars"></i></button>
        <a
          class="nav-mob-phone d-md-none d-lg-none d-xl-none"
          href="tel:1-888-697-5662"
          ><i class="fas fa-phone-alt"></i
        ></a>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav" style="margin-top: 0">
            <li class="nav-item" role="presentation">
              <NuxtLink class="nav-link" to="/about">About Us</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <NuxtLink
                class="nav-link dropdown-toggle"
                to="/members"
                id="navbarDropdownMenuLink"
                aria-haspopup="true"
                aria-expanded="false"
              >
                For Members
              </NuxtLink>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NuxtLink class="dropdown-item" to="/member-resources"
                  >Member Resources</NuxtLink
                >
              </div>
            </li>
            <li class="nav-item dropdown" role="presentation">
              <NuxtLink class="nav-link dropdown-toggle" to="/physicians"
                >For Physicians</NuxtLink
              >
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NuxtLink class="dropdown-item" to="/provider-training"
                  >Provider Training</NuxtLink
                >
              </div>
            </li>
            <li class="nav-item dropdown">
              <NuxtLink
                class="nav-link dropdown-toggle"
                to="/brokers"
                id="navbarDropdownMenuLink"
                aria-haspopup="true"
                aria-expanded="false"
              >
                For Brokers
              </NuxtLink>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NuxtLink class="dropdown-item" to="/broker-training"
                  >Training & Certification</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="/broker-resources"
                  >Broker Resources</NuxtLink
                >
              </div>
            </li>
            <li class="nav-item" role="presentation">
              <NuxtLink class="nav-link" to="/contact">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="d-flex align-items-center header-right">
          <a
            class="d-flex flex-row-reverse align-items-center nav-phone"
            href="tel:1-888-697-5662"
            ><strong>1-888-697-5662</strong><i class="fas fa-phone-alt"></i
          ></a>
          <a class="text-size-small" @click="updateFontSize('font-small')">A</a>
          <a class="text-size-normal" @click="updateFontSize('')">A</a>
          <a class="text-size-big" @click="updateFontSize('font-big')">A</a>
        </div>
      </div>
    </nav>
    <!-- start modal-->
    <div class="modal-box" v-if="modalFlag">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button
              @click="closeModal"
              type="button"
              class="close"
              data-dismiss="modal"
            >
              ×
            </button>
            <h4 class="modal-title">Leaving brandmanhealthplan.com</h4>
          </div>
          <div class="modal-body">
            <p>
              The link you clicked is taking you from Brandman Health Plan's
              website to an external web page. Would you like to continue?
            </p>
          </div>
          <div class="modal-footer text-center">
            <button
              type="button"
              title="continue"
              class="btn btn-modal btn-continue"
              data-dismiss="modal"
              @click="onSubmit"
            >
              Yes
            </button>
            <button
              type="button"
              title="go back"
              class="btn btn-modal btn-close"
              data-dismiss="modal"
              @click="closeModal"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--end modal-->
  </header>
</template>

<script>
export default {
  data() {
    return {
      modalFlag: false,
      redirecURL: '',
    }
  },
  mounted() {
    this.$bus.$on('go-external', this.goExternal)
  },
  methods: {
    onSubmit: function () {
      window.open(this.redirecURL, '_blank').focus()
      this.modalFlag = false
    },
    closeModal: function () {
      this.modalFlag = false
      this.redirecURL = ''
    },
    goExternal: function (link) {
      if (!this.modalFlag) {
        this.modalFlag = true
        this.redirecURL = link
      }
    },
    updateFontSize: function (fontClass) {
      const el = document.body
      el.classList.remove('font-small')
      el.classList.remove('font-big')
      if (fontClass != '') {
        el.classList.add(fontClass)
      }
    },
  },
}
</script>
