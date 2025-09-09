<template>
  <div
    class="bg-gray-600 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
  >
    <h1 class="text-lg font-bold mb-2">Exercice 2:</h1>
    <div class="flex flex-col gap-4 text-center items-center">
      <img :src="mario.picture" class="w-32 h-32 rounded-full" />
      <h2 class="text-xl font-bold">{{ mario.name }}</h2>
      <input class="text-center" :type="text" :placeholder="mario.name" />
      <p>Age: {{ mario.age }}</p>
      <p>Age + 10 = {{ addAge(mario.age) }}</p>
      <p>Chiffre préféré: {{ getRandomInt() }}</p>
    </div>
  </div>
</template>

<script setup>
class Person {
  constructor(name, age, picture) {
    this.name = name;
    this.age = age;
    this.picture = picture;
  }
}

let mario = new Person("Mario", 30, "/mario.jpeg");

function addAge(age) {
  return (age += 10);
}

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}
</script>
