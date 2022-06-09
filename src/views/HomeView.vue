<script>
import ApiZoo from '../components/ApiZoo.vue';
import CounterButton from '../components/CounterButton.vue';

export default {
  components: {
    ApiZoo,
    CounterButton,
  },
  data() {
    return { name: '' };
  },
};
</script>

<template>
  <h1>Hem</h1>
  <p>Kontrollera att dina tangenter sitter på rätt plats.</p>
  <input v-model="name" />
  <p>Du skrev:</p>
  <br />
  <p>{{ name }}</p>
  <CounterButton />
</template>
