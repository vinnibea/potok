<script setup>
import SearchInputVue from './SearchInput.vue';

const subMenuItems = [
    {
        title: "Пресс-релизы",
        link: "/press-release",
    },


    {
        title: "Новости Киева",
        link: "/novosti-kieva",
    },
    {
        title: "ЕВРО 2012",
        link: "/euro2012",
    },
    {
        title: "Культура",
        link: "/kultura",
    }, {
        link: "/turizm-i-puteshestvie",
        title: "Туризм"
    },

    {
        link: "/moda",
        title: "Мода"
    },

    {
        link: "/nedvijimost",
        title: "Недвижимость"
    },

    {
        link: "/poleznie-sovety",
        title: "Полезные советы"
    },

    {
        link: "//muzhchina-i-zhenshina",
        title: "Мужчина и женщина"
    },

    {
        link: "/trudoustroistvo",
        title: "Трудоустройство"
    },

    {
        link: "/produkty-i-pitanie",
        title: "Продукты"
    },

    {
        link: "/auto",
        title: "Авто"
    },

    {
        link: "/ekologiya",
        title: "Экология"
    },

    {
        link: "/kulinariya",
        title: "Кулинария"
    },

    {
        link: "/obrazovanie",
        title: "Образование"
    },

    {
        link: "/prestupnost",
        title: "Происшествия и криминал"
    },

    {
        link: "/internet",
        title: "Интернет"
    },

    {
        title: "Дети",
        link: "/deti",
    },

    {
        title: "Новый 2024 год",
        link: "/new-2015-year",
    },

    {
        title: "Гороскоп",
        link: "/goroskop",
    },

    {
        title: "Шоубиз",
        link: "/shoybiz",
    },

    {
        title: "Здоровье",
        link: "/zdravochranenie",
    },
];



const menuItems = [{
    title: "Главная",
    link: "/",
}, {
    title: "Мировые новости",
    link: "/mirovie-novoti",
}, {
    title: "Антикризис",
    link: "/antikrizis",
},
{
    title: "Экономика",
    link: "/buznes-ekonomuka"
},
{
    title: "Новости Украины",
    link: "/ukraine",
},
{
    title: "Спорт",
    link: "/sport",
},



{
    title: "Наука",
    link: "/science",
},
];

const showDropDown = ref(false);
const emit = defineEmits(['onOpen', 'onClose', 'closeMobile']);
defineProps({
    bg: {
        type: Boolean,
        default: false,
    },
    isMobile: {
        type: Boolean,
        default: false,
    }
})
const dropDownRef = ref(null);
const showSearch = ref(false);
const modalOpened = ref(false);

const onDropDown = () => {
    showDropDown.value = !showDropDown.value;
}

const subMenuColumn = computed(() => (
    {
        left: subMenuItems.slice(0, Math.floor(subMenuItems.length / 2)) || [],
        right: subMenuItems.slice(Math.round(subMenuItems.length / 2)) || [],
    }
));

const onShowSearch = () => {
    showSearch.value = false;
}

const onModalShow = () => {
    modalOpened.value = true;
    emit('onOpen');
}
const iconRef = ref(null)
const onSearchOpen = () => {
    console.log('nav')
    modalOpened.value = false;
    showSearch.value = true;
    emit('closeMobile');
    emit('onClose');
};

watch(iconRef, (prev, what) => {
    console.log(Array.from(prev.childNodes), what?.childNodes)
})

onMounted(() => {
    document.addEventListener('click', (event) => {
        if (!showDropDown.value) return;
        if (!Array.from(event.target.classList).includes('navbar-link') && !Array.from(event.target.classList).includes('drop-down-half')) {

            showDropDown.value = false;
        }
    })
})


</script>

