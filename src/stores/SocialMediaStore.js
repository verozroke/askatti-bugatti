import { defineStore } from 'pinia'
const useSocialMediaStore = defineStore('socialMediaStore', {
    state: () => ({
        buttons: [
            {id: 1, name: 'Vkontakte', link: 'https://vk.com/askhatych', logoURL: './img/icons/vk.png'},
            {id: 2, name: 'Instagram', link: 'https://www.instagram.com/askattrionis/', logoURL: './img/icons/inst.png'},
            {id: 3, name: 'GitHub', link: 'https://github.com/verozroke?tab=repositories', logoURL: './img/icons/git.png'},
            {id: 4, name: 'Shikimori', link: 'https://shikimori.one/verozroke', logoURL: './img/icons/shikimori.png'},
            {id: 5, name: 'Youtube', link: 'https://www.youtube.com/channel/UCGSmTrEyUjUkdqYupahNCVA', logoURL: './img/icons/youtube.png'},
        ],
        // TODO: Realize clipping methods
        clippies: [
            {id: 1, name: 'Discord', link: 'ASKATTRIONIS#8807', logoURL: './img/icons/discord.png'},
            {id: 2, name: 'Telegram', link: 'https://t.me/verozroker', logoURL: './img/icons/telegram.png'},
        ],
    })
})

export default useSocialMediaStore