import Home from '../components/pages/Home/Home'
import Classify from '../components/pages/Classify/Classify'
import Cart from '../components/pages/Cart/Cart'
import My from '../components/pages/My/My'
import Login from '../components/Commons/UIInput'
var routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify
  },
  {
    path: '/login',
    name: 'login',
    component: Login
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
    path: '**',
    redirect: { name: 'home'}
  }
]
export default routes
