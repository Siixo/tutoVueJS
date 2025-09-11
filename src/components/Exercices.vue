<template>
  <!-- Exercice 1 -->
  <div class="mx-auto min-w-md max-w-lg m-10">
    <div
      class="bg-gray-800 text-white p-6 rounded-lg shadow-lg border-1 border-white flex flex-col items-center justify-center"
    >
      <h1 class="text-2xl border-1 border-white p-2 px-8">Exercices</h1>
      <div class="w-3/4 border-t border-white my-4 opacity-30"></div>
      <div class="w-full border-t border-white my-4 opacity-30"></div>

      <h1 class="text-lg font-bold">Exercice 1:</h1>

      <p class="text-justify">{{ name1 }}</p>
      <p class="text-justify">{{ name2 }}</p>

      <div class="w-full border-t border-white my-4 opacity-30"></div>
      <div class="w-3/4 border-t border-white my-4 opacity-30"></div>

      <h1 class="text-lg font-bold mb-2">Exercice 2:</h1>
      <div class="flex flex-col gap-4 text-center items-center">
        <img
          :src="mario.picture"
          class="w-32 h-32 rounded-full border-1 border-white"
        />
        <h2 class="text-xl font-bold">{{ mario.name }}</h2>
        <input
          class="text-center border-1 border-white"
          type="text"
          :value="mario.name"
        />
        <p>Age: {{ mario.age }}</p>
        <p>Age + 10 = {{ addAge(mario.age) }}</p>
        <p>Chiffre préféré: {{ getRandomInt() }}</p>
      </div>
      <div class="w-3/4 border-t border-white my-4 opacity-30"></div>
      <div class="w-full border-t border-white my-4 opacity-30"></div>
      <h1 class="text-lg font-bold mb-2">Exercice 3:</h1>

      <div class="flex items-center gap-4">
        <button @click.prevent="decrement" class="hover:cursor-pointer">
          <svg
            class="h-8 w-8"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <title>minus-square</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-152.000000, -1035.000000)"
                fill="#fff"
              >
                <path
                  d="M174,1050 L162,1050 C161.448,1050 161,1050.45 161,1051 C161,1051.55 161.448,1052 162,1052 L174,1052 C174.552,1052 175,1051.55 175,1051 C175,1050.45 174.552,1050 174,1050 L174,1050 Z M182,1063 C182,1064.1 181.104,1065 180,1065 L156,1065 C154.896,1065 154,1064.1 154,1063 L154,1039 C154,1037.9 154.896,1037 156,1037 L180,1037 C181.104,1037 182,1037.9 182,1039 L182,1063 L182,1063 Z M180,1035 L156,1035 C153.791,1035 152,1036.79 152,1039 L152,1063 C152,1065.21 153.791,1067 156,1067 L180,1067 C182.209,1067 184,1065.21 184,1063 L184,1039 C184,1036.79 182.209,1035 180,1035 L180,1035 Z"
                  id="minus-square"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <p>Count: {{ count }}</p>
        <button @click.prevent="increment" class="hover:cursor-pointer">
          <svg
            class="h-8 w-8"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <title>plus-square</title>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-100.000000, -1035.000000)"
                fill="#fff"
              >
                <path
                  d="M130,1063 C130,1064.1 129.104,1065 128,1065 L104,1065 C102.896,1065 102,1064.1 102,1063 L102,1039 C102,1037.9 102.896,1037 104,1037 L128,1037 C129.104,1037 130,1037.9 130,1039 L130,1063 L130,1063 Z M128,1035 L104,1035 C101.791,1035 100,1036.79 100,1039 L100,1063 C100,1065.21 101.791,1067 104,1067 L128,1067 C130.209,1067 132,1065.21 132,1063 L132,1039 C132,1036.79 130.209,1035 128,1035 L128,1035 Z M122,1050 L117,1050 L117,1045 C117,1044.45 116.552,1044 116,1044 C115.448,1044 115,1044.45 115,1045 L115,1050 L110,1050 C109.448,1050 109,1050.45 109,1051 C109,1051.55 109.448,1052 110,1052 L115,1052 L115,1057 C115,1057.55 115.448,1058 116,1058 C116.552,1058 117,1057.55 117,1057 L117,1052 L122,1052 C122.552,1052 123,1051.55 123,1051 C123,1050.45 122.552,1050 122,1050 L122,1050 Z"
                  id="plus-square"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div class="w-full border-t border-white my-4 opacity-30"></div>
      <div class="w-3/4 border-t border-white my-4 opacity-30"></div>

      <!-- Exercice 4 -->
      <h1 class="text-lg font-bold mb-4">Exercice 4:</h1>
      <input
        class="mb-2 text-center border-1 border-white p-1"
        v-model="inputValue"
        type="text"
        placeholder="Taper quelque chose"
      />
      <span class="block my-2 break-all w-full text-center">{{
        inputValue
      }}</span>
      <input
        class="my-2 text-center opacity-80 border-1 border-white p-1"
        v-model="inputValue2"
        v-on:keypress.enter="setInputValue"
        placeholder="Entrer du texte ici"
      />
      <span class="my-2">{{ inputValueDisplay }}</span>

      <div class="w-full border-t border-white my-4 opacity-30"></div>
      <div class="w-3/4 border-t border-white my-4 opacity-30"></div>

      <!-- Exercice 5 -->

      <div
        :style="dynamicStyle"
        class="border-1 border-white bg-white p-4 rounded-2xl"
      >
        <button
          @click="changeColor"
          class="p-2 border-white border-1 rounded-2xl bg-red-600 hover:cursor-pointer"
        >
          Cliquer ici pour changer le style
        </button>
      </div>
      <button
        :class="isActive ? 'text-red-500' : 'text-blue-500'"
        @click="isActive = !isActive"
      >
        Cliquer ici
      </button>
      <div
        :class="[
          'rounded-2xl p-8 flex flex-col h-64 transition-colors',
          isDark ? 'bg-black' : 'bg-white',
        ]"
      >
        <h1 :class="['m-4', isDark ? 'text-white' : 'text-black']">
          C'est une carte dynamique
        </h1>
        <button
          @click="isDark = !isDark"
          :class="[
            'bg-black rounded-2xl p-4 m-2 mt-auto hover:cursor-pointer',
            isDark ? 'bg-white text-black' : 'bg-black text-white',
          ]"
        >
          Dark mode
        </button>
      </div>
      <div class="flex flex-col items-center p-4 m-4">
        <input
          v-model="color"
          @keypress.enter="setColor"
          class="p-2 border border-white"
          placeholder="Entrer une couleur"
        />
        <p :style="{ color: textColor }" class="p-4 m-4">
          Ce texte change de couleur (normalement)/p>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from "vue";

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

const inputValue = ref("");
const inputValue2 = ref("");
const inputValueDisplay = ref("");

function setInputValue() {
  inputValueDisplay.value = inputValue2.value;
}

const count = ref(0);

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}

watch(count, (newVal) => {
  if (newVal > 20) {
    count.value = 0;
  }
});

interface DynamicStyle {
  color: string;
}

const dynamicStyle: Ref<dynamicStyle> = ref({
  color: "white",
});

function changeColor() {
  dynamicStyle.value.color =
    dynamicStyle.value.color === "white" ? "green" : "white";
}

const isActive = ref(false);
const isDark = ref(false);

const color = ref("");
const textColor = ref("black");

function setColor() {
  textColor.value = color.value;
}
</script>
