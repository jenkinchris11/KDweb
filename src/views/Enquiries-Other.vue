<template>
  <meta property="og:image" content="https://kirstydoranphotography.co.uk/img/KDLogo.8acc7570.png">

  <div class="section" id="contact">
    <h1 style="color: #908e8b;font-family: Gruppo, cursive;">Other Work Enquiries</h1>
    <form ref="form" @submit.prevent="sendEmail">
      <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Your Name</label><input ref="anyName" type="text" name="user_name">
      <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">Your Email</label><input ref="anyName" type="email" name="user_email">
      <label style="color: #908e8b;display: block; font-family: Gruppo, cursive; font-size: 22px;">About Your Enquiry</label><textarea ref="anyName" name="message"></textarea>
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
input[type=text], [type=email], [type=location], textarea {
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