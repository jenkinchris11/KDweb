<template>
  <meta property="og:image" content="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/325792514_513629890869331_8323829041432717049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qVaOROpVZo4AX8GEt4A&_nc_ht=scontent-lcy1-1.xx&oh=00_AfDzCO1HdakOY0FrPTheTBNSqrSwktigX9YhsxXbZDODiA&oe=63E0DBD0">
  <meta name="googlebot" content="noindex">
  <meta name="description" content="Professional wedding and portrait photographer traveling the uk in my little camper shooting weddings">
  <meta name="robots" content="noindex">
  <div style="display: flex; flex-direction: column; align-items: center;">
    <h1 style="font-family: 'Gruppo', cursive; color: #908e8b">Photo-Booth</h1>
    <br>
    <div>
      <hr style="border: 1px solid grey; width: 800px">
      <p style="font-family: 'Gruppo', cursive; font-size: 30px; color: #908e8b">Mr & Mrs Heiss</p>
        <a href="https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiWHBEYmpmYlgvZjFOS3hqbkp6NXEvTnJVWFgyaG9kOFFpK0xhTjVnNnZqL2J4Ty9mdVR5clM1dXUyUGxJWVBaZnpDVVZ2MjVKdmlKU0dwdm5YeU9WbEdmbkExS1BKdmEyYk5HTy9aMUE0UTgzN3BFMnZsZnVjK0F6Y0t6L3B3eHF2SEQxMU94L0pnPT0iLCJpIjoieFFxUU5KQ0JrTlpWY0J6RCJ9" style="font-family: 'Gruppo', cursive; font-size: 24px; text-decoration: none; color: #908e8b">Download</a>
        <hr style="border: 1px solid grey; width: 800px">
    </div>
    <div>
      <hr style="border: 1px solid grey; width: 800px">
      <p style="font-family: 'Gruppo', cursive; font-size: 30px; color: #908e8b">Mr & Mrs Jackson 16/03/2023</p>
        <a href="https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoicWVtOG9aMVNGdUorcmExbEwyODZkVVJNYkJFU0VoR1pTS3ZWeUpyLys5YjJCQUVrVnJnZ3JuK1E5bE1LK1JZTHJnNzlBcVk4Tml6VktuczBMaGNZZnZRSWM5aG0vanF0S3ZvZGZlQ3UrM29ERytvN3BuTlBZMVI1bzVYdTRINHpBcWJQZlp3OHRnPT0iLCJzIjoiNlFpRkdpamQzRy81WnhMRFdWTzlsQT09IiwiaSI6Ii9wTTNaWE4wb0FxS0xBeDkifQ==" style="font-family: 'Gruppo', cursive; font-size: 24px; text-decoration: none; color: #908e8b">Download</a>
        <hr style="border: 1px solid grey; width: 800px">
    </div>
  </div>
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
