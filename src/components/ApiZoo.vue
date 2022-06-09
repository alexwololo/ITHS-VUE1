<script>
  export default {
    created() {
      this.fetchZoo()
    },
    data() {
      return { animals: null }
    },
    methods: {
      fetchZoo() {
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
          .then((response) => response.json())
          .then((result) => {
            this.animals = result
          })
      }
    }
  }
</script>

<template>
<div>
  <ol>
    <li v-for="animal in animals">{{ animal.name }}</li>
  </ol>
  <input @click="fetchZoo" type="button" value="Visa fler djur">
</div>
</template>

<style scoped>

  ol {
    background: #ff9999;
    padding: 20px;

  }
  ol li {
    background: #ffe5e5;
    padding: .3rem;
    margin: 0 3rem;
    border: 2rem;
  }

  input {
    background-color: #219125;
    border-radius: 1rem;
    /* border: none; */
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    text-align: left;
    margin-bottom: 1rem;
  }
</style>
