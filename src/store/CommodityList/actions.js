import axios from 'axios'
const actions ={
  getCommodityList (context) {
    axios.$http({
      method: 'post',
      url: 'api/commodityapi/Commodity/GetSearchList',
      headers: {
        'appName': 3000025,
      },
      data: {
        Body: {
          CategoryCode: '',
          CategoryId: context.state.CategoryId,
          
        }
      }
    })
  }
}