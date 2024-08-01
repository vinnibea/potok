<script setup>
import logo from '~/assets/logo-square.png';
defineProps(
    {
        open: {
            type: Boolean,
            default: true,
        }
    }
);
const emit = defineEmits(['onModal'])
const closeModal = () => {
    emit('onModal');
}

</script>

<template>
    <div id="modal-js" class="modal" :class="[
        { 'is-active': open }
    ]">
        <div class="modal-background is-active" @click="closeModal"></div>


        <div class="modal-content">
            <Icon name="mdi:close" class="icon-close" @click="closeModal" aria-label="close"></Icon>
            <span> <img class="logo" width="96" height="96" :src="logo"></span>
            <h2 class="title is-3">Вход в аккаунт</h2>
            <div class="modal-center">
                <div class="button-wrapper">
                    <Icon name="logos:google-icon" class="enter-icon"></Icon>
                    <button class="button button-enter">Продолжить с Google</button>
                </div>
                <div class="button-wrapper">
                    <Icon name="mdi:facebook-box" class="enter-icon"></Icon>
                    <button class="button button-enter">Продолжить с Facebook</button>
                </div>
                <div class="button-wrapper">
                    <Icon name="mdi:email-outline" class="enter-icon"></Icon>

                    <button class="button button-enter">Почта</button>
                </div>
            </div>
            <p class="subtitle is-6">

                <span>Нет аккаунта? <a href="/index.php?do=register">Регистрация</a></span>
                <a href="/index.php?do=lostpassword">Напомнить пароль</a>
            </p>


        </div>





    </div>
</template>

<style>
.modal {
    padding: 0px;
}
.modal .logo {
    height: 96px;
    width: 96px;
    border: 2px solid rgba(255, 255, 255, 0.124);
    border-radius: 8px;
    margin: 0;
    filter: grayscale(0.6)
}
.modal-center {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 12px;

}


.icon-close {
    font-size: 24px;
    position: absolute;
    right: 12px;
    top: 12px;
    padding: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
}

.icon-close:hover {
    background-color: rgb(200, 200, 200);
}

.button-wrapper {
    position: relative;
}

.enter-icon {
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: 10;
    font-size: 24px;
    transform: translateY(-50%);
}

.modal .subtitle.is-6 {
    border-top: 1px solid rgb(219, 219, 219);
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.modal .subtitle.is-6 a {
    color: rgb(8, 8, 113);
    font-weight: 300;
}

.modal .subtitle.is-6 a:last-child:not(.subtitle.is-6 span > a:last-child) {
    font-size: 14px;
    color: grey;
}

.modal .subtitle.is-6:hover {
    color: #333;
}

.modal .subtitle.is-6 a:hover {
    opacity: 0.8;
}

.button-enter {
    background-color: rgb(227, 227, 227);
    border-radius: 18px;
    min-width: 320px;
    text-transform: none;
    text-align: right;
    color: #000000;
    padding: 12px 24px;
}

.modal-content .is-3 {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
}

.modal-background.is-active {
    backdrop-filter: blur(8px);
}

.modal.is-active .field {

    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.modal-content {
    position: relative;
    display: flex;
    background-color: rgb(255, 255, 255);
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px 0;
    max-width: 40%;
    min-width: 33%;
    min-height: 75%;
    flex-direction: column;
    gap: 24px;
    border-radius: 12px;
}

.modal-content input.input {
    min-width: 100%;
}

@media screen and (max-width: 700px) {

    .modal,
    .modal-content {
        min-height: 100dvh;
        max-width: 100vw;
        border-radius: 0;
        gap: 12px;
        padding: 68px 0px;


    }

    .button-enter {
        background-color: rgb(227, 227, 227);
        border-radius: 18px;
        min-width: 270px;
        text-transform: none;
        text-align: right;
        color: #000000;
        padding: 12px 24px;
    }
}
</style>