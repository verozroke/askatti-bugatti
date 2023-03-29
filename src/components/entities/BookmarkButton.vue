<template>
    <button class="btn-about"><img src="/img/arrow-up.svg" alt=""></button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.btn-about {
    z-index: 10;
	width: 10em;
	height: 10em;
	border-radius: 50%;
	z-index: 1;
	border-width: 1px;
	transform: rotate(-90deg);
	border-style: solid;
	transition: .4s;
	font-size: 14px;
	padding: 0 0 100px 0;
	& img {
		height: 16px;
		width: 16px;
		transition: .4s;
	}
}

.btn-about.active {
	padding: 0 0 70px 0;
	transition: .4s;
	& img {
		transform: rotate(180deg);
		transition: .4s;
	}
}
</style>