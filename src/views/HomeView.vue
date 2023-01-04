<template class="no-scroll">
  <link href="styles/ihover.css" rel="stylesheet">
  <div class="no-scroll">
    <div class="skw-pages" style="font-family: 'Gruppo'">
      <div class="skw-page skw-page-1 active">
        <div class="skw-page__half skw-page__half--left">
          <router-link to="/Feature-One" style="text-decoration: none;color: white">
          <div class="skw-page__skewed" src="@/assets/1.png">
            <div class="skw-page__content" ></div>
          </div>
          </router-link>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content" style="background: rgb(196,185,175);">
              <h1 style="font-size: 48px" class="skw-page__heading"> <router-link to="/Feature-One" style="text-decoration: none;color: white">Feature Wedding 1</router-link> </h1>
              <p style="font-size: 40px"><router-link to="/Feature-One" style="text-decoration: none;color: white">Martin & Micheal. <br> Stirk House </router-link></p>
            </div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-2">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content" style="background: rgb(196,185,175);">
              <h2 class="skw-page__heading">Page 2</h2>
              <p class="skw-page__description">Nothing to do here, continue scrolling.</p>
            </div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-3">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content" style="background: rgb(196,185,175);">
              <h2 class="skw-page__heading">Page 3</h2>
              <p class="skw-page__description">The end is near, I promise!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-4">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content" style="background:rgb(196,185,175);">
              <h2 class="skw-page__heading">Page 4</h2>
              <p class="skw-page__description">Ok, ok, just one more scroll!</p>
            </div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-5">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content" style="background: rgb(196,185,175);">
              <h2 class="skw-page__heading">Epic finale</h2>
              <p class="skw-page__description">
                Feel free to check
                <a class="skw-page__link" href="https://codepen.io/suez/pens/public/" target="_blank">my other pens</a> and follow me on
                <a class="skw-page__link" href="https://twitter.com/NikolayTalanov" target="_blank">Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="FeatSml">

  </div>
</template>

<script>

</script>

<style scoped>
:root {
  overflow: hidden;
}
.no-scroll{
  overflow: hidden; /* Hide scrollbars */

}
.FeatSml{
  display: none;
}
@media (max-width: 700px) {
  .FeatSml {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
}
@media only screen and (max-width: 700px) {
  .no-scroll {
    display: none;
  }
}
.skw-pages {
  overflow: hidden;
  position: relative;
  height: 100vh;
}

.skw-page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.skw-page__half {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100vh;
  transition: transform 1s;
}
.skw-page__half--left {
  left: 0;
  transform: translate3d(-32.4vh, 100%, 0);
}
.skw-page__half--right {
  left: 50%;
  transform: translate3d(32.4vh, -100%, 0);
}
.skw-page.active .skw-page__half {
  transform: translate3d(0, 0, 0);
}
.skw-page__skewed {
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 140%;
  height: 100%;
  transform: skewX(-18deg);
  background: #c3a6a0;
}
.skw-page__half--left .skw-page__skewed {
  left: -40%;
}
.skw-page__half--right .skw-page__skewed {
  right: -40%;
}
.skw-page__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 30%;
  color: #fff;
  transform: skewX(18deg);
  transition: transform 1s, opacity 1s;
  background-size: cover;
}
.skw-page__half--left .skw-page__content {
  padding-left: 30%;
  padding-right: 30%;
  transform-origin: 100% 0;
}
.skw-page__half--right .skw-page__content {
  padding-left: 30%;
  padding-right: 30%;
  transform-origin: 0 100%;
}
.skw-page.inactive .skw-page__content {
  opacity: 0.5;
  transform: skewX(18deg) scale(0.95);
}
.skw-page__heading {
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 25px;
  text-align: center;
}
.skw-page__description {
  font-size: 18px;
  text-align: center;
}
.skw-page__link {
  color: #FFA0A0;
}
.skw-page-1 .skw-page__half--left .skw-page__content {
  background-image: url("@/assets/Photo.jpg");

}
.skw-page-1 .skw-page__half--right .skw-page__content {
  background: #292929;
}
.skw-page-2 .skw-page__half--left .skw-page__content {
  background: #292929;
}
.skw-page-2 .skw-page__half--right .skw-page__content {
  background-image: url("@/assets/2.jpg");
}
.skw-page-3 .skw-page__half--left .skw-page__content {
  background-image: url("@/assets/051.jpg");
}
.skw-page-3 .skw-page__half--right .skw-page__content {
  background: #292929;
}
.skw-page-4 .skw-page__half--left .skw-page__content {
  background: #292929;
}
.skw-page-4 .skw-page__half--right .skw-page__content {
  background-image: url("@/assets/063.jpg");
}
.skw-page-5 .skw-page__half--left .skw-page__content {
  background-image: url("@/assets/100.jpg");
}
.skw-page-5 .skw-page__half--right .skw-page__content {
  background: #292929;
}

@media (max-width: 1024px) {
  .carousel-inner{
    height: 50vh
  }
  .feature{
    height: 50vh;
  }

}
@media (min-width: 1024px) {
  .carousel-inner{
    height: 100vh
  }

}
</style>
