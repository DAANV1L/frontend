<template>
    <div>
        <TopBannerVue/>
        <table style="width: 100%;">
            <tr>
                <th style="width: 45%;">
                    <div id="blockplace" />
                </th>
                <th style="width: 55%; display: flex; align-items: center; ">
                    <h2>
                        Choose your dates now!
                    </h2>
                    <HotelDatePicker
                    :firstDayOfWeek='number'
                    :disabledDates="disabledDates"
                    />
                    
                </th>
                <div>
                    <button @click="ClickOnBookButton" id="BookButton">
                        Price Per night: {{ PricePerDay }} € Book now!
                    </button>
                    <p id="incaseofmistake">

                    </p>
                    <h1>Reviews</h1>
                    <ReviewComponent
                        v-for="review in Reviews.filter(review => review.locationID == $route.params.id)"
                        :Name="review.userID"
                        :Stars="review.rating"
                        :Description="review.review"
                        :key="review.id"
                    />
                </div>
                
            </tr>
        </table>
        
        
        
        
    </div>
</template>

<style src="../components/main.css"/>
<script>
import TopBannerVue from "../components/TopBanner.vue"
import axios from "axios";
import HotelDatePicker from 'vue-hotel-datepicker'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
import ReviewComponent from '../components/ReviewComponent.vue'


export default {
   data(){
    return {
        disabledDates: [],
        PricePerDay: 0,
        number: 1,
        uniqueid: -1,
        locationName: "",
        Reviews: [],
    }
   },
    components: {
        TopBannerVue,
        HotelDatePicker,
        ReviewComponent
        
    },
    async mounted() {

        var object = await this.fetchLocation()
        
        // create elements on the webpage
        const block = document.createElement('div');
        block.style.display = 'flex';
        block.style.flexDirection = 'column';
        block.style.alignItems = 'center';

        //title
        const title = document.createElement('h1');
        this.locationName = object.locationName;
        title.textContent = this.locationName;
        block.appendChild(title);

        const img = new Image();
        img.className = 'LocationBigImage';
        img.src = object.imageData;
        img.style.width = '50%';
        img.justifyContent = 'center';
        block.appendChild(img);
        
        const description = document.createElement('p');
        description.textContent = object.description;
        block.appendChild(description);

        const id = document.createElement('p');
        this.uniqueid = object.id;
        id.textContent = "unique ID: "+this.uniqueid;
        block.appendChild(id);
        this.PricePerDay = object.pricePerNight;


        document.getElementById('blockplace').appendChild(block);

        var bookings = await this.fetchbookings()
        this.displaybookings(bookings)
        this.Reviews = await this.LoadReviews()
        console.log(this.Reviews)
    },
    methods: {
        async fetchLocation() {
            try {
                const response = await axios.get('https://localhost:5001/api/Location/GetLocation' + this.$route.params.id);
                return response.data;
            } catch (error) {
                console.error('Failed to fetch location:', error);
                return null; // Return null in case of error
            }
        },
        async fetchbookings() {
            try {
                const response = await axios.get('https://localhost:5001/api/Booking/GetBooking' + this.$route.params.id);
                return response.data;
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
                return null; // Return null in case of error
            }
        },
        displaybookings(bookings) {
            const multipleDates = []
            for (let i = 0; i < bookings.length; i++) {
                const booking = bookings[i];
                const amountofdays = booking['numberOfNights']
                const Checkindate = booking['checkInDate']
                for (let i = 0; i <= amountofdays; i++) {
                    var date = new Date(Checkindate)
                    date.setDate(date.getDate() + i)
                    multipleDates.push(date.toISOString().split('T')[0])
                }
                
            }
            this.disabledDates = multipleDates;
        },
        ClickOnBookButton(){
            const dateInputs = document.querySelectorAll('[data-qa="vhd__datepickerInput"]');
            const startDate = dateInputs[0].textContent.trim();
            const endDate = dateInputs[1].textContent.trim();
            //kijken als datum is ingevuld
            if (startDate === 'Check-in' || endDate === 'Check-out') {
                console.error('Please select both check-in and check-out dates');
                const BookButton = document.getElementById('incaseofmistake');
                BookButton.style.color = 'red';
                BookButton.textContent = 'Please select both check-in and check-out dates';
                return;
            }
            const startDateObj = new Date(startDate);
            const endDateObj = new Date(endDate);

            const differenceInTime = endDateObj.getTime() - startDateObj.getTime();
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);
            this.$router.push({ name: 'BookingConfirmation', params: { id: this.uniqueid, startDate: startDate, endDate: endDate, price: this.PricePerDay, days: differenceInDays, locationID: this.$route.params.id, locationName: this.locationName}});
        },
        async LoadReviews(){
            try {
                const Reviewresponse = axios.get('https://localhost:5001/api/Review');
                return (await Reviewresponse).data;
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
                return null; // Return null in case of error
            }
        }
    }
}
</script>
