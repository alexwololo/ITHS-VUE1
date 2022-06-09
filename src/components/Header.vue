<template>
  <header>
    <h1>{{ title }}</h1>
    <div id="nav">
      <RouterLink to="/">Hem</RouterLink> |
      <RouterLink to="/zooanimals">ZooAnimals</RouterLink>
    </div>
  </header>
</template>
<!--

// Vue js uppdelat i 3 avsnitt, dvs. mall, script och style.
  // Mall innehåller HTML-kod.
  // script är där vi lägger till JS-kod. name är komponentens namn medan
  // Props är ett objekt som innehåller egenskaper som används i komponenten.
  // style innehåller css-kod.

-->
<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 10px;
  background: #00aff0;
}

/* h1 {
  color: white;
  text-align: center;
} */

$paragraph-color: rgb(250, 250, 250);

h1 {
  color: $paragraph-color;
  text-align: center;
  margin: 50px 100px 40px 100px;
}

#nav {
  padding: 30px;
}

#nav a {
  padding: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: black;
  text-decoration: none;
}
</style>
