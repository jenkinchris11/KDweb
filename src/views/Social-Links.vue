<template>
  <meta property="og:image" content="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/325792514_513629890869331_8323829041432717049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qVaOROpVZo4AX8GEt4A&_nc_ht=scontent-lcy1-1.xx&oh=00_AfDzCO1HdakOY0FrPTheTBNSqrSwktigX9YhsxXbZDODiA&oe=63E0DBD0">
  <meta name="googlebot" content="noindex">
  <meta name="robots" content="noindex">
  <div class="Color">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<br><br>
    <!-- Add font awesome icons -->
    <a href="https://en-gb.facebook.com/KirstyDoranphoto87/" class="fa fa-facebook"></a>
    <a href="https://www.instagram.com/kirstydoranphotography/?hl=en" class="fa fa-instagram"></a>
    <a href="https://www.google.com/search?q=kirsty+doran+photography&ei=k6jKY5v-AcuD8gLs8oOoDw&gs_ssp=eJzj4tVP1zc0TKtITq6Iz403YLRSMagwsTBPskwzMjG0SDRKMbYwtjKosDQ0SjY1T01JsTBOMU0z8ZLIziwqLqlUSMkvSsxTKMjIL8lPL0osyKgEAJ1YGO4&oq=kirsty+doran+pho&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgsILhCABBDHARCvAToICAAQogQQsAM6CggAEB4QogQQsANKBAhBGAFKBAhGGABQ9AZY9w5gjBNoAXAAeACAAWaIAZ4CkgEDMi4xmAEAoAEByAEFwAEB&sclient=gws-wiz-serp" class="fa fa-google"></a>
    <a href="https://www.linkedin.com/in/kirsty-doran-4a176462/?originalSubdomain=uk" class="fa fa-linkedin"></a>
    <br>
    <img style="height: 25vh" :src="require('@/assets/finalist.png')">
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