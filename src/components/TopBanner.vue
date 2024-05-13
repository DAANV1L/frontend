<template>
    <div class="top-banner">
        <div class="left">
            <span class="logo">CampSpot</span>
        </div>
        <div class="middle">
            <button class="nav-item" @click="HomeButtonClick">Home</button>
            <button class="nav-item" @click="SearchButtonClick">Search</button>
            <button class="nav-item" @click="BookingsButtonClick">Bookings</button>
        </div>
        <div class="right">
            <button class="nav-item" @click="AccountButtonClick">Account</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBanner',
    methods: {
        HomeButtonClick() {
            if (this.$route.name === 'main') return;
            console.log('Home button clicked');
            this.$router.push({ name: 'main' });
        },
        SearchButtonClick() {
            this.$router.push({ name: 'search' });
        },
        BookingsButtonClick() {
            this.$router.push({ name: 'Bookings' });
        },
        AccountButtonClick() {
            this.$router.push({ name: 'login' });
        }
    }
}
</script>




<style>
.top-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #639cd9;
    padding: 5px;
    margin: 0px !important;
}

.left {
    flex: 1;
}

.middle {
    flex: 2;
    display: flex;
    justify-content: center;
}

.right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.logo {
    color: white;
    font-size: 30px;
    font-weight: bold;
}

.nav-item {
    margin: 0 10px;
    cursor: pointer;
}
button{
    background-color: #639cd9;
    color: white;
    border: none;
    padding: 15px 25px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin: 0 10px;
}
button:hover{
    background-color: #000000;
    opacity: 0.3;
}
</style>