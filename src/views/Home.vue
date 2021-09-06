<template>
  <div class="home">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
/**
 * Returns the sum of a and b
 * 
 * @returns {number}
 */
    nc() {
      return 'dcdcd' ;
    },
  },
  computed: {},
};
</script>
