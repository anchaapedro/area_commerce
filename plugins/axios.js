export default function ({ $axios }, inject) {
  // Main api custom axios instance
  const mainApi = $axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
    },
  });

  const accessToken = localStorage.getItem("auth.Bearerlocal")
    ? localStorage.getItem("auth.Bearerlocal")
    : null;

  if (accessToken) {
    mainApi.defaults.headers.common.Authorization = accessToken;
  }

  mainApi.setBaseURL(process.env.MAIN_API_HOST);

  // Inject to context as processApi
  inject("mainApi", mainApi);
}
