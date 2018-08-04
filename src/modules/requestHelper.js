getCode () {
  this.$http({
    method: 'post',
    url: '/loginregister/api/user/User/GetVerificationCode',
    headers: {
      'appName': 3000025
    }
  }).then(res => {
    this.codeImg = res.data.Data.CodeImg
  }).catch(err => {
    console.log(err)
  })
}