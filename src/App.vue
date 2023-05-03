<template class="no-scroll" style="background: #f4ece0;">
  <meta property="og:image" content="https://drive.google.com/uc?export=view&id=1xJQZc9QwMsDWNS6yNu1kEMyqXiKtORX9" />
  <meta name="description" content="Professional wedding and portrait photographer traveling the uk in my little camper shooting weddings">
  <meta name="google-site-verification" content="H7n1yxjk1UMuusSC0VE8oYdYA8G8wM0RXNvtuPPfutk" />
  <div style="background: #f4ece0; width: 100vw; height: 100vh; overflow-x: hidden">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap" rel="stylesheet">
  <title>Kirsty Doran Photography </title>
  <nav class="Width navbar navbar-light bg-faded" style=" flex-wrap: nowrap; justify-content: flex-start; padding: 15px; background: #dbc2b2; border-bottom: 5px solid white">
    <button class="navbar-toggler hidden-sm-up" type="button" style="color: white">
      &#9776;
    </button>
    <router-link to="/" class="nav-link"><img class="Logo" src="@/assets/KDLogo.png" style="height: 150px"></router-link>
    <div class="nav-slider" style="flex-wrap: nowrap">
      <ul class="nav navbar-navs" style="padding: 5px; color: white;text-decoration: none; --bs-nav-link-hover-color: white; --bs-nav-link-color: white">
        <button class="navbar-close hidden" type="button" style="border: none; background: #dbc2b2; color: white">
          &#9776;
        </button>
        <li class="nav-mask" style="padding-left: 25px; font-family: 'Gruppo', cursive; background: none;">
          <router-link to="/Gallery" class="nav-link" style="font-family: 'Gruppo', cursive;color: white;text-decoration: none; font-size: 30px;">Wedding Gallery</router-link>
        </li>

        <li class="nav-mask" style="padding-left: 25px; font-family: 'Gruppo', cursive; background: none;">
          <router-link to="/Weddings&Packages" class="nav-link" style="font-family: 'Gruppo', cursive;color: white;text-decoration: none; font-size: 30px;">Wedding Packages</router-link>
        </li>
        <li class="nav-mask" style="display: none; padding-left: 25px; font-family: 'Gruppo', cursive; background: none;">
          <router-link to="/Other-Work" class="nav-link" style="font-family: 'Gruppo', cursive;color: white;text-decoration: none; font-size: 30px;">Other Work</router-link>
        </li>
        <li class="nav-mask" style="padding-left: 25px;font-family: 'Gruppo', cursive; background: none;">
          <router-link to="/Photo-booth" class="nav-link" style="font-family: 'Gruppo', cursive;color: white;text-decoration: none; font-size: 30px;">Photo-booth</router-link>
        </li>
        <li class="nav-mask" style="padding-left: 25px; font-family: 'Gruppo', cursive; background: none;">
          <router-link to="/about" class="nav-link" style="font-family: 'Gruppo', cursive;color: white;text-decoration: none; font-size: 30px;">About</router-link>
        </li>
        <li class="nav-mask" style="padding-left: 25px; font-family: 'Gruppo', cursive; background: none;">
          <router-link to="/Social-Links" class="nav-link" style="font-family: 'Gruppo', cursive;color: white;text-decoration: none; font-size: 30px;">Socials</router-link>
        </li>
        <li class="nav-mask" style="padding-left: 25px; font-family: 'Gruppo', cursive; background: none;">
          <router-link to="/Enquiries" class="nav-link" style="font-family: 'Gruppo', cursive;text-decoration: none;color: white; font-size: 30px;">Enquiries</router-link>
        </li>
        <li href="https://www.facebook.com/KirstyDoranphoto87/reviews?locale=en_GB" class="nav-mask" style="padding-top: 8px; padding-left: 25px; font-family: 'Gruppo', cursive; background: none;">
          <a href="https://www.facebook.com/KirstyDoranphoto87/reviews?locale=en_GB" style="font-family: 'Gruppo', cursive;text-decoration: none;color: white; font-size: 30px;">Testimonials</a>
        </li>
      </ul>
    </div>
    <div class="nav-mask" style="position: fixed; opacity: 0;"></div>
  </nav>
  <div class="Flexiboi">
            <div class="View" style="background: #f4ece0;">
              <router-view/>
            </div>
  </div>
  </div>
</template>

<script>

</script>

<style>
.body{
  background: #f4ece0;
}
body::-webkit-scrollbar {
  width: 5px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #dbc2b2;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: white;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid white;  /* creates padding around scroll thumb */
}
.html{
  margin: 0px;
}
#app{
  margin: 0px;
}
.body{
  overflow: hidden;
  margin: 0px;
}
.nav-slider{
  flex-wrap: nowrap;
}
.navbar-navs{
  --bs-nav-link-color: black;
  --bs-nav-link-hover-color: black;
  --bs-nav-link-disabled-color: black;
  color: black;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar{
  width: 100%;
}
.nav{
  flex-direction: row;
  --bs-nav-link-hover-color: black;
  --bs-nav-link-color: black;
}
.nav-slider.toggling {
  transition: transform 0.35s, opacity 0.35s;
}
.navbar-close {
  transform: none;
  display: none;
}
.navbar-toggler {
  float: left;
  display: none;
}
@media only screen and (max-width: 300px) {
  .Logo{
    width: 100px;
  }
}
@media only screen and (max-width: 657px) {
  .navbar-toggler {
    float: left;
    display: flex;
  }
  .navbar-close {
    transform: none;
    display: flex;
    float: left;

  }
  .nav{
    flex-direction: column;
  }
  .navbar-navs{
    flex-direction: column;
  }
  html,
  body{
    width:100%;
    overflow-x:hidden;
  }
  .Logo{
    width: 300px;
  }
}
@media only screen and (min-width: 1026px) {
  .nav{
    flex-direction: row;
  }
  .navbar-navs{
    flex-direction: row;
  }
}
@media (max-width: 657px) {
  .nav-slider {
    opacity: 0;
    position: fixed;
    z-index: 200;
    background-color: #dbc2b2;
  }
  .nav-slider .navbar-nav {
    margin-left: 30px;
    margin-top: 20px;
    flex-direction: column;
  }
  .nav-slider .navbar-nav .nav-item {
    float: none;
  }
  .nav-slider .navbar-nav .nav-item .nav-link {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .nav-slider .navbar-nav .nav-item + .nav-item {
    margin-left: 0;
  }
  body.has-active-menu {
    overflow: hidden;
  }
  .navbar-toggler {
    float: left;
  }
  .nav-mask {
    z-index: 100;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 0;
    height: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.25s, width 0s 0.25s, height 0s 0.25s;
  }

  .has-active-menu .nav-mask {
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.25s;
  }

  /* next */
  .nav-slider {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    top: 0;
    left: 0;
    transform: translateX(-100%);
  }

  .has-active-menu .nav-slider {
    opacity: 1;
    transform: translateX(0);
  }
}
@media (min-width: 320px) and (max-width: 650px) {
  .nav-slider {
    width: 300px;
    transform: translateX(-300px);
  }
  .navbar-toggler {
    float: left;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.Flexiboi {
  display: flex;
  flex-direction: column;
  height: 75vh;
}
@media (min-width: 1080px){
  .container-fluid{
    flex-direction: row-reverse;
  }
}
</style>
