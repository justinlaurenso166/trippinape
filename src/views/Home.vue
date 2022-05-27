<script setup>
import Header from "../components/Header.vue"
</script>

<style scoped>
.img-home{
    width: 1400px;
}
@media only screen and (max-width: 768px) {
    .img-home{
        width: 400px;
    }
}
</style>

<template>
    <div class="">
        <header>
            <Header />
        </header>
        <main class="flex items-center justify-center h-screen text-white text-center text-xl xl:text-3xl bg-prime bg-opacity-40">
            <!-- <img src="../assets/img/homepage1.png"  class="w-full"> -->
        </main>
        <!-- <main class="bg-prime flex items-center justify-center h-screen text-prime text-left text-xl xl:text-4xl font-bold">
            <div class="bg-white p-8 xl:p-10 rounded-lg mx-3 -mt-14 xl:mt-0 bg-opacity-70">
                <p>We will donate 20% from our mint to children in need.</p>
                <p>•</p>
                <p>And we will donate 25% of the royalty proceeds to children in need.</p>
                <p>•</p>
                <p>Where to donate, we will vote by the community.</p>
            </div>
        </main> -->
    </div>
</template>