<template>
    <div class="profile__avatar">
        <UIAvatar/>
        <div class="profile__nickname">Takayev Askhat</div>
        <div class="profile__subtitle">AITU student | CS-2209</div>
    </div>
</template>

<script setup>
import UIAvatar from './UI/UIAvatar.vue';

</script>

<style lang="scss" scoped>
.profile {
    &__avatar {
		font-family: 'Montserrat', sans-serif;
		font-weight: 300;
		letter-spacing: 0.2em;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		min-height: 250px;
		padding: 2em 0 0 0;
		text-align: center;
		align-items: center;
	}
	&__nickname {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		width: 225px;
		font-size: 20px;
		margin: 1em 0 0.5em 0;
		letter-spacing: 0.25em;
		// color: rgba(0, 0, 0, 0.5);
		cursor: pointer;
		position: relative;
		transition: 0.25s;
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			transform: scaleX(0);
			height: 1px;
			bottom: -5px;
			left: 0;
			// background-color: rgba(0, 0, 0, 1);
			transform-origin: bottom right;
			transition: transform 0.25s ease-out;
		}
		&:hover::after {
			transform: scaleX(1);
			transform-origin: bottom left;
		}
		
		&:hover {
			transition: .4s;
			// color: rgba(0, 0, 0, 1);
		}
	}
	&__subtitle {
		font-family: 'Montserrat', sans-serif;
		// color: rgba(0, 0, 0, 0.8)
	}
}
</style>