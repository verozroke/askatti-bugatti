<script setup>


</script>

<template>
  <div class="wrapper">
    <RouterView/>
  </div>
</template>

<style lang="scss">
@import './styles/clearStyles.scss';
@import './styles/fontStyles.scss';


.wrapper {
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
	background: #fff;
}

</style>
