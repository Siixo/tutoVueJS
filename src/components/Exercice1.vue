<template>
  <!-- Card 1 -->
  <div class="mx-auto w-full max-w-lg">
    <div class="bg-emerald-700 text-white p-6 rounded-lg shadow-lg">
      <h1 class="text-lg font-bold">Exercice 1:</h1>
      <span class="flex items-center">
        <span class="h-px flex-1 bg-gray-300"></span>
        <span class="h-px flex-1 bg-gray-300"></span>
      </span>
      <p class="text-justify">{{ name1 }}</p>
      <p class="text-justify">{{ name2 }}</p>
    </div>
  </div>

  <!-- Full-width separator -->
  <div class="w-screen border-t border-white my-4 opacity-30"></div>
  <div class="w-screen border-t border-white my-4 opacity-30"></div>

  <!-- Card 2 -->
  <div class="mx-auto w-full max-w-lg">
    <div
      class="bg-emerald-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
    >
      <h1 class="text-lg font-bold mb-2">Exercice 2:</h1>
      <div class="flex flex-col gap-4 text-center items-center">
        <img :src="mario.picture" class="w-32 h-32 rounded-full border-1 border-white " />
        <h2 class="text-xl font-bold">{{ mario.name }}</h2>
        <input class="text-center border-1 border-white" type="text" :value="mario.name" />
        <p>Age: {{ mario.age }}</p>
        <p>Age + 10 = {{ addAge(mario.age) }}</p>
        <p>Chiffre préféré: {{ getRandomInt() }}</p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
let name1: string = "Jean";
let name2: string = "Pierre";

class Person {
  constructor(
    public name: string,
    public age: number,
    public picture: any
  ) {}
}

let mario = new Person("Mario", 30, "/mario.jpeg");

function addAge(age) {
  return (age += 10);
}

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}
</script>
