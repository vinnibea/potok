<script setup>

const active = ref(0);

const setActive = (i) => {
    active.value = i;
}
</script>

<template>

    <div class="show-wrapper">
        
        <div class="main_showbiz">
          
            <div>
                <h2 class="title">ШОУБИЗ</h2>
                <a
                    href="/shoybiz/115478-sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html"></a><br>
                <a href="/shoybiz/115478-sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html">
                    <div class="img-wrapper">
                        <!-- <img src="../assets/s4.png"> -->
                        <Icon name="ri:play-circle-line" class="icon-play">

                        </Icon>
                    </div>
                </a>
                <h3 class="title"><a
                        href="/shoybiz/115478-sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html">«София»
                        2024: смотреть сериал онлайн 3 и 4 серия в хорошем качестве</a></h3>
            </div>
            <div class="main_showbiz_block">
                <div class="navbar-content">
                    <span class="content-item subtitle" @click="setActive(0)" :class="[{
                        'is-active': active === 0,
                    }]">ПОСЛЕДНИЕ</span>
                    <span class="content-item subtitle" @click="setActive(1)" :class="[{
                        'is-active': active === 1,
                    }]">ПОПУЛЯРНОЕ</span>
                </div>
                <div class="show" :class="[
                        {
                            'show-translate': active === 1,
                        }
                    ]">
                    <a
                        href="/shoybiz/115492-novosti-shou-biznesa-znamenitostej-poslednie-spletni-sluxi-2023.html"></a>
                    <a href="/shoybiz/115492-novosti-shou-biznesa-znamenitostej-poslednie-spletni-sluxi-2023.html">
                        <img class="image is-1by3" src="../assets/fly.jpeg"> </a>
                    <h4 class="title is-6"><a
                            href="/shoybiz/115492-novosti-shou-biznesa-znamenitostej-poslednie-spletni-sluxi-2023.html">Новости
                            шоу-бизнеса знаменитостей: последние сплетни, слухи 2024</a></h4>
                </div>
                <div class="show" :class="[
                        {
                            'show-translate': active === 1,
                        }
                    ]">
                    <a href="/shoybiz/115482-potap-razvelsya-s-zhenoj-irinoj.html">

                    </a>
                
                    <a href="/shoybiz/115482-potap-razvelsya-s-zhenoj-irinoj.html">
                        <img src="../assets/s2.jpg"></a><br>
                    <h4 class="title is-6"><a href="/shoybiz/115482-potap-razvelsya-s-zhenoj-irinoj.html">Потап развелся
                            с женой Ириной</a></h4>
                </div>
                <div class="show" :class="[
                        {
                            'show-translate': active === 1,
                        }
                    ]">
                    <a
                        href="/shoybiz/115480-xakery-vzlomali-telefon-olgi-buzovoj-otkrovennye-foto-i-perepiska.html"></a>
                    <a href="/shoybiz/115480-xakery-vzlomali-telefon-olgi-buzovoj-otkrovennye-foto-i-perepiska.html">
                        <img src="../assets/s3.jpg"></a><br>
                    <h4 class="title is-6"><a
                            href="/shoybiz/115480-xakery-vzlomali-telefon-olgi-buzovoj-otkrovennye-foto-i-perepiska.html">Хакеры
                            взломали телефон Ольги Бузовой: откровенные фото и переписка</a></h4>

                </div>
                <button class="button">Показать больше</button>
            </div>
        </div>
       <themes></themes>
    </div>
</template>

<style>

.main_showbiz>div>h2.title {
    margin: 0;
    padding-bottom: 0;
    padding-top: 2px;
    line-height: 24px;
}
.button {
    margin: 0 auto;
    width: 95%;
    color: white;
    background-color: var(--my-red);
    border: none;
}
.show {display: flex;}
.show-translate {
    transform: translateX(-120%);

}

div.img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 350px;
}

.icon-play {
    font-size: 196px;
    color: rgba(33, 33, 33, 0.589);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    cursor: pointer;
    font-weight: 300;
}

.icon-play:hover {
    color: #f0f0f0;;
}

.main_showbiz>div .img-wrapper img {
    width: 100%;
    position: relative;
    opacity: 1;
    border-top: 24px solid rgb(0, 0, 0);
    border-bottom: 24px solid rgb(0, 0, 0);
}

.main_showbiz>div {
    position: relative;
    background-color: rgb(46, 46, 46);
    border-right: 1px solid rgb(42, 42, 42);
    padding: 2px;
}

.show img {
    border-radius: 8px;
    padding: 4px;
    max-width: 180px;
    min-width: 180px;
    height: 120px;
}

.main_showbiz .show {
    border-bottom: 1px solid rgba(28, 28, 28, 0.326);
  
    display: flex;
    flex-direction: row;
    transition: all 0.3s ease;
    align-items: flex-start;

}

.main_showbiz_block~div {
    display: flex;
}

.show-wrapper {
    display: flex;
    flex-direction: row;
    background-color: rgba(29, 29, 29, 0.642);
    padding-bottom: 12px;
}
.show-wrapper div .title {
    padding: 8px;
    color: #f0f0f0;
    
}

.show-wrapper > .title {
    margin: 0;
    text-align: left;
    color: #f0f0f0;
    background-color: rgb(46, 46, 46);   
     
}

.navbar-content {
    
    display: flex;
    gap: 12px;
    box-shadow: none;
    justify-content: flex-start;
    align-items: flex-end;
    border-bottom: 1px solid rgba(126, 126, 126, 0.256);
}

;

.content-item {
    color: #333 !important;
    cursor: pointer;
    opacity: 1;
    border-bottom: px solid white;

}

.content-item.subtitle {
    margin: 0;
 color: #bababa;
    padding: 0 4px;
    opacity: 0.77;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 2px solid transparent;
}

.content-item.subtitle.is-active {
    border-bottom: 2px solid rgb(243, 243, 243);
    color: white;
    opacity: 1;
}
 h3.title a {
    color: #fff7f7;
 }
.title.is-6>a {
    color: #f0f0f0;
}

.main_showbiz>.title {
    color: #f0f0f0;
    transform: rotate(-45%);
}

.main_showbiz {
    display: flex;
   padding-bottom: 12px;
    
}

.main_showbiz_block {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
}


.main_showbiz {
    margin: 0;
    display: flex;
    background-color: rgb(46, 46, 46);
}

.show-wrapper {
    background-color: rgb(46, 46, 46);
    flex-direction: column;
}

.main_showbiz_block .show, div.main_showbiz_block {
    background-color: rgb(46, 46, 46);
}

@media screen and (max-width: 1024px) {
    

    
    .main_showbiz {
        margin: 0;
        display: flex;
        flex-direction: column;
    }

    .main_showbiz_block {
        border: none;
    }

    .show img {
        max-width: 140px;
        min-width: 140px;
        height: 90px;
    }
}

@media screen and (max-width: 700px) {
 
    .show-wrapper > div .title {
        font-weight: 500;
        
    }
    .show-wrapper,
    .main_showbiz {
        padding: 0;
        padding-bottom: 12px;
    }

    .show-wrapper h3.title {
        padding: 8px 12px;
        font-size: 1.5rem;
        text-align: justify;
    }

    .main_showbiz_block {
        border: none;
    }

    .show img {
        max-width: 140px;
        min-width: 140px;
        height: 90px;
    }

    .show {
        flex-direction: row;
    }

    .main_showbiz > div > .title > a {
        color: rgb(255, 255, 255);
        text-align: left;
        font-size: 18px;
        display: block;
    }

}
</style>
