
<template>
 <div class="users">
    <h1>Introduce tus datos para registrarte:</h1>
      <div class="form">
        <div>
          <input type="text" name="mail" placeholder="Correo electrónico" v-model="mail">
        </div>
        <div>
          <input type="text" name="nombre" placeholder="Nombre" v-model="nombre">
        </div>
        <div>
          <input type="text" name="apellido" placeholder="Apellido" v-model="apellido">
        </div>
        <div>
          <input type="text" name="password" placeholder="Password" v-model="password">
        </div>
        <div>
          <button class="app_user_btn" @click="addUser">Registrarse</button>
        </div>
      </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
  name: 'NewUser',
  data () {
    return {
      mail: '',
      nombre: '',
      apellido: '',
      password: '',
      saldo: 1
    }
  },
  methods: {
    async addUser () {
      await UsersService.addUser({
        mail: this.mail,
        nombre: this.nombre,
        apellido: this.apellido,
        password: this.password,
        saldo: this.saldo
      })
      this.$router.push({ name: 'Registrado' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_users_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>