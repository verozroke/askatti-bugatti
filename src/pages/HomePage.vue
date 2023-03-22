<template>
    <div @mousemove="parallax($event)" ref="container" class="container">
        <ThemeButton/>
		<ClipboardWindow :is-active="isClipActive"/>
        <Version/>
        <div class="blocker">

			<!-- !Hardcoding here is a mistake. Give special component for it :D -->
            <CardWrapper>
				<!-- TODO: First component of Profile (w/ avatar, name and subtitle) | Button Lists | text and tg/ds links-->
				
				<!-- <Avatar/> -->
				<!-- <UIButtonLink style="margin-bottom: 1em;"
					v-for="button in socialMediaStore.buttons" 
					:key="button.id" 
					:name="button.name" 
					:link="button.link"
					:logoURL="button.logoURL"
				/> -->
			</CardWrapper>
        </div>
		<!-- TODO: Make Arrow Button to open second Component -->
		<!-- TODO: Realize second component of description -->
    </div>
</template>

<script setup>
import Avatar from '../components/Avatar.vue';
import ClipboardWindow from '../components/ClipboardWindow.vue';
import ThemeButton from '../components/ThemeButton.vue';
import CardWrapper from '../components/UI/CardWrapper.vue';
import UIButtonLink from '../components/UI/UIButtonLink.vue';
import Version from '../components/Version.vue';
import { ref } from 'vue';
import useSocialMediaStore from '../stores/SocialMediaStore'

const socialMediaStore = useSocialMediaStore()





const isClipActive = ref(false)


function clip(text) {
    navigator.clipboard.writeText(text);
    window.getSelection().removeAllRanges()
    isClipActive.value = true
    setTimeout(() => {
        isClipActive.value = false
    }, 3000)
    
}

const container = ref(null)
function parallax(e) {
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

</script>

<style lang="scss" scoped>
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





</style>