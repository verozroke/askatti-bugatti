<template>
    <div class="link">
        <a :href="link" target="_blank"><img :src="logoURL" id="vk" alt="">{{ name }}</a>
    </div>
</template>

<script setup>

const props = defineProps({
    link: String,
    logoURL: String,
    name: String,
})


</script>

<style lang="scss" scoped>
.link {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .5em;
    width: 22em;
    height: 3em;
    text-align: center;
    & a {
        width: 22em;
        height: 3em;
        // border: rgba(81, 81, 81, 0.721) 1px solid;
        // background-color: #fff;
        border-radius: .5em;
        // filter: drop-shadow(.5em .5em .5em rgba(0, 0, 0, 0.33));
        font-size: 14px;
        font-weight: 400;
        letter-spacing: .2em;
        &:hover {
            // background-color: #77777707;
            width: 22em;
            height: 3em;
            // border: rgba(81, 81, 81, 0.721) 1px solid;
            // filter: drop-shadow(0em 0em 0em rgba(0, 0, 0, 0));
            border-radius: .5em;
            transition: .4s;
        }
        // color: #000;
        &:visited {
            // color: #000;
        }
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & img {
        width: 16px;
        height: 16px;
        margin: 0 0.5em 0 0;
    }
}
</style>