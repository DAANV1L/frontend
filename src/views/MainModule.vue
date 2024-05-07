<template>   
    <div class="main-container">
        <TopBanner />
        <div class="main-content">
            <router-view />
            <table style="width: 100%;">
                <tr>
                    <th style="width: 25%;">Column 1</th>
                    <th style="width: 50%;">
                        <div id="text">
                            <p>
                            Hiring a camper is an exciting and adventurous way to explore the great outdoors. Whether you're planning a weekend getaway or a long-term road trip, a camper provides the perfect blend of comfort and mobility. Here are some basic things you need to know about hiring a camper.
                            </p>
                            <p>
                                First and foremost, it's important to choose the right type of camper for your needs. There are various options available, including motorhomes, campervans, and trailers. Consider factors such as the number of people traveling, the amenities you require, and your budget. Research different models and sizes to find the one that suits you best.
                            </p>
                            <p>
                                Once you've selected a camper, you'll need to decide on the duration of your hire. Campers can be rented for a few days, weeks, or even months. Think about the length of your trip and any specific destinations you want to visit. Keep in mind that longer hires often come with discounted rates, so it may be more cost-effective to extend your rental period.
                            </p>
                            <p>
                                Before hitting the road, familiarize yourself with the camper's features and operation. Take a thorough walkthrough with the rental company to understand how everything works, from setting up the sleeping area to operating the kitchen appliances. It's also important to know the safety procedures and emergency protocols in case any issues arise during your trip.
                            </p>
                            <p>
                                Planning your itinerary is another crucial step. Research campgrounds and RV parks along your route and make reservations in advance, especially during peak travel seasons. Take into account the amenities and facilities available at each location, such as electricity hookups, water supply, and waste disposal. This will ensure a smooth and enjoyable camping experience.
                            </p>
                            <p>
                                When hiring a camper, it's essential to have the necessary insurance coverage. Check with the rental company about their insurance policies and consider purchasing additional coverage if needed. This will protect you from any potential damages or accidents that may occur during your trip. It's also a good idea to inspect the camper before and after your hire to document any pre-existing damages.
                            </p>
                            <p>
                                Finally, don't forget to pack all the essentials for your camping adventure. This includes bedding, kitchen utensils, toiletries, and outdoor equipment such as chairs, tables, and BBQ grills. Make a checklist to ensure you have everything you need for a comfortable and enjoyable trip.
                            </p>
                            <p>
                                Hiring a camper opens up a world of possibilities for outdoor exploration. By following these basic guidelines, you can have a memorable and hassle-free camping experience. So start planning your next adventure and hit the road with your hired camper!
                            </p>
                        </div>
                    </th>
                    <th style="width: 25%;">Column 3</th>
                </tr>
            </table>
            <img src="../assets/frontpage.png"/>

        </div>
    </div>
</template>
<script>
import TopBanner from '@/components/TopBanner.vue'
export default {
    components: {
        TopBanner
    }
}

</script>

<style scoped>
.main-content p {
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 1.5;
    color: rgb(0, 0, 0);
    background-color: rgba(255, 255, 255, 0.35);
}
.main-content p:first-child {
    font-weight: bold;
}

.main-content p:last-child {
    margin-bottom: 0;
}

.main-content {
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

img {
    display: block;
    margin: 0px !important;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    left: 0px;
}

</style>