<script>
import ApiZoo from '../components/ApiZoo.vue';

export default {
  components: {
    ApiZoo,
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      message: 5 + 5,
      imageSource: '/assets/barn.jpg',
    };
  },
};
</script>

<template>
  <h1>ZooAnimals</h1>
  <div class="snippet-item">
    <label class="snippet-title">Här visas {{ message }} olika djurnamn</label>
    <ApiZoo />
    <img alt="bild" :src="imageSource" />
  </div>
</template>

<style scoped>
.snippet-item {
  width: 35rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  background: #00aff0;
  padding: 30px;
  color: rgb(0, 0, 0);
}

.snippet-title {
  font-size: 24px;
  text-align: left;
  color: white;
}
</style>
