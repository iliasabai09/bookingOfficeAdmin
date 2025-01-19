<template>
  <div class="auth-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="login">Enter your login:</label>
        <input
            id="login"
            v-model="userLogin"
            type="text"
            placeholder="Enter login"
            required
        />
      </div>
      <button type="submit">Log In</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const userLogin = ref('');
const errorMessage = ref('');

const handleLogin = () => {
  if (userLogin.value === '9908879976') {
    sessionStorage.setItem('login', userLogin.value); // Сохраняем логин в sessionStorage
    router.push('/'); // Перенаправляем на главную страницу
  } else {
    errorMessage.value = 'Invalid login. Please try again.';
  }
};
</script>

<style scoped>
.auth-page {
  text-align: center;
  margin: 2rem auto;
}

input {
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>
