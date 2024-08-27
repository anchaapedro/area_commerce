<template>
  <footer
    class="bg-blue-500 w-full px-4 py-20  md:space-y-0 md:px-20 flex flex-col items-center"
  >
    <div
      class="w-full flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-64 mb-14"
    >
      <div
        class="flex flex-col space-y-4 lg:w-44 xl:w-56 2xl:w-50 text-white"
      >
        <h4
          class="text-base lg:text-lg font-semibold border-b-2 border-footer-default"
        >
          Contacte-nos
        </h4>
        <div class="flex flex-col space-y-4">
          <p class="text-footer-gray">
            Email: contato@empresa.com
          </p>
          <p class="text-footer-gray">
           Telefone: +123 456 789
          </p>
          <div class="flex flex-col space-y-2">
            <a
              href="https://www.instagram.com/empresa/"
              target="_blank"
              class="text-footer-gray flex items-center hover:text-purple-default hover:font-semibold"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/empresa/"
              target="_blank"
              class="text-footer-gray flex items-center hover:text-purple-default hover:font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col space-y-4 lg:w-44 xl:w-56 2xl:w-50 text-white"
      >
        <h4
          class="text-base lg:text-lg font-semibold border-b-2 border-footer-default"
        >
          Categorias
        </h4>
        <div class="flex flex-col space-y-4">
          <NuxtLink
            to="/aparelhos"
            class="text-footer-gray flex items-center hover:text-purple-default hover:font-bold"
          >
            Aparelhos
          </NuxtLink>

          <NuxtLink
            to="/celulares"
            class="text-footer-gray flex items-center hover:text-purple-default hover:font-bold"
          >
            Celulares
          </NuxtLink>

          <NuxtLink
            to="/eletronicos"
            class="text-footer-gray flex items-center hover:text-purple-default hover:font-bold"
          >
            Eletrônicos
          </NuxtLink>

          <NuxtLink
            to="/maquinaria"
            class="text-footer-gray flex items-center hover:text-purple-default hover:font-bold"
          >
            Maquinaria
          </NuxtLink>
        </div>
      </div>

      <div
        class="flex flex-col space-y-4 lg:w-44 xl:w-56 2xl:w-50 text-white"
      >
        <h4
          class="text-base lg:text-lg font-semibold border-b-2 border-footer-default"
        >
          Serviços
        </h4>
        <div class="flex flex-col space-y-4">
          <NuxtLink
            to="/sobre-nos"
            class="text-footer-gray flex items-center hover:text-purple-default hover:font-bold"
          >
            Sobre Nós
          </NuxtLink>

          <NuxtLink
            to="/faq"
            class="text-footer-gray flex items-center hover:text-purple-default hover:font-bold"
          >
            FAQ
          </NuxtLink>

          <NuxtLink
            to="/termos-condicoes"
            class="text-footer-gray flex items-center hover:text-purple-default hover:font-bold"
          >
            Termos e Condições
          </NuxtLink>

          <NuxtLink
            to="/politica-privacidade"
            class="text-footer-gray flex items-center hover:text-purple-default hover:font-bold"
          >
            Política de Privacidade
          </NuxtLink>
        </div>
      </div>
    </div>
    <hr class="w-full border-footer-default " />
    <div class="text-white text-center p-2 mt-5">
      <p>&copy; {{ year }}. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'downbar',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
})
</script>

<style scoped>
.text-footer-gray {
  color: #ffffff;
}
.border-footer-default {
  border-color: #ffffff;
}
</style>
