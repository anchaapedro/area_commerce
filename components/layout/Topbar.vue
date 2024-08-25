<template>
  <nav class="bg-gray-800 p-6">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-xl font-bold">
        <router-link to="/">MEGAMART</router-link>
      </div>

      <div class="flex space-x-4">
        <router-link
          to="/sign-up"
          class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex flex-row gap-3"
          active-class="bg-blue-600"
        >
        <login />
          Sign in
        </router-link>
        <router-link
          to="/sign-up"
          class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex flex-row gap-3"
          active-class="bg-blue-600"
        >
        <shopping />
         Cart
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import login from '@/assets/icons/login.vue'
import shopping from '@/assets/icons/shopping.vue'
export default {
  name: 'Navbar',
  components: {
    login,
    shopping
  }
}
</script>
