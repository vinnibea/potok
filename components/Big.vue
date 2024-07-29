<script setup>

const zodiacs = ['mdi:zodiac-aquarius', 'mdi:zodiac-aries', 'mdi:zodiac-cancer', 'mdi:zodiac-capricorn', 'mdi:zodiac-gemini', 'mdi:zodiac-leo', 'mdi:zodiac-libra', 'mdi:zodiac-pisces', 'mdi:zodiac-sagittarius', 'mdi:zodiac-scorpio', 'mdi:zodiac-taurus', 'mdi:zodiac-virgo']
</script>

<template>
    <div class="zodiac-wrapper">
        <h3 class="title stars-title">
            <a href="/goroskop/115462-ezhednevnyj-astroprognoz-27-yanvarya-2022.html">Ежедневный астропрогноз</a>
        </h3>
        <div class="stars">

            <div class="stars-item" v-for="zodiac in zodiacs" :key="zodiac">
                <a href="/goroskop/115462-ezhednevnyj-astroprognoz-27-yanvarya-2022.html">
                    <Icon class="zodiac" :name="zodiac"></Icon>
                </a>
            </div>
        </div>
        <div class="divider"></div>
        <h3 class="alphabet-title">Cонник</h3>
            <div class="alphabet">
              
                <a href="/sonnik/page/1/letter/%C0/">А</a> <a href="/sonnik/page/1/letter/%C1/">Б</a> <a href="/sonnik/page/1/letter/%C2/">В</a> <a href="/sonnik/page/1/letter/%C3/">Г</a> <a href="/sonnik/page/1/letter/%C4/">Д</a> <a href="/sonnik/page/1/letter/%C5/">Е</a> <a href="/sonnik/page/1/letter/%C6/">Ж</a> <a href="/sonnik/page/1/letter/%C7/">З</a> <a href="/sonnik/page/1/letter/%C8/">И</a> <a href="/sonnik/page/1/letter/%CA/">К</a> <a href="/sonnik/page/1/letter/%CB/">Л</a> <a href="/sonnik/page/1/letter/%CC/">М</a> <a href="/sonnik/page/1/letter/%CD/">Н</a> <a href="/sonnik/page/1/letter/%CE/">О</a> <a href="/sonnik/page/1/letter/%CF/">П</a> <a href="/sonnik/page/1/letter/%D0/">Р</a> <a href="/sonnik/page/1/letter/%D1/">С</a> <a href="/sonnik/page/1/letter/%D2/">Т</a> <a href="/sonnik/page/1/letter/%D3/">У</a> <a href="/sonnik/page/1/letter/%D4/">Ф</a> <a href="/sonnik/page/1/letter/%D5/">Х</a> <a href="/sonnik/page/1/letter/%D6/">Ц</a> <a href="/sonnik/page/1/letter/%D7/">Ч</a> <a href="/sonnik/page/1/letter/%D8/">Ш</a> <a href="/sonnik/page/1/letter/%D9/">Щ</a> <a href="/sonnik/page/1/letter/%DD/">Э</a> <a href="/sonnik/page/1/letter/%DE/">Ю</a> <a href="/sonnik/page/1/letter/%DF/">Я</a></div>
    </div>
</template>

<style>
.alphabet-title {
    color: #333;
    font-size: 2rem;
    text-align: center;
    font-size: 24px;
    font-weight: 900;
}
.alphabet  {
    font-size: 2rem;
    display: grid;
    grid-template-columns: 52px 52px 52px 52px 52px;
    grid-template-rows: 52px 52px 52px 52px 52px 52px;
    column-gap: 12px;
    row-gap: 24px;
    grid-auto-columns: auto;
    padding-top: 24px;
    background-color: rgb(255, 255, 255);
}
.divider {
    margin: 24px 0;
    display: block;
    height: 48px;
    width: 100%;
    background-color: rgb(255, 255, 255);
}
.alphabet  a {
 font-size: 18px;
 padding: 12px;
 font-weight: bold;
 text-shadow: 2px 0px 1px rgba(87, 87, 87, 0.578);
 align-content: center;
 justify-content: center;
 text-align: center;
 vertical-align: middle;
 display: flex;
 align-items: center;
 border-radius: 50%;
 background-color: rgba(245, 245, 245, 0.146);
 color: rgb(54, 54, 54);
}
.zodiac-wrapper {
    margin: 36px auto;
    padding: 12px 0 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-bottom: 48px solid rgb(255, 255, 255);
}
.zodiac-wrapper > .title.stars-title, .zodiac-wrapper > .title.stars-title > a {
    text-align: center;
    color: #333;
    font-size: 24px;
}

.stars {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 212px;
    background-color: rgba(227, 227, 227, 0.901);
    border: 8px solid #c69c0590;
}

.zodiac {
    flex-basis: 25%;
    font-size: 48px;
    transition: all 0.3s ease;
    
}

.zodiac:hover {
    opacity: 0.9;
    color: rgb(199, 176, 46);
    box-shadow: 2px 2px 4px  rgb(215, 201, 203);
}

.alphabet a:hover {
    box-shadow: inset 2px 2px 3px rgb(154, 154, 154), -2px -2px 3px rgba(146, 146, 146, 0.374);
    text-shadow: inset 2px 2px 2px rgba(34, 34, 34, 0.374), -42px -4px 3px rgb(252, 252, 252) ;
color: #636363}

.big-news {
    background-color: rgba(28, 28, 28, 0.529);
    width: 100%;
    height: 500px;
}
</style>