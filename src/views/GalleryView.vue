<template>
  <link href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div style="display: none;">
  <h1 style="font-family: 'Gruppo', cursive; color: red; ">Currently Under Reconstruction</h1> 
  <h1 style="font-family: 'Gruppo', cursive; ">View My Work Here</h1>
  <a href="https://en-gb.facebook.com/KirstyDoranphoto87/" style="font-family: 'Gruppo', cursive; font-size: 24px; ">Click Here!</a>
  </div>

  <div style="display: none;">
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=16Qor8dnk8P_t1DJdcPyh7vtuhbUrsPuf"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=18FVrQ5FM8i2DdyjmNsvIggICDQY-ePej"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=16Qor8dnk8P_t1DJdcPyh7vtuhbUrsPuf"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=18FVrQ5FM8i2DdyjmNsvIggICDQY-ePej"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=16Qor8dnk8P_t1DJdcPyh7vtuhbUrsPuf"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=16Qor8dnk8P_t1DJdcPyh7vtuhbUrsPuf"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=16Qor8dnk8P_t1DJdcPyh7vtuhbUrsPuf"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=16Qor8dnk8P_t1DJdcPyh7vtuhbUrsPuf"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=16Qor8dnk8P_t1DJdcPyh7vtuhbUrsPuf"></swiper-slide>
    </swiper>
  </div>

  <div style="display: none" class="images">
    <transition-group  tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
  <br>
  <div>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1WYC_x6i_0GmEJI6n57JNp0YE4zeJQVeK"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1u5XvDnOZNmydCJ8XG8CP1gW1IbJ4DPTD"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1vphXdff6WCnHs8nKlEmv8_VE47yQ6Ziv"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1hcFE8hsMJ6OEgNvz_gd51U8FSlruG9tD"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1hdJZG7TO9V7dZSTmcC1poBqifb0dqsr8"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1Kp42ETkhwhmQEIQLS33s95r-ocU1UeCC"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1QBvyIJTmoa3s-SvPha3ocE9IakRGhsxK"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=16mw7j2oMvjuS44ES9T466vahl56s8AhG"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1Hwr0lueHNVzARxctgPnwhQysP-_sVexC"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1KFZ_Ef12IvA7-n__IagZH6eFr77o23Tu"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1MFb___djL_PN2RGUi0LDHfDzHCh0pZbl"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1QJDi5QuzAXyJBe8a393vFi64eTeJPkBc"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=13QUdkYHA96C37nqLXda71RREKlTRet-z"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1gz78bVURl_9Cgkpj1FVpYbKX1Sic2pXs"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=16s57NNN5nYf7DDj5UsCtyV4k90Y0SmGv"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1b2DBLgIrHqrBH_1l5WWz5lmoUx4UOclL"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=15vZkfZsgb3RMJoQsYg2C5RRLEvn3KV_n"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1DP5QGCJJNn3t3LYFDMemW2AEF2urVElf"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1xZNpztqyrOKitwTGgwCf4ljm7wJ4vdhp"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1UgKbq8K7ZJUI3M1yaDl9_-TaJLTAMjZh"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1DmIcDP4-yU9tFK_gnVzeoxMtLHkh4MBy"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1pZgJktG8OPXxWU7Bg7m_syefXBn7SRW4"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1CiqYwkcDEkYiCLgz-tTCGR9YSVXX0XiU"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=17vEcHg7tuFDcP16JutxnGN7m4Cv-r0eo"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1PnTeAZhTYKtAcz1LtkKcUzNco2u_Kym6"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1dUJ7O0kLgmOatYtSgi5N0purMhAtpyij"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=18rCHCDhfk5Tge7rnF4mTEjxRnPHRWsWp"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1DhLxSlKQNTiYf1IjPKzlxb4bMPKumsU8"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1UCj5uti7qO6RRXaYlX-IYMrPHqEpOZry"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1NRj_7CXNZZhrgmbHoqLatkvUF6EtuxeW"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1V5eIqF1X0uWz02s1r_lgRA0DZBojnjI_"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1IhZQtEvRxPYguZNHJZr4oBZFzs8qHuEM"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1DS2R5wAoMKBBaty8lIQbm5tQcgnOTcbN"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=15uvZEgroSARd_RRV0jeVcsNfzW4Q5HRZ"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1FJLfcrfyYpdJD-9zcB9ddoJkY7gkYqFW"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1BuokFVE4N5jaBTXImJTIEFvDKeLOFB9m"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1z_Yf1zASKrWLR_qv3DJU47I9ExvXEFS_"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1A4LcTu-H8PmSSLeHFRAfUeFMi2mk8gij"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1FHHmv0ypiuesNP8J1APcNB2sHMqVrgLu"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1TWs_plUktUrX3F8jCcLBQ1LCHNCiQqIf"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1cwe65IQnZE00bJAP5LTmJGqvLAppSe3B"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1M0cLYnPH97D8E5gPguLe-BuXqCUzkcEg"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1nASjf8J8OKGqBikYVkkmJOHxBrT-pmmQ"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1ab-_8wZseeHXiaGdmugqwfikd6a_gaLA"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1bdlW0WaI_wtd0QZV-bDU6UFrJriWYA6Y"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1exOlkg8vueSHKTPXBiAD0kRgV-sCea4N"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1BApG07zvc3XZda8V040VN0ia0qbV5dew"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=180Im0lIPmvcam0XAUR2m3iUkofF3exhq"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1L17RnSDqIBL7yxtoMo-hGxUtsDNrxCCr"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1TK7R9VZNk-23i1VOp0FptWfHiRbETdY7"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1ISULZYTOCglv8bZD6N58fwi233SCJBNt"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1az7Nfdg_zwVN9DTS1Sl1JJr8mPXjd_Gt"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1KD5ypq1_0y-FxZQ810Ygnn7QHJUHdm0z"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1hoiNziBqcyKtUgHnakKeOULVlpSE_SXC"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1J-08YppKQ2fuXg-1-5UWSU5bq9yG0dXM"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1NoeqPtFOsyNYN6R67SdcNs5ZHbXfWScm"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1tRZHfFyPqvsXO3pagmUJEnX2EXXNjK2W"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1bJt2vETnl_lWiQRRyPDMfgYtTR2YssHt"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1sZ89FKePGbL4jr00TqJEo3kaiOAY_crV"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1MYAEVmAPyV0PMBaaRQpqBouDwNMfP-Nq"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=16QR05AZDS-91djA4iQymA--DHRZCns-7"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1SQ9LL-HiwLb5ChGm0Bo8YttiaM9fej26"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1YJ2vKIZHgpH6xXIrsV21vIZOuaxvQt0D"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1FB3ReYSobCU3KK7Jm-hpgWd0qAstt-fJ"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=14vrdzrYrGox1fzg_m0lL4uZnkIlAJTyy"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1xWvdpXeCD3qxd9XxnOd2ohg8H21y5QLA"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1la-vIMpw501-J0oKrCKFj4rUW9Z2FyM8"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1Qrb8nGKfyULxOMHjeBHwxKDuwwIV8HhA"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=17NUtu41AVV0y4XqMduOURjlh9_6X0YHT"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=18Woqbh30fXGmbAYI2A39ODmSZPYxsm-U"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=17c20PfoSYLnOM4X2tmdPCx-FenuwrNYB"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1JqjBqaog_v_5cKldS9NmLOWs9toH4f9X"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1Fipn-BGAFqgy4paqjFC7lIzDdyfDMYQh"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1QLCySGvZzrSW6EOuEFv96nLfxLZHRvAz"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1aBjCvj9_ErItcGr7k5ZRioGHEB4cqlhQ"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1CpT5g7c7JMDefpHIGH5rJttElrxQkVUD"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1-51KG1bUfiYqb7QZrI0KR7rVhC5u1yNk"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1fgkQyDSuM8nRnhJ9AwEHYlcp6SXwzS3A"></swiper-slide>
      <swiper-slide><img class="sizer" src="https://drive.google.com/uc?export=view&id=1GYiFO8pv5FVlGe2TuoXOHAsFZtiq6YV5"></swiper-slide>
    </swiper>
  </div>

  <div style="display: none" id="box">
    <router-link to="/Weddings-View" class="nav-link" style="font-family: 'Gruppo', cursive;color: white;text-decoration: none; font-size: 30px;"></router-link>
    <div id="overlay">
      <router-link to="/Weddings-View" class="nav-link" style="font-family: 'Gruppo', cursive;color: white;text-decoration: none; font-size: 30px;"><span id="plus">Weddings</span></router-link>
    </div>

  </div>

</template>
<script>
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

<style scoped>
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
swiper-wrapper{
  height: 100vh;
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
