<template>
    <CardWrapper>
        <div class="profile">
			<ProfileAvatar/>
			<ProfileNav/>
        </div>
    </CardWrapper>
</template>

<script setup>
import CardWrapper from './layouts/CardWrapper.vue';
import ProfileNav from './ProfileNav.vue';
import ProfileAvatar from './ProfileAvatar.vue';

</script>

<style lang="scss" scoped>


.profile {
    display: flex;
    flex-direction: column;
	align-items: center;
	transition: .4s;
}


</style>