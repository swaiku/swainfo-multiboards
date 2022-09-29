<script setup lang="ts">
import {Website} from "assets/data/websites";

interface cardProps {
  website: Website;
}

const props = defineProps<cardProps>();
const data = ref([]);

onMounted(async () => {
  const response = await fetch(props.website.rss.toString(), {
    mode: "no-cors",
  }).then(response => response.text()).then(response => console.log(response))
      /*.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => console.log(data));*/
});
</script>

<template>
  <div :style="`background-color: ${website.color};`" class="rounded shadow">
    <NuxtLink class="text-lg font-bold" :to="website.url.toString()">{{ website.title }}</NuxtLink>
    <ul>
    </ul>
  </div>
</template>

<style scoped>

</style>