<template>
   
    <nav class="navbar navbar-relative is-flex is-justify-content-space-between" role="navigation" :class="[
        {
            'navbar-has-background-white': isMobile || bg,
            
            
        }
    ]" aria-label="main navigation">



        <div class="navbar-top-brand">

            <div class="navbar-top-left" ref="iconRef">


        <info-top></info-top>
                <Icon style="color: white; transform: scale(1.2)" @click="onModalShow" name="ri:menu-search-line" class="icon" />
            </div>


        </div>







        <div id="navbarBasicExample" class="navbar-menu">

            <div class="navbar-start ">
                <a v-for="item in menuItems" class="navbar-item has-text-white" :class="[{
                    'has-text-dark': bg
                }]" :key="item.link" :href="item.link">
                    {{ item.title }}
                </a>

                <div class="navbar-item has-dropdown" :class="[{
        'is-active': showDropDown,
    }]">
                    <a class="navbar-link has-text-white" :class="[
        {
            'has-background-white': showDropDown,
            'has-text-dark': showDropDown,
        }
    ]" @click="onDropDown">
                        Больше
                    </a>

                    <div class="navbar-dropdown is-right" :ref="dropDownRef">
                        <div class="columns px-2 py-2">
                            <div class="column is-half drop-down-half"><a v-for="item in subMenuColumn.left"
                                    class="navbar-item has-text-black " :key="item.link" :href="item.link">
                                    {{ item.title }}
                                </a></div>
                            <div class="column is-half drop-down-half"><a v-for="item in subMenuColumn.right"
                                    class="navbar-item has-text-black px1" :key="item.link" :href="item.link">
                                    {{ item.title }}
                                </a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="icon" @click="onSearchOpen">
                        <Icon class="icon-search" name="mdi:magnify"></Icon>
                    </div>
                </div>
            </div>
        </div>

        <SearchInputVue @closeSearch="onShowSearch" v-if="!isMobile && showSearch"></SearchInputVue>
    </nav>
</template>

<style>

.navbar-top-left {
    display: none;
}

.icon {
    cursor: pointer;
}

.navbar-top-left>.icon.icon-close {
    color: red;
    font-weight: 700;
    cursor: pointer;
}

.navbar {
    position: relative;

    backdrop-filter: blur(8px);
    
    z-index: 6000;
}




.navbar.navbar-relative {
    position: relative;
    background-color: rgba(104, 1, 1, 0.368);
    backdrop-filter: blur(8px);
}

.navbar-dropdown {
    border: none;
    border-radius: 0 0 0 0;
    box-shadow: none;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.navbar-item .has-text-white:hover,
.has-text-white:hover {
    background-color: rgba(255, 255, 255, 0.322);
    color: #030303 !important;
}

.navbar-link::after {
    border: none;
}

.navbar-link:not(.is-arrowless)::after,
.select:not(.is-multiple):not(.is-loading)::after {
    border-color: lightgrey;
}


div.icon {
    box-sizing: content-box;
    border-radius: 50%;
    padding: 8px;
    transition: all 0.3s ease;
    border: 1px solid rgba(177, 177, 177, 0);
}

div.icon:hover {
    backdrop-filter: blur(4);
    cursor: pointer;
    background-color: rgba(188, 188, 188, 0.3);
    padding: 8px;
}

div.icon:hover>.icon-search {
    
}

.navbar-button>.icon {
    display: none;
    color: #eee;
}



@media screen and (max-width: 700px) {
    .navbar {
        padding: 0 8px;
        box-shadow: none;
        background-color: black;
    }
    .navbar-top-brand,
    .navbar-top-left {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .navbar-top-left>.icon:hover {
        color: #363636;
    }

    .navbar-button>.icon {
        display: flex;
        color: #eee;
    }

    .desktop-search {
        display: none;
        background-color: red;
    }

    .navbar-has-background-white {
        background-color: rgba(135, 135, 135, 0.074);
        backdrop-filter: blur(8px);
        box-shadow: 0px 4px 4px rgba(65, 65, 65, 0.2);
    }


    .icon.icon-close {
        color: red;
    }


}
</style>