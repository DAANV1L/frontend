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
      myObject: {}
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

  },
  methods: {
    BookingConfirmed() {
      // Send a POST request to the backend to confirm the booking
      // Redirect to the booking confirmation page
      this.$router.push({ name: 'BookingConfirmationModule', params: this.myObject });
    }
  }
}

</script>

<style src="../components/main.css"/>
<style>

</style>