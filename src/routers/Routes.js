import Home from '../components/pages/Home/Home'
import Classify from '../components/pages/Classify/Classify'
import Cart from '../components/pages/Cart/Cart'
import My from '../components/pages/My/My'
import Login from '../components/pages/Login/Login'
import Register from '../components/pages/Register/Register'
import Setting from '../components/pages/Setting/Setting'
import Article from '../components/pages/Article/Article'
import ProductList from '../components/pages/ProductList/ProductList'
import List from '../components/pages/ProductList/Components/List'
import Product from '../components/pages/Product/Product'
var routes = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify
  },
  {
    path: '/log',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: ProductList,
  },
  {
    path: '/product/:CategoryId',
    name: 'product',
    component: Product,
  },
  {
    path: '**',
    name: 'other',
    component: Article
  }
]
export default routes
