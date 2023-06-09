<template>
    <div @mousemove="parallax($event)" ref="container" class="container">
		<ClipboardWindow :is-active="isClipActive"/>
        <Version/>
		<div class="blocker" :class="{'active': isCardOpen}">
			<ThemeButton class="theme"/>
			<BookmarkButton v-if="!isMobile" @click="cardOpen" class="bookmark-button" :class="{'active': isCardOpen}"/>
			<transition name="fade-profile">
				<ProfileCard :is-mobile="isMobile" @clip="clip" class="profile-card" style="z-index: 3"  :class="{'active': isCardOpen}"/>
			</transition>
			<transition :name=" isMobile ? 'fade-description' : 'description'">
				<DescriptionCard :is-mobile="isMobile" v-if="isCardOpen" class="description-card"/>
			</transition>
			<BookmarkButton class="switch-button" v-if="isMobile" :is-mobile="isMobile" @click="cardOpen"/>
		</div>
    </div>
</template>

<script setup>
import ClipboardWindow from '../components/entities/ClipboardWindow.vue';
import ThemeButton from '../components/entities/ThemeButton.vue';
import Version from '../components/entities/Version.vue';
import { ref } from 'vue';
import ProfileCard from '../components/ProfileCard.vue';
import DescriptionCard from '../components/DescriptionCard.vue';
import BookmarkButton from '../components/entities/BookmarkButton.vue';


const isMobile = ref(false)

if(window.screen.width < 450) {
	isMobile.value = true
}



const isClipActive = ref(false)
const clip = (text) => {
    navigator.clipboard.writeText(text);
    window.getSelection().removeAllRanges()
    isClipActive.value = true
    setTimeout(() => {
        isClipActive.value = false
    }, 3000)
    
}


const isCardOpen = ref(false)
const cardOpen = () => {
	isCardOpen.value = !isCardOpen.value
}

const container = ref(null)
const parallax = (e) => {
	if(!isMobile.value) {
		let _w = window.innerWidth/2;
		let _h = window.innerHeight/2;
		let _mouseX = e.clientX;
		let _mouseY = e.clientY;
		let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
			let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
			let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
			let x = `${_depth3}, ${_depth2}, ${_depth1}`;
		container.value.style.backgroundPosition = x;
	}
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&display=swap');


.blocker {
	display: flex;
	position: relative;
	transition: .4s;

}


.theme {
	position: absolute;
	top: -25px;
	right: -25px;
}

.container {
	width: 100vw;
	height: 100vh;
	font-family: 'Nunito', sans-serif;
    overflow: hidden;
    min-width: 100%;
	min-height: 100%;
    background-attachment: fixed;
    background-position: 50% 50%;
	background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
	position: relative;
	// object-fit: fill;
}


.bookmark-button {
	position: absolute;
	top: 50%;
	margin-top: -70px;
	left: -35px;
	&.active {
		left: -50px;
	}
}

.switch-button {
	position: absolute;
	bottom: -50px;
	-webkit-tap-highlight-color: transparent; 
	margin-left: -70px;
	left: 50%;
	&.active {
		left: -50px;
	}
}

.description-card {
	position: absolute;
	left: 85%;
	transition: .4s;
}

.profile-card {
	transition: .4s;
	&.active {
		transition: .4s;
		filter: drop-shadow(.6em 0.4em 0.4em rgba(0, 0, 0, 0.33));
	}
}

.blocker.active {
	transform: translateX(-10.5em);
	transition: .4s;
}

.description {
	&-enter-from {
		left: 0;
		filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.33));
	}
	&-enter-to {
		left: 85%;
		filter: drop-shadow(5em 3em 3em rgba(0, 0, 0, 0.33));
	}
	&-enter-active {
		transition: .4s;
	}
	&-leave-from {
		filter: drop-shadow(5em 3em 3em rgba(0, 0, 0, 0.33));
		left: 85%;
	}
	&-leave-to {
		filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.33));
		left: 0;
	}
	&-leave-active {
		transition: .4s;
	}
}

.fade-description {
	&-enter-from {
		opacity: 0;
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

.fade-profile {
	&-enter-from {
		opacity: 0;
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
		transition: .4ss;
	}
}


@media only screen and (max-width: 450px) {
	.profile-card {
		filter: drop-shadow(.6em 0em .4em rgba(0, 0, 0, 0.33));
	}
	.description-card {
		filter: drop-shadow(.6em 0em .4em rgba(0, 0, 0, 0.33));
	}
	.blocker.active {
		transform: none;
		transition: .4s;
	}
	.description-card {
		position: absolute;
		z-index: 4;
		left: 0;
	}
}

</style>