<template>
  <div class="app-login">
    <form>
      <ui-input
        v-model = "username"
        type = "text"
        placeholder = "请输入您的用户名"
        icon = "my1"
      ></ui-input>
    </form>
  </div>
</template>
<script>
export default {
  name: 'app-login',
  data () {
    return {
      username: 'qweqwe',
      password: '',
      code: ''
    }
  },
  methods: {
    action () {
      this.$http.post ('/login/api/user/User/GetVerificationCode')
      .then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
