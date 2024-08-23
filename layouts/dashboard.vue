<template>
  <div class="flex flex-wrap lg:flex-row min-h-screen antialised">
    <topbar class="w-full fixed top-0 left-0 z-30" />
    <div class="flex w-full lg:pt-14 overscroll-none overflow-hidden h-screen">
      <sidebar />
      <nuxt
        class="flex-1 max-w-full px-4 pt-16 lg:p-8 bg-tertiary-default overflow-y-auto"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Sidebar from "~/components/layout/Sidebar.vue";
import Topbar from "~/components/layout/Topbar.vue";
export default Vue.extend({
  name: "Default",
  components: {
    Topbar,
    Sidebar,
  },
});
</script>
