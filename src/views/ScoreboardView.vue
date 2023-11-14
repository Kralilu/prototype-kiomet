<template>
    <Card class="w-full h-full bg-slate-200 text-gray-700 shadow-md rounded-md p-10">
        <template #header>
            <div class="wrapper">
                <HelloWorld msg="Scoregraph" />
            </div>
        </template>
        <template #content>
            <Chart type="line" :height="400" :width="600" :data="chartData" :options="chartOptions" class="w-full h-full" />
        </template>
    </Card>
</template>

<script lang="ts" setup>
import Chart from "primevue/chart";
import Card from 'primevue/card';
import HelloWorld from "@/components/HelloWorld.vue";

import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});


const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                label: 'Équipe 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            },
            {
                label: 'Équipe 2',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--pink-500'),
                tension: 0.4
            },
            {
                label: 'Équipe 3',
                data: [1, 120, 40, 19, 86, 67, 90],
                fill: false,
                tension: 0.4
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Nombre de parties',
                },
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Points accumulés',
                },
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>