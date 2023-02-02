<template>
  <meta property="og:image" content="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/325792514_513629890869331_8323829041432717049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qVaOROpVZo4AX8GEt4A&_nc_ht=scontent-lcy1-1.xx&oh=00_AfDzCO1HdakOY0FrPTheTBNSqrSwktigX9YhsxXbZDODiA&oe=63E0DBD0">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap" rel="stylesheet">
  <br>
  <h1 style="font-family: 'Gruppo', cursive; color: rgb(219, 194, 178) ">Feature Wedding 4</h1>
  <h2 style="font-family: 'Gruppo', cursive; color: rgb(219, 194, 178) ">Dwain & Nicole. - Cragwood Country House Hotel</h2>
  <div>
      <div>
        <swiper :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(1).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(2).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(3).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(4).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(5).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(6).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(7).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(8).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(9).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(10).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(11).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(12).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(13).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(14).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(15).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(16).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(17).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(18).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(19).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(20).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(21).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(22).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(23).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(24).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(25).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(26).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(27).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(28).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(29).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(30).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(31).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(32).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(33).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(34).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(35).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(36).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(37).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(38).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(39).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(40).jpg"></swiper-slide>
          <swiper-slide><img class="sizer" src="@\assets\feature4\unitiled(41).jpg"></swiper-slide>
        </swiper>
    </div>
  </div>
</template>

<script scoped>
// Import Swiper styles
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
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
    }
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
      },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Scrollbar, A11y],
    };
  },
};

</script>

<style>
.swiper-button-prev{
  color: rgb(219, 194, 178) !important;
}
.swiper-button-next{
  color: rgb(219, 194, 178) !important;
}
#box {
  width: 500px;
  height: 300px;
  box-shadow: inset 1px 1px 40px 0 rgba(0, 0, 0, 0.45);
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  margin: 5% auto 0 auto;
  background-image: url("@/assets/Photos-27.jpg");
  background-size: cover;
  border-radius: 5px;
  overflow: hidden;
}

#overlay {
  background: rgba(0, 0, 0, 0.75);
  text-align: center;
  padding: 45px 0 66px 0;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  width: 500px;
  height: 300px;
}
#plus {
  font-family: 'Gruppo', cursive;
  color: rgba(255, 255, 255, 0.85);
  font-size: 62px;
}

@media (max-width: 657px) {
  #overlay {
    background: rgba(0, 0, 0, 0.75);
    text-align: center;
    padding: 45px 0 66px 0;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    width: 300px;
    height: 200px;
  }
  #box {
    width: 300px;
    height: 200px;
    box-shadow: inset 1px 1px 40px 0 rgba(0, 0, 0, 0.45);
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    margin: 5% auto 0 auto;
    background-image: url("@/assets/Photos-27.jpg");
    background-size: cover;
    border-radius: 5px;
    overflow: hidden;
  }
  #plus {
    font-family: 'Gruppo', cursive;
    color: rgba(255, 255, 255, 0.85);
    font-size: 26px;
  }
}
#box:hover #overlay {
  opacity: 1;
}

.default-slider .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  height: 100vh;
}
.swiper{
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
@media (max-width: 657px) {
  .images{
    display: none;
  }
}
@media (min-width: 657px) {

  .images{
    display: block;
  }
}
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
  height: 75vh;
  max-width: 100%;
  object-fit: contain;
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
.fa {
  padding: 20px;
  font-size: 30px;
  width: 300px;
  height: 150px;
  text-align: center;
  text-decoration: none;
}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  background: #3B5998;
  color: white;
}
.box{
  width: 100px;
  height: 50px;
  background: #3B5998;
  color: white;

}
</style>