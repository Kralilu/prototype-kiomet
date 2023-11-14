<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <header>
    <div>
      <HelloWorld msg="JDIS Games Wish II" />
    </div>
  </header>
  <main class="mb-5">
    <TheWelcome />
  </main>
  <div class="mt-20 flex justify-center space-x-10">
    <img alt="Vue logo" class="logo" src="@/assets/logo1.png" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="@/assets/logo2.png" width="125" height="125" />
  </div>
</template>
