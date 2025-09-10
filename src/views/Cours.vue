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
</template>

<script setup>
import { ref } from 'vue';
import attributeBinding from '../components/attribute-binding.vue';
import inlineTemplating from '../components/inline-templating.vue';
import textInterpolation from '../components/text-interpolation.vue';
import eventBinding from '../components/event-binding.vue';
</script>