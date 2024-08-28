<template>
  <footer
    class="bg-white w-full py-20 md:space-y-0 flex flex-col items-center border-t-2 border-gray-100"
  >
    <div
      class="w-full flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 mb-14"
    >
      <div
        v-for="section in footerSections"
        :key="section.title"
        class="flex flex-col space-y-4 lg:w-44 xl:w-56 2xl:w-50 text-gray-800"
      >
        <h4
          class="text-base lg:text-lg font-semibold border-b-2 border-gray-300"
        >
          {{ section.title }}
        </h4>
        <div class="flex flex-col space-y-4">
          <div v-for="item in section.items" :key="item.text">
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              class="text-gray-600 hover:text-[#008ECC] hover:font-bold"
            >
              {{ item.text }}
            </a>
            <NuxtLink
              v-else-if="item.route"
              :to="item.route"
              class="text-gray-600 hover:text-[#008ECC] hover:font-bold"
            >
              {{ item.text }}
            </NuxtLink>
            <p v-else class="text-gray-600">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="w-full border-gray-300" />
    <div class="text-gray-600 text-center p-2 mt-5">
      <p>&copy; {{ year }}. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "downbar",
  data() {
    return {
      year: new Date().getFullYear(),
      footerSections: [
        {
          title: "Contacte-nos",
          items: [
            { text: "Email: contato@empresa.com" },
            { text: "Telefone: +123 456 789" },
            { text: "Instagram", link: "https://www.instagram.com/empresa/" },
            {
              text: "LinkedIn",
              link: "https://www.linkedin.com/company/empresa/",
            },
          ],
        },
        {
          title: "Categorias",
          items: [
            { text: "Aparelhos", route: "/aparelhos" },
            { text: "Celulares", route: "/celulares" },
            { text: "Eletrônicos", route: "/eletronicos" },
            { text: "Maquinaria", route: "/maquinaria" },
          ],
        },
        {
          title: "Serviços",
          items: [
            { text: "Sobre Nós", route: "/sobre-nos" },
            { text: "FAQ", route: "/faq" },
            { text: "Termos e Condições", route: "/termos-condicoes" },
            { text: "Política de Privacidade", route: "/politica-privacidade" },
          ],
        },
      ],
    };
  },
});
</script>
