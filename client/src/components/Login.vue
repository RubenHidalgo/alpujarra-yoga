<template>
  <div class="login">
    <h3>Ingresa tu dirección de correo y tu contraseña para continuar</h3>
      <div class="form">
        <div>
          <input type="text" name="mail" placeholder="Correo electrónico" v-model="mail">
        </div>
        <div>
          <input type="text" name="password" placeholder="Password" v-model="password">
        </div>
        <div>
          <button class="app_log_btn" @click="logUser">Iniciar sesión</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  }
}
</script>