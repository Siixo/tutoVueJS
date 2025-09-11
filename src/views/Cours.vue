<template>
  <attributeBinding />

  <div class="w-full border-t-1 border-white my-4 opacity-30"></div>
  <div class="w-full border-t-1 border-white my-4 opacity-30"></div>

  <inlineTemplating />

  <div class="w-full border-t-1 border-white my-4 opacity-30"></div>
  <div class="w-full border-t-1 border-white my-4 opacity-30"></div>

  <textInterpolation />

  <div class="w-full border-t-1 border-white my-4 opacity-30"></div>
  <div class="w-full border-t-1 border-white my-4 opacity-30"></div>

  <eventBinding />

  <div class="w-full border-t-1 border-white my-4 opacity-30"></div>
  <div class="w-full border-t-1 border-white my-4 opacity-30"></div>

  <computedProperties />

  <div class="w-full border-t-1 border-white my-4 opacity-30"></div>
  <div class="w-full border-t-1 border-white my-4 opacity-30"></div>

  <dynamicStylingTs />
</template>

<script setup>
import { ref } from "vue";
import attributeBinding from "../components/cours/attribute-binding.vue";
import inlineTemplating from "../components/cours/inline-templating.vue";
import textInterpolation from "../components/cours/text-interpolation.vue";
import eventBinding from "../components/cours/event-binding.vue";
import computedProperties from "../components/cours/computed-properties.vue";
import dynamicStylingTs from "../components/cours/dynamic-styling-ts.vue";
</script>
