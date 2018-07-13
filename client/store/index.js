import AppStateClass from './app-state'
import ProductsClass from './products'

export const AppState = AppStateClass
export const Products = ProductsClass

export default {
  AppState,
  Products
}

export const createStoreMap = () => (
  {
    appState: new AppState(),
    products: new Products()
  }
)
