<template>
  <div class="containers">
    <div class="Left" style="padding-right: 50px">
      <img style="max-width: 50vw;box-shadow: 0 0 50px 50px white inset;
"  src="@/assets/067.jpg">
    </div>
    <div class="Right">

          <br>
          <p class="Center" style="color: #908e8b; font-size: 24px; font-family: 'Gruppo', cursive;">Hopefully you are still interested at this point and would like to know a little about me!
          <br>
          <br>

            After my formal training as a photographer I spent some time practicing different areas of photography. I initially focused my interest on fashion, to find what I was actually more attracted to and enjoyed was the human element of photography, from the classic pose to the more modern documentary image styles.
            <br>
            I was asked by a friend to cover a wedding, I agreed and found a very enjoyable type of photography that allowed me to indulge my artistic flair as well as the technical aspects required.
            <br>
            I have been a wedding photographer for over seven years and in this time I have been to many locations, throughout the UK. I have been to various venues and wedding ceremonies, from village churches, to town halls to in the middle of a field.
            <br>
            Over the past couple of years I have been using a small retro camper van to allow me to pretty much travel anywhere in the UK the evening before a wedding to avoid any travel complications. This started off as a convenient way of being very close to where I needed to be the evening before, this  has now turned into a fun element of the different locations.
            <br>
            Having attended more weddings than most, I am quite knowledgeable about the proceedings, from the formal side of the services to the informal fun parts of the day, which vary from wedding to wedding and the individuals.
            <br>
            I am confident in my role from being in the industry for years. And I like to think of myself as friendly, approachable, professional and always happy to help. </p>
      </div>
        <div>
    </div>
  </div>
</template>

<script>


</script>

<style scoped>
.div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Center{
  text-align: left;
  width: 700px;
  padding: 30px;
}
.Right{
  text-align:left;
  width: 200px;
  flex: 1;
  left: 200px;

}
.Left{

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
    text-align: left;
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
