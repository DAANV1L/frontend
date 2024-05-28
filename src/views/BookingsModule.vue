<template>
  <div>
    <TopBannerVue/>
    <div>
        <h1>Bookings</h1>
        <p>View all bookings here</p>
        <div> 
            <BookingsComponent
                v-for="booking in bookings"
                :img="getimg(booking.locationID)"
                :key="booking.id"
                :LocationID="booking.locationID"
                :checkindate="formatDate(booking.checkInDate)"
                :NumberOfNights="booking.numberOfNights"
            />
        </div>
    </div>
  </div>
</template>

<script>
import TopBannerVue from '@/components/TopBanner.vue';
import BookingsComponent from '@/components/BookingsComponent.vue';

export default {
    components: {
        TopBannerVue,
        BookingsComponent
    },
    data() {
        return {
        id: -1,
        bookings: [],
        }
    },
    mounted() {
        if (document.cookie == '') {
            this.$router.push({ name: 'login' });
        }
        this.cookie = JSON.parse(atob(document.cookie.split('.')[1].split('.')[0]))
        this.id = this.cookie['sub'].split(":")[1].split("=")[1]
        this.getBookings();
        
    },
    methods: {
        async getBookings() {
            await fetch('https://localhost:5001/api/Booking/GetUserBooking' + this.id, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + document.cookie
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.bookings = data;
            })
            .catch(error => console.error('Error:', error));
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString();
        },
        getimg(locationID){
            fetch('https://localhost:5001/api/Location/GetImageData' + locationID, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + document.cookie
                }
            })
            .then(response => response.json())
            .then(data => {
                const img = new Image();
                img.src = data;
                return img;
            })
            .catch(error => console.error('Error:', error));
        }
    }
}
</script>

<style>

</style>