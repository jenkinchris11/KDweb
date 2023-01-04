<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap" rel="stylesheet">
  <br>

  <div>
    <transition-group  tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
export default {
  name: "FeatureOne",
  data() {
    return {
      images: [
        "https://drive.google.com/uc?export=view&id=1-3HdUHWNWiiCxMGKD_mUMX_TvRMnXd2i",
        "https://drive.google.com/uc?export=view&id=1-Jhqn-Vlq15KSS2Ad3_o7ux-uaxF15Fu",
        "https://drive.google.com/uc?export=view&id=11VJ33h5bMxNCftH_64t_YxSPstIpX7zK",
        "https://drive.google.com/uc?export=view&id=13HD2wlh007__lf8nr44LZJURM_lOPL2w",
        "https://drive.google.com/uc?export=view&id=14KetbzMwWTWbpR-DtFxtr0cDzx5FbKet",
        "https://drive.google.com/uc?export=view&id=14aUnVzB04NfefNrQs2fJTrAnNkmXw-h5",
        "https://drive.google.com/uc?export=view&id=16Qor8dnk8P_t1DJdcPyh7vtuhbUrsPuf",
        "https://drive.google.com/uc?export=view&id=18FVrQ5FM8i2DdyjmNsvIggICDQY-ePej",
        "https://drive.google.com/uc?export=view&id=1910Foe8ZOGx7M6vBeRvAlG0_Ut6pgsHK",
        "https://drive.google.com/uc?export=view&id=19AmcgUJ7iAeHxVXPe7KKNBmSwgJvBzmF",
        "https://drive.google.com/uc?export=view&id=1BqVn4Shk7eic19OCgXZbb9xgSe_r8ryL",
        "https://drive.google.com/uc?export=view&id=1BwKoSKBjy2JXeHCNYZotl36TmhN3KYxG",
        "https://drive.google.com/uc?export=view&id=1FRPgy65ekDugMSxMLnPIa0x70lgquwJ1",
        "https://drive.google.com/uc?export=view&id=1FWqT7zhXq0Sf6xBxJ5rDX5oMfHvAsQIJ",
        "https://drive.google.com/uc?export=view&id=1HMiQlI0UonhbKIWjHYJptdEbNJrkzZqR",
        "https://drive.google.com/uc?export=view&id=1JHR4DnnMRUccNgB_O2e-zQjBiyL2UNDa",
        "https://drive.google.com/uc?export=view&id=1JYs0kuaQtPAYUbf4aZZ_Yi7QN01WZnwh",
        "https://drive.google.com/uc?export=view&id=1JsxPh6SStwdXYCRc8grkCvbnUa9-dnpp",
        "https://drive.google.com/uc?export=view&id=1LiqrocXG5ZBXPC3Rt_61ROdP7g_SnNVd",
        "https://drive.google.com/uc?export=view&id=1MFNtEN501v1fkATIY5XQXbvemTvFgv7l",
        "https://drive.google.com/uc?export=view&id=1OG1ljSynC-oew4AslXTQ_gfmAR6tTicV",
        "https://drive.google.com/uc?export=view&id=1PDnD46gv1uy5jqLwpH3ZBZqSUeDrwReL",
        "https://drive.google.com/uc?export=view&id=1PTkvEFAXqgsWEub8DzWe06odSNPo1ZwT",
        "https://drive.google.com/uc?export=view&id=1RDB6rgQn7c37upE44NaO2o1JMtvTxr39",
        "https://drive.google.com/uc?export=view&id=1Rxdgdm0Tx_r1Iv378txfWMmlTDUpa_T_",
        "https://drive.google.com/uc?export=view&id=1S4LsqNz9RMOYjtth7B5xjXR4yA1whhJI",
        "https://drive.google.com/uc?export=view&id=1Tr2dpR4UNfZbH8zkxw93-AHOETPsXIJ5",
        "https://drive.google.com/uc?export=view&id=1UEUtP-YZdoItzk_G4h7XiLHrl4vjLPKs",
        "https://drive.google.com/uc?export=view&id=1V8jxK8uGOD_HNvvIn_1cRfEYDNoXKYRC",
        "https://drive.google.com/uc?export=view&id=1W99iMp8WgWmab9PlRC24g2SuqchBIcCP",
        "https://drive.google.com/uc?export=view&id=1WQlSkKjXvT4fTdA0xE1aX67o34bnP4r_",
        "https://drive.google.com/uc?export=view&id=1WiM-B-Y9fOaZhmGn-fOjqyiJ5PjhVvi8",
        "https://drive.google.com/uc?export=view&id=1X75oN-471hSXCkwgUwYdvCz8-Qb8eGd7",
        "https://drive.google.com/uc?export=view&id='1XEZQ4SH41luH2OCTE0IkEaA5dFZTrfwO'",
        "https://drive.google.com/uc?export=view&id=1XdWh3XYo2yyDkt7iLSR5jcDo88LHGKpL",
        "https://drive.google.com/uc?export=view&id=1_yO5OijkgMx_LFS4-J4O1NIh57iWS5dj",
        "https://drive.google.com/uc?export=view&id=1bG1ye8Tcvhm93cRmxiuBWw76JVAqsrY0",
        "https://drive.google.com/uc?export=view&id=1bMgKWljH5CRROPWBvjo3fK7khddwDhB4",
        "https://drive.google.com/uc?export=view&id=1djl4MI3PooI0p44xk8mZX1oUL-qmS4fn",
        "https://drive.google.com/uc?export=view&id=1dvCKsR7SWhLTePUp6P_AQ6AhHtDZ5RlF",
        "https://drive.google.com/uc?export=view&id=1eN7mkgDSCqLR_crkD0IIguomS21inYG8",
        "https://drive.google.com/uc?export=view&id=1eQpqZo_C12e0zQAJvqY6oTJ23cJmmY8Y",
        "https://drive.google.com/uc?export=view&id=1fg-7NuSoS8G0dGgmQDqlZwn3wrHvKDWx",
        "https://drive.google.com/uc?export=view&id=1g-5FgRVCWmx0MUusZ_nXMGIe8LDzxn6S",
        "https://drive.google.com/uc?export=view&id=1gcVrtQIerpwJ3-sJ0t2qxJnjGp2TKCj4",
        "https://drive.google.com/uc?export=view&id=1hnEtXAn2sHUOoNy8A7M5kovuIer6Em3T",
        "https://drive.google.com/uc?export=view&id=1j-45Mvt2AutZbeiX8_s5wdHesVPCAMa3",
        "https://drive.google.com/uc?export=view&id=1jx08Rh4Ii8Xw8fp-VW_gWSKjlceq4-AS",
        "https://drive.google.com/uc?export=view&id=1lm8HX1aMWsFScl0opgLIQXWWkIJwZCyk",
        "https://drive.google.com/uc?export=view&id=1mcyFHZkRcSL_uE7kLKcqXCgppoemwKaK",
        "https://drive.google.com/uc?export=view&id=1obmJrhahvLeyUOQRPCGDpUgJbkJaJBxj",
        "https://drive.google.com/uc?export=view&id=1phJuC0WdDVcOInOLiq7w3nsNAVXy2b46",
        "https://drive.google.com/uc?export=view&id=1seTXbo6QjhPANDuLZ3WaaA9sBR6EWFu",
        "https://drive.google.com/uc?export=view&id=1u5ceWPSjglCq1nXaliiLuj7oC2gORrTz",
        "https://drive.google.com/uc?export=view&id=1uNbfuNIAju7XBADGoRIhZXgh7OcvdVIp",
        "https://drive.google.com/uc?export=view&id=1uy3PFDH0hG__hpVp5zeRDyk19zPsEitM",
        "https://drive.google.com/uc?export=view&id=1yKHaq6QwJaeNPneOAXOxyuZ-CSmn1CJ7",
        "https://drive.google.com/uc?export=view&id=1zgSp5vzXrDXUSIwdiuKpqdA64eM4tERw",
      ],
      timer: null,
      currentIndex: 0
    };
  },

  methods: {

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:75vh;
  max-width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 200px;
  font-family: 'Gruppo', cursive;
  color: #908e8b;
  font-size: 24px;

}

.prev {
  left: 200px;
  font-family: 'Gruppo', cursive;
  color: #908e8b;
  font-size: 24px;
}

.prev:hover, .next:hover {
  background: #dbc2b2;
}
</style>