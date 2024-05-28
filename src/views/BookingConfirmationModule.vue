<template>
  <div>
    <TopBannerVue/>
    <div>
        <h1>Booking Information</h1>
        <h3>Location name: {{ myObject.locationName }}</h3>
        <p>StartDate of booking: {{ myObject.startDate }}</p>
        <p>EndDate of booking: {{ myObject.endDate }}</p>
        <p>Total number of days: {{ myObject.days+1 }}</p>
        <p>TotalPrice: {{ myObject.price * (myObject.days+1) }}</p>
        <div style="display: flex; flex-direction: column;">
          <button @click="BookingConfirmed">
            Confirm Booking
          </button>
        </div>
        
    </div>
  </div>
</template>

<script>
import TopBannerVue from "../components/TopBanner.vue"
export default {
  data() {
    return {
      myObject: {},
      cookie: '',
      }
    },
  components: {
    TopBannerVue
  },
  mounted() {
    const params = this.$route.params;
    // Access the parameters here and perform any necessary operations
    this.myObject = params;
    console.log(this.myObject);
    this.cookie = JSON.parse(atob(document.cookie.split('.')[1].split('.')[0]))
    this.id = this.cookie['sub'].split(":")[1].split("=")[1]
  },
  methods: {
    BookingConfirmed() {
      // Send a POST request to the backend to confirm the booking
      console.log(this.myObject);
      this.PostBooking();
      // Redirect to the booking confirmation page
      this.$router.push({ name: 'bookings'});
    },
    async PostBooking() {
      await fetch('https://localhost:5001/api/Booking', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer ' + document.cookie
        },
        body: JSON.stringify({
          "userID": this.id,
          "LocationID": this.myObject.id,
          "numberOfNights": this.myObject.days,
          "checkInDate": this.myObject.startDate
        })
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.myObject = data;
      })
      .catch(error => console.error('Error:', error));
    }
  }
}

</script>

<style src="../components/main.css"/>
<style>

</style>