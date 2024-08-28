<template>
  <div class="flex flex-wrap lg:flex-row min-h-screen antialised">
    <topbar class="w-full fixed top-0 left-0 z-30" />
    <main class="flex flex-col mx-auto container max-sm:px-5">
      <nuxt />
      <downbar class="w-full" />
    </main>
  </div>
</template>

<script>
import Topbar from "~/components/layout/Topbar.vue";
import downbar from "~/components/layout/downbar.vue";

export default {
  name: "Default",
  components: {
    Topbar,
    downbar,
  },
};
</script>
