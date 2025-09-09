<template>
  <div class="bg-gray-600 text-white p-6 rounded-lg shadow-lg">
    <h1 class="text-lg font-bold">Exercice 1:</h1>
    <span class="flex items-center">
      <span class="h-px flex-1 bg-gray-300"></span>

      <span class="h-px flex-1 bg-gray-300"></span>
    </span>

    <p class="tex-justify">{{ name1 }}</p>
    <p class="tex-justify">{{ name2 }}</p>
  </div>
</template>

<script setup lang="ts">
let name1: string = "Jean";
let name2: string = "Pierre";
</script>
