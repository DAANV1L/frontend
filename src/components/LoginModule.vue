<template>
    <div>
        <h1>Login</h1>
        <form @submit="login">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            <br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import { createHash } from 'crypto';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login(event) {
            event.preventDefault();
            
            // Hash the password using SHA256
            const hashedPassword = createHash('sha256').update(this.password).digest('hex');
            
            // Call your API with the username and hashed password
            // Replace 'your-api-endpoint' with the actual endpoint URL
            fetch('your-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.username,
                    password: hashedPassword,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    // Handle the API response here
                    console.log(data);
                })
                .catch(error => {
                    // Handle any errors here
                    console.error(error);
                });
        },
    },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>