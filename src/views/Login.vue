<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <label for="email">E-mail</label>
        <input type="text" id="email" v-model="email" required />

        <label for="password">Senha</label>
        <div class="password-wrapper">
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            required
          />
          <span class="toggle-password" @click="togglePassword">
            {{ showPassword ? "🙈" : "👁️" }}
          </span>
        </div>

        <button type="submit">Entrar</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    handleLogin() {
      if (this.email === "admin" && this.password === "admin") {
        this.$router.push("/products");
      } else {
        this.error = "Credenciais inválidas. Tente novamente.";
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f6fc;
}

.login-box {
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h2 {
  text-align: center;
  margin-bottom: 24px;
  font-weight: 600;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

.password-wrapper {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 9px;
  cursor: pointer;
  user-select: none;
}

button {
  background-color: #6a5acd;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #483d8b;
}

.error {
  color: red;
  font-size: 13px;
  text-align: center;
  margin-top: 10px;
}
</style>
