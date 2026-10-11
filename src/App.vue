<template>
    <div id="main">
        <header>
            <button @click="toggleMenu">
                <svg-icon type="mdi" :path="mdiMenu"></svg-icon>
            </button>
            <img src="@/assets/safe.svg" alt="Krypt Pad Logo" class="mr-3" style="height: 4rem" />
            <h1 class="m-0">Krypt Pad</h1>
        </header>
        <div id="main-wrapper">
            <div id="menu" :class="{ visible: menuVisible }">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/download">Download</a></li>
                    <li><a href="/privacy">Privacy</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
            <div id="content-wrapper">
                <div id="content">
                    <router-view></router-view>
                </div>
                <div class="my-3">Copyright © {{ new Date().getFullYear() }} Neptune Century</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenu } from '@mdi/js';

const menuVisible = ref(false);
const toggleMenu = () => {
    menuVisible.value = !menuVisible.value;
};
</script>

<style scoped></style>
