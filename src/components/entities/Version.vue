<template>
    <div class="version">v{{ config.VERSION }}</div>
</template>

<script setup>
import  config from '../../params'
</script>

<style lang="scss" scoped>
.version {
	position: absolute;
	left: 0;
	bottom: 0;
	// color: #fff;
}
</style>