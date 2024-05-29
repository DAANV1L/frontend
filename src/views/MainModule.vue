<template>   
    <div class="main-container">
        <TopBanner />
        <div class="main-content">
            <router-view />
            <table style="width: 100%;">
                <tr>
                    <th style="width: 20%;"></th>
                    <th style="width: 60%;">
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
                        </div>
                    </th>
                    <th style="width: 20%;"></th>
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