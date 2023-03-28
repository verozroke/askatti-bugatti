<template>
    <div class="nav">
        <UIButtonLink style="margin-bottom: 1em;"
            v-for="button in socialMediaStore.buttons" 
            :key="button.id" 
            :name="button.name" 
            :link="button.link"
            :logoURL="button.logoURL"
        />        
    </div>
</template>

<script setup>
import UIButtonLink from './UI/UIButtonLink.vue';
import useSocialMediaStore from '../stores/SocialMediaStore';
const socialMediaStore = useSocialMediaStore()

</script>

<style lang="scss" scoped>
.nav {
    margin: 0 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
}
</style>