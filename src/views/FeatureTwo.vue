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
  name: "FeatureTwo",
  data() {
    return {
      images: [
      "https://drive.google.com/uc?export=view&id=1dNK4d4fBs08fdzr74S-2xdr4asp-cuY2",
      "https://drive.google.com/uc?export=view&id=12V9I2TvlixppHgZ7iiVGZZImg92P3fXq",
"https://drive.google.com/uc?export=view&id=14Bg1u8P-GvP75OPdfYZ6w0RKcTjnaGcj",
"https://drive.google.com/uc?export=view&id=17hMK1m9ZQh2N-_GTlgapKoDYtL7s1lQs",
"https://drive.google.com/uc?export=view&id=18yVAbmBHQOZBPvTBEGlcg_YXs66GH_s3",
"https://drive.google.com/uc?export=view&id=19MCsJsAE8O76HH8haewopOwE4s0Finp2",
"https://drive.google.com/uc?export=view&id=19umq_50TcQis_JAVcCtiqIti4UtAdNlE",
"https://drive.google.com/uc?export=view&id=1AphkZFAqBprp2exROoubYxfpGMuXIx5a" ,
"https://drive.google.com/uc?export=view&id=1BDOFd32e6peNdl35ayvDnmilXKWdHWPU",
"https://drive.google.com/uc?export=view&id=1CHNptuk7OEuBa5ktW6iM7SGHXpUgedcR",
"https://drive.google.com/uc?export=view&id=1DUUWn2hOIjHlKZ2NQXnJedS7wTKcCj-w",
"https://drive.google.com/uc?export=view&id=1H-Lb4HEVMEHF0SkI0Tu-0Fv2XDQBeWgE",
"https://drive.google.com/uc?export=view&id=1HbewCkxa3cBlUH6NXGlz78cN_78Qb1Ht",
"https://drive.google.com/uc?export=view&id=1IHy5bAp2EPQlQj-mADE0ot3hasJC3Szi",
"https://drive.google.com/uc?export=view&id=1J1sUmfGyVnbzTJk9kpWwnSQg7sjpQ7kG",
"https://drive.google.com/uc?export=view&id=1JhYRHyoke1ulwxRiWNBbsY1hZb2P9vRJ",
"https://drive.google.com/uc?export=view&id=1MrVIs4Nfy8AOD4YQAqT6kOIbp9T02AHi",
"https://drive.google.com/uc?export=view&id=1N4y32WcxYi7ttq-PBnrKxlSXiJKSwPD5",
"https://drive.google.com/uc?export=view&id=1Qwsr_BlEIRWxPujxi13fmDpBl3gVkd_y",
"https://drive.google.com/uc?export=view&id=1UhEVs4x5sPkzo7ZsabeGKP0HJD5Fq2hM",
"https://drive.google.com/uc?export=view&id=1UloXHBKC0gvTQlAsKN32tcBzRXywhzXr",
"https://drive.google.com/uc?export=view&id=1VUst8IBvad-cpGYR5VPk-ReGRuZdT8k8",
"https://drive.google.com/uc?export=view&id=1Y4AkmMennWXJjoKi5gVE0wEj6yS-aIEw",
"https://drive.google.com/uc?export=view&id=1ZfaYJXFk2z3EDxFw_dpUlMn6CQT6iJmx",
"https://drive.google.com/uc?export=view&id=1dNK4d4fBs08fdzr74S-2xdr4asp-cuY2",
"https://drive.google.com/uc?export=view&id=1fo4W86tqQx9OAd564nrvydqrG7YpGmsp",
"https://drive.google.com/uc?export=view&id=1fuZJSe-DIPGooHT4JHqsPZN-n4VrltMf",
"https://drive.google.com/uc?export=view&id=1ibE9QZ66P1GrAc4KYwZjJ7zQDUxjgp1D",
"https://drive.google.com/uc?export=view&id=1jxO0xnmpN2MubjDFMCes3k2MGxoweW-l",
"https://drive.google.com/uc?export=view&id=1lyAv5h14eoqP9V0FMuVVAm4P_S68LdoT",
"https://drive.google.com/uc?export=view&id=1m6-D6vcGWtJ5B1SlieMEd_AwJJpyEmp5",
"https://drive.google.com/uc?export=view&id=1nbK3RG-Mct30dAdNmzUbtNzST6TxRCee",
"https://drive.google.com/uc?export=view&id=1omPkKp6FGPKvIqG_QKer1INzg3xkd4QU",
"https://drive.google.com/uc?export=view&id=1rG6VZxOYmYpOFU7vlKIE5GerEgmpStQX",
"https://drive.google.com/uc?export=view&id=1ufo4rDkLbcj-k0ZafdJjzPNiawkRwpzN",
"https://drive.google.com/uc?export=view&id=1a3zz6UMqEYa5iC4fRR0gG0WgPVJ3Gfp0",

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