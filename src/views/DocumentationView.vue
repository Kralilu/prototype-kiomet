<template>
  <ul>
    <li v-for="n in 10" :key="n" class="mt-5">
      <p class="font-bold">Règle {{ n }}</p>
      Hello World!
    </li>
  </ul>
</template>