<script setup lang="ts">
import {websites} from "assets/data/websites";
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 2xl:w-2xl xl:w-xl lg:w-lg m-auto text-center p-4 lg:p-0">
    <Card v-for="site in websites" :key="site" class="col-span-1" :website="site" />
  </div>
</template>
