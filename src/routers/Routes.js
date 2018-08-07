import Home from '../components/pages/Home/Home'
import Classify from '../components/pages/Classify/Classify'
import Cart from '../components/pages/Cart/Cart'
import My from '../components/pages/My/My'
import Login from '../components/pages/Login/Login'
import Register from '../components/pages/Register/Register'
// import Channelhome from '../components/pages/Classify/Components/channelhome'
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
    // children: [
    //   {
    //     path: '',
    //     redirect: { name: 'Channelhome'}
    //   }
    // ]
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
    path: '**',
    redirect: {name: 'home'}
  }
]
export default routes
