<template>
  <nav class="bg-white p-6 shadow-sm border-b-2">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-xl font-bold">
        <router-link to="/" class="text-blue-500 hover:text-blue-800"
          >MEGAMART</router-link
        >
      </div>

      <div class="flex divide-x-2">
        <router-link
          to="/sign-up"
          class="px-4 py-2 rounded hover:text-[#008ECC] transition duration-300 flex flex-row gap-3"
          active-class="bg-blue-600"
        >
          <div class="text-blue-400">
            <login />
          </div>

          Sign in
        </router-link>
        <router-link
          to="/sign-up"
          class="px-4 py-2 rounded hover:text-[#008ECC] transition duration-300 flex flex-row gap-3"
          active-class="bg-blue-600"
        >
          <div class="text-blue-400">
            <shopping />
          </div>

          Cart
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import login from "@/assets/icons/login.vue";
import shopping from "@/assets/icons/shopping.vue";

export default {
  name: "Navbar",
  components: {
    login,
    shopping,
  },
};
</script>
