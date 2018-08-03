import Home from '../components/pages/Home/Home'
import Classify from '../components/pages/Classify/Classify'
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
  }
]
export default routes