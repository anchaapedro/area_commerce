<template>
  <div class="flex w-full h-full">
    <div
      :class="`flex w-full h-full items-center justify-center bg-${errorPage.variant} bg-opacity-60`"
    >
      <div class="flex flex-col space-y-4">
        <div
          class="flex font-bold text-white px-16 py-8 space-x-4 rounded-md"
          :class="`bg-${errorPage.variant} bg-opacity-90`"
        >
          <div class="flex flex-col space-y-8">
            <span class="text-8xl">{{ errorPage.status }}</span>
            <div class="flex text-4xl" v-html="errorPage.message" />
            <nuxt-link to="/dashboard" class="text-sm font-normal"
              >Ir a Página Inicial</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorPage() {
      const error = {};

      if (this.error.statusCode === 500) {
        error.status = this.error.statusCode;
        error.message =
          "Erro Interno do Servidor, <br /> contacte um tecnico para solucionar o problema";
        error.variant = "danger-default";
      } else if (this.error.statusCode === 400) {
        error.status = this.error.statusCode;
        error.message =
          "Bad Request, <br /> o servidor não pode processar a requisição";
        error.variant = "gray-300";
      } else if (this.error.statusCode === 403) {
        error.status = this.error.statusCode;
        error.message = "Acesso Proibido. <br /> Não tem permissão";
        error.variant = "yellow-700";
      } else if (this.error.statusCode === 404) {
        error.status = this.error.statusCode;
        error.message = "Whoops... esta página <br /> não foi encontrada.";
        error.variant = "secondary-default";
      } else {
        error.status = this.error.statusCode;
        error.message =
          "Algo deu errado... <br /> Contacte a equipe de suporte.";
        error.variant = "gray-300";
      }
      return error;
    },
  },
};
</script>
