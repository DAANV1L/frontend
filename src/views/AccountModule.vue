<template>
  <div>
    <TopBannerVue/>
    <div class="account">
        <h1>Account</h1>
        <div class="account-info">
            <form     style="    display: flex; flex-direction: column;">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" v-model="username">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" v-model="email">
                <label for="phone">Phone number:</label>
                <input type="text" id="phone" name="phone" v-model="phone">
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" v-model="address" >
                <button @click="updateAccount" style="margin-top: 10px;">Update</button>
            </form>
        </div>
    </div>
  </div>
</template>


<script>
import TopBannerVue from '@/components/TopBanner.vue';
import axios from 'axios';

export default{
    components: {
        TopBannerVue
    },
    data(){
        return {
            id: -1,
            username: '',
            email: '',
            phone: '',
            address: '',
            
        }
    },
    
    async mounted(){
        if (document.cookie == '') {
            this.$router.push({ name: 'login' });
        }
        this.cookie = JSON.parse(atob(document.cookie.split('.')[1].split('.')[0]))
        this.id = this.cookie['sub'].split(":")[1].split("=")[1]
        let data = await this.getAccountInfo();
        data = data.filter(user => user.id == this.id)[0];
        this.username = data.userName;
        this.email = data.email;
        this.id = data.id;
        this.phone = data.phoneNumber;
        this.address = data.address;
    },
    methods:{
        async getAccountInfo(){
            try {
                return axios.get('https://localhost:5001/api/User/')
                    .then(function (response){
                        const result =  response.data;
                        return result;
                    })
            } catch (error) {
                console.error(error);
            }
        }
        ,
        async updateAccount(){
            await fetch('https://localhost:5001/api/User/UpdateUser/' + this.id, {
                method: 'PUT',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + document.cookie
                },
                body: JSON.stringify({
                    username: this.username,
                    email: this.email,
                    phoneNumber: this.phone,
                    address: this.address
                })
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
        }
    
    }

}

</script>

<style>
.account{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f2f2f2;
}
</style>