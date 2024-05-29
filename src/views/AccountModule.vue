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
                <input type="text" id="firstName" name="firstName" v-model="firstName">
                <label for="email">FirstName:</label>
                <input type="text" id="email" name="email" v-model="email">
                <label for="email">LastName:</label>
                <input type="text" id="lastName" name="lastName" v-model="lastName">
                <label for="phone">Phone number:</label>
                <input type="text" id="phone" name="phone" v-model="phone">
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" v-model="address" >
                <label for="usertype">User Type:</label>
                <select v-model="userType" @change="userTypeChange">
                    <option value="1">Home Owner</option>
                    <option value="0">Default User</option>
                </select>
                <button @click="updateAccount" style="margin-top: 10px;">Update</button>
                <button @click="logoutbutton" style="margin-top: 10px;">
                Logout
                </button>
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
            firstName: '',
            lastName: '',
            userType: '',
            
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
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.userType = data.userType;
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
            console.log("update account")
            await fetch('https://localhost:5001/api/User/Update?id='+this.id, {
                method: 'PUT',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + document.cookie
                },
                body: JSON.stringify({
                    address: this.address,
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: "nofillin!",
                    phoneNumber: this.phone,
                    userName: this.username,
                    userType: this.userType
                })
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
        },
        logoutbutton(event){
            event.preventDefault();
            this.removecookie();
            

            setTimeout(() => {
                this.$router.push({ name: 'login' });
            }, 1000);
        },
        userTypeChange(){
            
        },
        removecookie(){
            document.cookie = '';
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