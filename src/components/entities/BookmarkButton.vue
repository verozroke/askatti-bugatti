<template>
    <button :class="{'btn-about': !isMobile, 'btn-switch': isMobile}"><img :src="link" alt=""></button>
</template>

<script setup>

const props = defineProps({
	isMobile: Boolean,
})

const link = props.isMobile ? '/askatti-bugatti/img/switch.svg' : '/askatti-bugatti/img/arrow-up.svg'

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

.btn-switch {
	z-index: 10;
	width: 10em;
	height: 10em;
	border-radius: 50%;
	z-index: 1;
	border-width: 1px;
	border-style: solid;
	// background: #fff;
	transition: .4s;
	font-size: 14px;
	padding-top: 83px;
	& img {
		height: 24px;
		width: 24px;
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