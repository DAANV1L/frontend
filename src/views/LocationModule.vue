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
                    firstDayOfWeek="1"
                    :bookings="bookingss"
                    :disabledDates="disabledDates"
                    />
                </th>
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



export default {
   data(){
    return {
        disabledDates: [],
    }
   },
    components: {
        TopBannerVue,
        HotelDatePicker
        
    },
    async mounted() {
        console.log(this.$route.params.id)
        var object = await this.fetchLocation()
        
        // create elements on the webpage
        const block = document.createElement('div');
        block.style.display = 'flex';
        block.style.flexDirection = 'column';
        block.style.alignItems = 'center';

        //title
        const title = document.createElement('h1');
        title.textContent = object.locationName;
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
        id.textContent = "unique ID: "+object.id;
        block.appendChild(id);



        document.getElementById('blockplace').appendChild(block);

        var bookings = await this.fetchbookings()
        this.displaybookings(bookings)
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
            
        }
    }
}
</script>
