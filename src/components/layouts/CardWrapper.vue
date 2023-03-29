<template>
    <div class="card">
        <slot/>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
    z-index: 2;
    width: 25em;
    height: 49em;
    border-radius: 2.3em;
    display: flex;
    flex-direction: column;
	align-items: center;
	transition: .4s;
}
</style>