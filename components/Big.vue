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
    </div>
</template>

<style>
.zodiac-wrapper {
    margin: 36px auto;
    padding: 12px 0 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: rgba(65, 5, 5, 0.842);
    border: 4px solid rgb(56, 56, 56);
}
.zodiac-wrapper > .title.stars-title, .zodiac-wrapper > .title.stars-title > a {
    text-align: center;
    color: #d3d3d3;
    font-size: 24px;
    text-shadow: 2px 2px 12px rgba(2, 2, 2, 0.275);
}

.stars {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 212px;
    background-color: rgba(115, 47, 47, 0.901);
    border: 8px solid #29070790;
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

.big-news {
    background-color: rgba(0, 0, 0, 0.529);
    width: 100%;
    height: 500px;
}
</style>