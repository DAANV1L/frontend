<template>
  <div class="reviewview">
    <p>BookersID: {{ Name }}</p>
    <p>Stars: {{ Stars }}</p>
    <p>review: {{ Description }}</p>
  </div>
</template>

<script>
export default {
    props: {
        Name: Number,
        Stars: Number,
        Description: String
    }
}
</script>

<style>
.reviewview{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    width: 90%;
    background-color: #f2f2f2;
}
</style>