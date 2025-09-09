<template>
  <h1
    class="bg-gradient-to-tr from-emerald-700 to-sky-400 bg-clip-text text-transparent text-9xl font-extrabold mb-8"
  >
    Tutoriel Vue.js
  </h1>
  <div>
    <a
      target="_blank"
      class="inline-block rounded-sm border border-emerald-400 bg-emerald-600 px-12 py-3 text-md font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
      href="https://vuejs.org/guide/quick-start.html"
    >
      Doc Officielle Vue.js
    </a>
  </div>
  <div class="w-full border-t-1 border-white my-6 opacity-30"></div>
  <div class="w-full border-t-1 border-white my-6 opacity-30"></div>
  <div class="h-1/3">
    <Exercice1 />
  </div>
</template>

<script setup>
import Exercice1 from "../components/Exercice1.vue";
</script>
