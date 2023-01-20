<template>
  <div class="Color">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<br><br>
    <!-- Add font awesome icons -->
    <a href="https://en-gb.facebook.com/KirstyDoranphoto87/" class="fa fa-facebook"></a>
    <a href="https://www.instagram.com/kirstydoranphotography/?hl=en" class="fa fa-instagram"></a>
    <a href="https://www.google.com/search?q=kirsty+doran+photography&ei=k6jKY5v-AcuD8gLs8oOoDw&gs_ssp=eJzj4tVP1zc0TKtITq6Iz403YLRSMagwsTBPskwzMjG0SDRKMbYwtjKosDQ0SjY1T01JsTBOMU0z8ZLIziwqLqlUSMkvSsxTKMjIL8lPL0osyKgEAJ1YGO4&oq=kirsty+doran+pho&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgsILhCABBDHARCvAToICAAQogQQsAM6CggAEB4QogQQsANKBAhBGAFKBAhGGABQ9AZY9w5gjBNoAXAAeACAAWaIAZ4CkgEDMi4xmAEAoAEByAEFwAEB&sclient=gws-wiz-serp" class="fa fa-google"></a>
    <a href="https://www.linkedin.com/in/kirsty-doran-4a176462/?originalSubdomain=uk" class="fa fa-linkedin"></a>

  </div>

</template>


<script>
export default {
  name: "Social-Links"
}

</script>

<style scoped>
.Color{
  background: #f4ece0;
  width: 100vw;
  height: 100vh;
}
/* Style all font awesome icons */
.fa {
  padding: 20px;
  font-size: 30px;
  width: 100px;
  height: 75px;
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

/* Twitter */
.fa-instagram {
  background-image: linear-gradient(
      45deg,
      hsl(278deg 52% 48%) 0%,
      hsl(313deg 64% 45%) 9%,
      hsl(332deg 70% 51%) 18%,
      hsl(350deg 78% 59%) 27%,
      hsl(359deg 77% 62%) 36%,
      hsl(346deg 73% 57%) 45%,
      hsl(335deg 67% 51%) 55%,
      hsl(323deg 65% 47%) 64%,
      hsl(309deg 53% 46%) 73%,
      hsl(285deg 42% 50%) 82%,
      hsl(258deg 51% 57%) 91%,
      hsl(228deg 63% 57%) 100%
  );	;
  color: white;
}
.fa-linkedin {
  background: #55ACEE;
  color: white;
}
.fa-google {
  background: #dd4b39;
  color: white;
}
</style>