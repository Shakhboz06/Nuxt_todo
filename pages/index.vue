<template>
  <div id="home">

  </div>
</template>

<script>
import { style } from "~/Styles/CSS/style.css";
export default {
  name: "IndexPage",
  layout: "default",
  mounted(){
    this.$router.push({path:'/Dashboard'})
  }
};
</script>
