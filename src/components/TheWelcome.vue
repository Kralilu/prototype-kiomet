<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <div class="ml-20">
    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Jeu</template>
      <RouterLink to="/jeu" class="text-green-200 underline">Démarrer une partie!</RouterLink>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <i class="pi pi-file-edit"></i>
      </template>
      <template #heading>Inscription</template>
      <RouterLink to="/inscription" class="text-green-200 underline">Inscrire son équipe.</RouterLink>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <i class="pi pi-bars"></i>
      </template>
      <template #heading>Règles</template>
      <RouterLink to="/rule" class="text-green-200 underline">Les règles du jeu.</RouterLink>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>
      <RouterLink to="/documentation" class="text-green-200 underline">La documentation officielle</RouterLink>
      du jeu.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Outils</template>

      <RouterLink to="/instruction" class="text-green-200 underline">Les instructions.</RouterLink>

    </WelcomeItem>


    <WelcomeItem>
      <template #icon>
        <i class="pi pi-chart-line"></i>
      </template>
      <template #heading>Tableau des scores</template>
      <RouterLink to="/scoreboard" class="text-green-200 underline">Le scoreboard</RouterLink>
      global.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <i class="pi pi-code"></i>
      </template>
      <template #heading>Admin</template>
      <RouterLink to="/admin" class="text-green-200 underline">Modifier les paramètres globaux.</RouterLink>
    </WelcomeItem>

  </div>
</template>
