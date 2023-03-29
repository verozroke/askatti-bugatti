<template>
    <Transition name="pic" mode="out-in">
        <div  :key="currentPicURL.data" @click="changeAvatar()" class="avatar">
            <img ref="pic" :src="currentPicURL.data" id="pic" alt="">
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue';
const JSONData = `{"head":{"data":"./img/pfps/1.png","next":{"data":"./img/pfps/2.png","next":{"data":"./img/pfps/3.png","next":{"data":"./img/pfps/4.png","next":{"data":"./img/pfps/5.png","next":null}}}}}}`
const linkedList = JSON.parse(JSONData)
const currentPicURL = ref(linkedList.head)
const pic = ref(null)
const hentaiMusic = new Audio('../../../public/audio/hentai.mp3')


let clicksToAva = 0
const easterEgg = () => {
    clicksToAva+= 1
    console.log('Пасхалочка через: ' + (100-clicksToAva))
    if (clicksToAva === 100) {
        alert('Freestylooooo Time!~~~')
        hentaiMusic.play()
        clicksToAva = 0
    }
}


const changeAvatar = () => {
    if(currentPicURL.value.next === null) {
        currentPicURL.value = linkedList.head
        return
    }

    currentPicURL.value = currentPicURL.value.next
    easterEgg()
}




</script>

<style lang="scss" scoped>
.avatar {
    cursor: pointer;
    width: 128px;
    height: 128px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 50%;

    & img {
        width: 128px;
        height: 128px;
        border-radius: 50%;
        object-fit: cover;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
        &.fade {
            opacity: 0;
        }
    }
}

.pic {
    &-enter-from {
        opacity: 0;
        // transform: translateX(-100px);
    }
    &-enter-active {
        transition: all .2s ease-in;
    }
    &-leave-to {
        opacity: 0;
    }
    &-leave-active {
        transition: all .2s ease-out;
    }
}
</style>