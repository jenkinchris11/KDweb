<template>
  <meta property="og:image" content="https://drive.google.com/file/d/1xJQZc9QwMsDWNS6yNu1kEMyqXiKtORX9/view?usp=share_link">
  <meta name="googlebot" content="noindex">
  <meta name="description" content="Professional wedding and portrait photographer traveling the uk in my little camper shooting weddings">
  <meta name="robots" content="noindex">
  <div style="display: flex; flex-direction: column; align-items: center;">
    <h1 style="font-family: 'Gruppo', cursive; color: #908e8b">Photo-Booth</h1>
    <br>
	<div>
      <hr style="border: 1px solid grey; width: 800px">
      <p style="font-family: 'Gruppo', cursive; font-size: 30px; color: #908e8b">Mr & Mrs Doherty</p>
        <a href="https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiemdoWXY2VklIRFBQN1RRclBCbTNPemdvYmwzYXNkV2lqRXR0cThqMjJ1b0FxL01UK0dRQ1FCYnRGSkFYdTR6L09wYXhHMTJmNXo0V3YvWDdsTXR0Q1VqeDNGNXhGZUJXZjhONU1mcXY2ejJGMElvcGVQWk5Bbk90Z3Nyc0xsT1lWTXNkMy8xY3NRPT0iLCJzIjoiVE9JUlBSVXExNGIwWm83dWhXVG5JZz09IiwiaSI6InJnRWJyNkRMeTdadTdYdkoifQ==" style="font-family: 'Gruppo', cursive; font-size: 24px; text-decoration: none; color: #908e8b">Download</a>
        <hr style="border: 1px solid grey; width: 800px">
    </div>
	<div>
      <hr style="border: 1px solid grey; width: 800px">
      <p style="font-family: 'Gruppo', cursive; font-size: 30px; color: #908e8b">Mr & Mrs Carpenter</p>
        <a href="https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoicnpDSjQrREowUy8xZnkzaGpzSTQrOVdrcmI5NEVHZFgzd2tWRWR6UTcxVytyNDA5QTFiK05PZEYrb3RLbzNldC9IMVhiOWlFZ3l0QUgveXFVcWs4OE0zVkNrUnlHaVVBZlBQNkFKR0Jyc0FzNjBNc3JJZXc4ejBveFBrek1zd0I1a3pGOGR4Rzh3PT0iLCJzIjoia3N6Zzhwa21VaWVyUDZqYlNqRWU4dz09IiwiaSI6IjNSUXVMWjkyMVRnbTVDOW0ifQ==" style="font-family: 'Gruppo', cursive; font-size: 24px; text-decoration: none; color: #908e8b">Download</a>
        <hr style="border: 1px solid grey; width: 800px">
    </div>
  </div>
  <br>
  <br>
  <footer style="font-family: 'Gruppo', cursive; font-size: 20px">
    Copyright © 2023 Kirsty Doran Photography.
    <br>
    All Rights Reserved
  </footer>
</template>

<script>
export default {
  data() {
    return {
      ascending: true,
      sortBy: 'alphabetically',
      searchValue: '',
      maxCookingTime: null,
      recipes: [
        {title: 'Sillies', route: 'https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiMmRwcUJmNUpmb1JrWHFCOUlBbFFsZGsyaDBjMEEyeTdCd29IdjdlNG1RL2V0QTRnTlVpcXBONjd6M2x3L0I2U0wrWVoyR1JNQ1g0dFVKQ2F2RUF3bDhoVmF2eEhxbzlGMUEvc3pXalVGQkhHdDlFd2NBSzZTUXM5bTVmYjVud0tNdldPNGFPbjNnPT0iLCJpIjoieXlCTFdZNmZNUUJQbmJNRiJ9', ingredients: ['Dough', 'Tomato Paste', 'Cheese', 'Bell Pepper', 'Onion'], cookingTime: 60, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
        {title: 'Booth', route: '/Booth-two', ingredients: ['Burritos', 'Kidney beans', 'Onion', 'Tomato', 'Bell Pepper'], cookingTime: 30, img: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
        {title: 'Party', route: '/Booth-three', ingredients: ['Tomatoes', 'Onion', 'Oregano'], cookingTime: 45, img: 'https://images.unsplash.com/photo-1553881781-4c55163dc5fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
        {title: 'Funnies', description: '',route: '/Booth-four', ingredients: ['Whole milk', 'Cream', 'Eggs', 'Sugar'], cookingTime: 120, img: 'https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1321&q=80'},
  ]
    };
  },
  computed: {
    filteredRecipes() {
      let tempRecipes = this.recipes

      // Process search input
      if (this.searchValue !== '' == this.searchValue) {
        tempRecipes = tempRecipes.filter((item) => {
          return item.title



              .toUpperCase()
              .includes(this.searchValue.toUpperCase())
        })
      }

      // Filter out by cooking time
      if (this.maxCookingTime)
        tempRecipes = tempRecipes.filter((item) => {
          return (item.cookingTime <= this.maxCookingTime)
        })

      // Sort by alphabetical order
      tempRecipes = tempRecipes.sort((a, b) => {
        if (this.sortBy == 'alphabetically') {
          let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0

          // Sort by cooking time
        } else if (this.sortBy == 'cookingTime') {
          return a.cookingTime - b.cookingTime
        }
      })
      let search;
      search = this.searchValue
      if (search.length === 0) {
        tempRecipes = [];
      }

      // Show sorted array in descending or ascending order
      if (!this.ascending) {
        tempRecipes.reverse()
      }

      return tempRecipes
    }
  }
};

</script>
