export default function ({ $axios }, inject) {
  // Main api custom axios instance
  const mainApi = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })

  const accessToken = localStorage.getItem('auth.Bearerlocal')
    ? localStorage.getItem('auth.Bearerlocal')
    : null

  if (accessToken) {
    mainApi.defaults.headers.common.Authorization = accessToken
  }

  mainApi.setBaseURL(process.env.MAIN_API_HOST)

  // Inject to context as processApi
  inject('mainApi', mainApi)

  // Authentication api custom axios instance
  const authApi = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })

  authApi.setBaseURL(process.env.AUTH_API_HOST)

  // Inject to context as $authApi
  inject('authApi', authApi)

  // Dynamic forms api custom axios instance
  const dynamicFormsApi = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })

  dynamicFormsApi.defaults.headers.common.Authorization = accessToken

  dynamicFormsApi.setBaseURL(process.env.DYNAMIC_FORMS_API_HOST)

  // Inject to context as $authApi
  inject('dynamicFormsApi', dynamicFormsApi)

  // entity api custom axios instance
  const entitiesApi = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })

  if (accessToken) {
    entitiesApi.defaults.headers.common.Authorization = accessToken
  }

  entitiesApi.setBaseURL(process.env.ENTITY_API_HOST)

  // Inject to context as entity
  inject('entitiesApi', entitiesApi)
}
