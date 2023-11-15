<template>
    <Toast />
    <h1 class="text-3xl">Modifier les propriétés</h1>
    <div class="grid gap-6 mt-4 font-semibold">
        <InputBox label="Taille de la carte" />
        <InputBox label="Vitesse de déplacement des unités" />
        <InputBox label="Vitesse de transformation des terrains" />
        <InputBox label="Durée de la partie" />
        <InputBox label="Vitesse de création des unités" />
        <Button class="text-center" @click="showTopLeft" label="Confirmer" icon="pi pi-check" severity="danger"/>
    </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import InputBox from "@/components/InputBox.vue";
import Toast from "primevue/toast";

import { useToast } from 'primevue/usetoast';

const toast = useToast();

const showTopLeft = () => {
    toast.add({ severity: 'info', summary: 'Propriétés modifiées avec succès', detail: 'Les changements seront appliqués dès la prochaine partie.', life: 3000 });
};
</script>
