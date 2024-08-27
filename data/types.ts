export interface ISeller {
  name: string
  package: string
  contact: string
  email: string
  province: string
  lastActivity: string
  description: string
  products: Object
}

interface IDiscount {
  hasDiscount: boolean
  description: string
}

export interface IPricing {
  title: string
  description: string
  price: number
  discount: IDiscount
  hasAction: boolean
}

export interface IOptions {
  label: string
  value: string
}

export interface IStepper {
  step: number
  title: string
  description: string
  isActive: boolean
}

export interface IProduct {
  name: string
  description: string
  category: string
  price: number
  quantity: number
  availability: boolean
  attachments?: Array<any>
  subcategory?: any
  type?: any
}

export interface ISubcategory {
  id: number
  subcategoryName: string
  description: string
}

export interface ICategory extends ISubcategory {
  categoryName: ISubcategory['subcategoryName']
}

export interface IProductType {
  id: number
  name: string
}

export interface IProductResponse {
  id: number
  name: string
  description: string
  subcategory: ISubcategory
  productType: IProductType
  price: number
  quantity: number
  availability: boolean
}

export interface IPaymentInfo {
  icon: string
  title: string
  description: string
  action: {
    title: string
    handle: string
  }
}

export interface IPrivateRoutes {
  fullPath: string
  path: string
  name: string
  type: string
}

export interface IAccountsReq {
  name: string
  password: string
  phoneNumber: string
  address: string
  isCompany: boolean
  description: string
  email: string
  districtId: number
  roles: Array<number>
}

export interface ICollapse {
  label: string
  subCategories: Array<any>
}

export interface IProfileOption {
  title: string
  role: string
  icon: any
  action?: () => void
}
