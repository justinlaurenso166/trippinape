<script setup>
</script>

<template>
  <router-view></router-view>
  <div
    class="
      bg-white
      fixed
      bottom-14
      right-0
      left-0
      xl:w-1/2
      w-5/6
      m-auto
      xl:ml-32
      shadow-lg shadow-gray-400
      lg:px-7
      py-4
      rounded-lg
      px-4
    "
  >
    <div class="flex lg:pr-10">
      <div class="flex-1 flex text-black items-center">
        <!-- <img src="./assets/img/Logo/5.png" class="lg:w-48 w-32"> -->
        <p
          class="
            tracking-wider
            uppercase
            font-bold
            lg:text-3xl
            text-lg
            py-5
            lg:ml-10
            mr-2
          "
        >
          MINT YOUR TRIPPIN APE !
        </p>
      </div>
      <div class="xl:flex-1 flex-0 flex justify-end self-center">
        <a target="_blank" href="https://mintgoblinkids.xyz">
          <button
            class="
              bg-prime
              font-bold
              tracking-widest
              text-white
              lg:py-4 lg:px-7
              text-xl
              px-3
              py-3
              rounded-lg
              xl:text-3xl lg:mr-0
              hover:bg-opacity-70
            "
          >
            MINT
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "BlueGobet";
  src: url("/font/BlueGobletRegular.otf");
}
#app {
  font-family: "BlueGobet", sans-serif;
    background: url("./assets/img/homepage.png") no-repeat center center fixed;
    height: 100vh;
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
