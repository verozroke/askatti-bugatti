<template>
    <CardWrapper>
        <div class="profile">
			<ProfileAvatar/>
			<ProfileNav/>
            <div @mouseenter="() => {isLinksVisible = true}" @mouseleave="() => {isLinksVisible = false}" class="caption">
                <transition name="caption-title">
                    <div v-if="!isLinksVisible" class="caption__title">love ellen <p class="r">{{ '<3' }}</p></div>
                </transition>
                <transition name="clipboard">
                    <div v-if="isLinksVisible" class="clipboard-icons">
                        <div class="clipboard-icons__row">
                            <div @click="$emit('clip', socialMediaStore.clippies[0].link)" class="clipboard-icons__discord">
                                <img :src="socialMediaStore.clippies[0].logoURL" alt="" id="discord">
                                {{ socialMediaStore.clippies[0].name }}
                            </div>
                            <div @click="$emit('clip', socialMediaStore.clippies[1].link)" class="clipboard-icons__telegram">
                                <img :src="socialMediaStore.clippies[1].logoURL" alt="" id="telegram">
                                {{ socialMediaStore.clippies[1].name }}
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </CardWrapper>
</template>

<script setup>
import CardWrapper from './layouts/CardWrapper.vue';
import ProfileNav from './ProfileNav.vue';
import ProfileAvatar from './ProfileAvatar.vue';
import useSocialMediaStore from '../stores/SocialMediaStore';
import { ref } from 'vue';

const socialMediaStore = useSocialMediaStore()


const isLinksVisible = ref(false)




</script>

<style lang="scss" scoped>


.profile {
    display: flex;
    flex-direction: column;
	align-items: center;
	transition: .4s;
}

.caption {
	margin: 17px 0 0 0;
	display: flex;
	justify-content: center;
	padding: 0 0 10px 0;
	align-items: center;
	text-align: center;
	height: 3.3em;
	border-radius: 0;
    
	min-width: 20em; 
	font-family: 'Montserrat', sans-serif;
	letter-spacing: .5em;
    &__title {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 0;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: .5em;
        font-size: 16px;
    }
}

.clipboard-icons {
	margin: 17px 0 0 0;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	height: 3.3em;
	min-width: 20em; 
	font-family: 'Montserrat', sans-serif;
	letter-spacing: .2em;
	font-size: 12px;
	&__row {
		display: flex;
		width: 60px;
		justify-content: space-between;
	}
	&__discord {
		cursor: pointer;

		display: flex;
		align-items: center;
		margin: 0 50px 0 0;
		& img {
			margin: 0 5px 0 0;
		}
		&:hover {
			transition: .3s;
		}
	}
	&__telegram {
		cursor: pointer;

		display: flex;
		align-items: center;
		& img {
			margin: 0 5px 0 0;
		}
		&:hover {
			transition: .3s;
		}
	}
}


#telegram, #discord {
	width: 20px;
	height: 20px;
}


.caption-title {
    &-enter-from {
        opacity: 0
    }
    &-enter-to {
        opacity: 1;
    }
    &-enter-active {
        transition: .4s;
    }
    &-leave-from {
        opacity: 1;
    }
    &-leave-to {
        opacity: 0;
    }
    &-leave-active {
        transition: .4s;
    }
}

.clipboard {
    &-enter-from {
        opacity: 0;
    }
    &-enter-active {
        transition: .4s;
    }
    &-leave-to {
        opacity: 0;
    }
    &-leave-active {
        transition: .4s;
    }
}


.r {
    color: red;
    font-weight: 700;
}



</style>