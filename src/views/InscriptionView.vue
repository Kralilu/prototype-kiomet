<template>
    <h1 class="text-3xl">Inscrire son équipe</h1>
    <div class="grid gap-6 mt-4 font-semibold">
        <InputWord label="Le nom de ton équipe" />
        <h1 v-if="teamId">Voici votre identifiant : {{ teamId }}</h1>
        <Button class="text-center" @click="showTopLeft" label="Confirmer" icon="pi pi-check" severity="danger" />
    </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";

import InputWord from "@/components/InputWord.vue";
import { ref, type Ref } from "vue";


let teamId: Ref<string | null> = ref(null);

const showTopLeft = () => {
    teamId.value = generateRandomString();
};

const generateRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    console.log(result)
    return result;
};
</script>