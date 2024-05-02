<template>
  <meta property="og:image" content="https://drive.google.com/file/d/1xJQZc9QwMsDWNS6yNu1kEMyqXiKtORX9/view?usp=share_link">
  <meta name="description" content="Professional wedding and portrait photographer traveling the uk in my little camper shooting weddings">
  <meta name="googlebot" content="noindex">
  <meta name="robots" content="noindex">
  <div class="containers">
    <div class="Left" style="padding-right: 50px">
      <img class="magic" style="max-width: 50vw;"  src="@/assets/About.jpg">
    </div>
    <div class="Right">

          <br>
          <p class="Center" style="color: #908e8b; font-size: 20px; font-family: 'Gruppo', cursive;">Hopefully you are still interested at this point and would like to know a little about me!
          <br>
          <br>

            After my formal training as a photographer I spent some time practicing different areas of photography. I initially focused my interest on fashion, to find what I was actually more attracted to and enjoyed was the human element of photography, from the classic pose to the more modern documentary image styles.
            <br>
            <br>
            I was asked by a friend to cover a wedding, I agreed and found a very enjoyable type of photography that allowed me to indulge my artistic flair as well as the technical aspects required.
            <br>
            <br>
            I have been a wedding photographer for over seven years and in this time I have been to many locations, throughout the UK. I have been to various venues and wedding ceremonies, from village churches, to town halls to in the middle of a field.
            <br>
            <br>
            Over the past couple of years I have been using a small retro camper van to allow me to pretty much travel anywhere in the UK the evening before a wedding to avoid any travel complications. This started off as a convenient way of being very close to where I needed to be the evening before, this  has now turned into a fun element of the different locations.
            <br>
            <br>
            Having attended more weddings than most, I am quite knowledgeable about the proceedings, from the formal side of the services to the informal fun parts of the day, which vary from wedding to wedding and the individuals.
            <br>
            <br>
            I am confident in my role from being in the industry for years. And I like to think of myself as friendly, approachable, professional and always happy to help.
            <br>
            <img style="height: 25vh" :src="require('@/assets/finalist.png')">
            <br>
            <img style="height: 25vh" :src="require('@/assets/industry.JPG')">
          </p>
      </div>
        <div>

    </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <footer style="font-family: 'Gruppo', cursive; font-size: 20px">
    Copyright © 2023 Kirsty Doran Photography.
    <br>
    All Rights Reserved
  </footer>
</template>

<script>


</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .magic {
    display: none;
  }
}
@media (max-width: 1026px) {
  #magic { display: none; }
}

img {
  height: 80vh;
  max-width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
.div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Center{
  text-align: left;
  width: 1200px;
  padding: 30px;
  height: 75vh;
}
.Right{
  text-align:left;
  width: 200px;
  flex: 1;
  left: 200px;
  height: 75vh;


}
.Left{
 height: 75vh;
}
.containers {
  display: flex;
  flex-direction: row-reverse;
}
.title {
  color: #141D1D;
  font-size: 3.5rem;
  font-weight: 300;
  padding: 30px;
}
@media only screen and (max-width: 650px) {
  .Center{
    width: 300px;
  }
  .Right{
    align-self: center;
    text-align:left;
    width: 300px;
  }
  .Left{
    display: none;
  }

}
</style>
