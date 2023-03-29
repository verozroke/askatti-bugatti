import { defineStore } from "pinia";


const useInfoStore = defineStore('infoStore', {
    state: () => ({
        blocks: [
            {name: 'Info', fields: [
                {key: 'Age', value: '17'},
                {key: 'Sex', value: 'Male'},
            ]},
            {name: 'Skills', fields: [
                {key: 'Stack', value: 'Vue3, Laravel'},
                {key: 'Social', value: 'Communication, Cheerful, Humour'},
                {key: 'Hobbies', value: 'Videogames, Anime, Duolingo'},
            ]},
            {name: 'Status', fields: [
                {key: 'hasGirlfriend', value: 'True;'},
                {key: 'isWorking', value: 'False;'},
                {key: 'isKazakh', value: 'True;'},
                {key: 'isSniperMonkey', value: 'True;'},
            ]},
            {name: 'Favourites', fields: [
                {key: 'Band', value: 'Red Hot Chili Peppers'},
                {key: 'Games', value: ' Zero Escape & AI:The Somnium Files'},
                {key: 'Anime', value: 'You\'re Under Arrest & Evangelion'},
            ]},
            {name: 'Language-Knowing', fields: [
                {key: 'English', value: 'B2'},
                {key: 'Slovakian & Japanese', value: 'A2'},
                {key: 'Kazakh & Russian', value: 'Native'},
            ]},
        ]
    })
})

export default useInfoStore