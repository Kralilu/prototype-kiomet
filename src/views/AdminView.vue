<template>
    <Toast />
    <div class="grid gap-4">
        <InputBox label="Taille de la carte" />
        <InputBox label="Vitesse de déplacement des unités" />
        <InputBox label="Vitesse de transformation des terrains" />
        <InputBox label="Durée de la partie" />
        <InputBox label="Vitesse de création des unités" />
        <Button @click="showTopLeft">Confirm</Button>
    </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import InputBox from "@/components/InputBox.vue";
import Toast from "primevue/toast";

import { useToast } from 'primevue/usetoast';

const toast = useToast();

const showTopLeft = () => {
    console.log("A")
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
};
</script>
