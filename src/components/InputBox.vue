<template>
    <div class="flex flex-col">
        <label :for="props.label" class="mb-2">{{ props.label }}</label>
        <InputNumber class="text-black border-r-2" v-model="val" :id="props.label" />
    </div>
</template>
  
<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import { ref } from 'vue';

const val = ref();
const props = defineProps<{
    label: string
}>()

</script>