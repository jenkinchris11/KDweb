<template>
  <meta property="og:image" content="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/325792514_513629890869331_8323829041432717049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qVaOROpVZo4AX8GEt4A&_nc_ht=scontent-lcy1-1.xx&oh=00_AfDzCO1HdakOY0FrPTheTBNSqrSwktigX9YhsxXbZDODiA&oe=63E0DBD0">
  <meta name="googlebot" content="noindex">
  <meta name="robots" content="noindex">
  <meta name="description" content="Professional wedding and portrait photographer traveling the uk in my little camper shooting weddings">
  <div class="section" id="contact">
    <h1 style="font-family: Gruppo, cursive; color: #908e8b;">Wedding Enquiry</h1>
    <p style="font-family: Gruppo, cursive; font-size: 22px; color: #908e8b;">If you are interested in booking me for a wedding please enter below your name,email and location of your wedding <br> and a little bit of information about you and your day</p>
    <form ref="form" @submit.prevent="sendEmail">
      <label style="display: block; font-family: Gruppo, cursive; font-size: 22px; color: #908e8b;">Your Name</label><input ref="anyName" type="text" name="user_name">
      <label style="display: block; font-family: Gruppo, cursive; font-size: 22px; color: #908e8b;">Location Of Your Wedding</label><input style=" width: 50vw;padding: 12px;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;margin-top: 6px; margin-bottom: 16px;resize: vertical;" ref="anyName" type="location" name="location">
      <label style="display: block; font-family: Gruppo, cursive; font-size: 22px; color: #908e8b;">Date Of Your Wedding</label><input style=" width: 50vw;padding: 12px;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;margin-top: 6px; margin-bottom: 16px;resize: vertical;" ref="anyName" :format="'DD.MM.YYYY'" name="date">
      <label style="display: block; font-family: Gruppo, cursive; font-size: 22px; color: #908e8b;">Your Email</label><input ref="anyName" type="email" name="user_email">
      <label style="display: block; font-family: Gruppo, cursive; font-size: 22px; color: #908e8b;">As Much Information As Possible About Your Wedding</label><textarea ref="anyName" name="message"></textarea>
      <br>
      <input style="display: flex; left: 50%; top: 50%; margin: 0 auto;" ref="anyName" type="submit" value="Send">
    </form>
  </div>

</template>

<script>
import emailjs from '@emailjs/browser';
export default {
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  mounted() {
    setInterval(() => this.setTime(), 1000)
    this.date_function()
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_hk3ve7b', 'template_dktu4oj', this.$refs.form, 'TlEZdBy4ei-1DSyvm')
          .then((result) => {
            this.$refs.form.reset()
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
      this.name = ''
      this.email = ''
      this.message = ''
      this.location = ''
      this.date = ''
    },
    setTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    },
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    }
  }
}

</script>

<style scoped>
input[type=text], [type=email], [type=location] [type=date], textarea {
  width: 50vw;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=submit] {
  background-color: #000000;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: aliceblue;
  color: black;
}
</style>
