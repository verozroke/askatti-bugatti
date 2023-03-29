<template>
    <CardWrapper>
                <div class="block__container">
                    <ul class="block__list">
                        <li v-for="block in infoStore.blocks" :key="block.name" class="element">
                            <div class="element__title">
                                {{ block.name }}:
                            </div>
                            <div class="element__text">
                                <span v-for="field in block.fields" :key="block.key">{{ field.key }}:  {{ field.value }}<br></span>
                            </div>
                            <div :id="`line-${block.name}`" class="element__line"></div>
                        </li>
                    </ul>
                </div>
    </CardWrapper>
</template>

<script setup>
import CardWrapper from './layouts/CardWrapper.vue';
import useInfoStore from '../stores/InfoStore';

const infoStore = useInfoStore()

</script>

<style lang="scss" scoped>



.block__list {
	padding: 0 0 0 60px;
	list-style: none;
	display: flex;
	flex-direction: column;
	height: 49em;
}


.element {

	&__title {
		font-weight: 700;
		font-size: 16px;
		font-family: 'Nunito';
		letter-spacing: 0.25em;
		margin: 0 0 0.5em 0;
		&:first-child {
			margin-top: 25px;
		}
	}
	&__line {
		margin: 1.5em 0 0 0;
		width: 100%;
		height: 0.5px;
	}
	&__text {
		height: auto;
		font-family: 'Nunito';
	}
}


.element__text > span {
	line-height: 1.6em;
}

#line-Language-Knowing {
	display: none;
}


</style>
