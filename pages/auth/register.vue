<template>
  <div
    class="flex w-full h-screen justify-center items-center bg-gray-50 overflow-hidden"
  >
    <div class="flex w-1/2 justify-center items-center">
      <img
        src="https://i.pinimg.com/564x/e6/31/b1/e631b12e836d782454638dc68775c9bf.jpg"
        class="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
    <div class="w-1/2 p-8 flex flex-col justify-center items-center">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Cadastro</h1>
        <p class="text-gray-600">Preencha os campos abaixo para se cadastrar</p>
      </div>
      <form @submit.prevent="submit" class="grid grid-cols-2 gap-5 w-[40rem]">
        <TextInput
          v-model="form.name"
          label="Nome"
          placeholder="Nome"
          type="text"
        />
        <TextInput
          v-model="form.email"
          label="Email"
          placeholder="Email"
          type="email"
        />
        <TextInput
          v-model="form.phone"
          label="Telefone"
          placeholder="Telefone"
          type="tel"
        />
        <TextInput
          v-model="form.address"
          label="Endereço"
          placeholder="Endereço"
          type="text"
        />
        <TextInput
          v-model="form.city"
          label="Cidade"
          placeholder="Cidade"
          type="text"
        />
        <TextInput
          v-model="form.country"
          label="País"
          placeholder="País"
          type="text"
        />
        <div class="flex justify-center mt-8 w-full col-span-2">
          <button
            class="bg-blue-500 text-white w-full py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/common/inputs/TextInput.vue";
export default {
  layout: "blank",
  components: {
    TextInput,
  },
  data: () => ({
    form: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
    },
  }),
  methods: {
    async submit() {
      this.$mainApi
        .post("/signup", {
          ...this.form,
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
