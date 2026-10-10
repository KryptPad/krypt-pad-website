<template>
    <div>
        <h1>Download Krypt Pad</h1>

        <p>
            Download Krypt Pad for your platform. Krypt Pad is available for Windows, Mac, and
            Linux. Choose the appropriate version for your operating system.
        </p>
        <h2>Krypt Pad 0.1.0 Beta</h2>
        <div id="download-buttons" class="mb-5">
            <a
                href="https://files.kryptpad.com/krypt-pad-Windows-0.1.0-Setup.exe"
                download
                class="btn btn-lg p-5 flex-column"
            >
                <p><svg-icon type="mdi" :path="mdiMicrosoftWindows" :size="64"></svg-icon></p>
                <span>Download for Windows</span>
            </a>

            <a
                href="https://files.kryptpad.com/Krypt Pad-Mac-0.1.0-Installer.dmg"
                download
                class="btn btn-lg p-5 flex-column"
            >
                <p><svg-icon type="mdi" :path="mdiApple" :size="64"></svg-icon></p>
                <span>Download for Mac</span>
            </a>

            <a
                href="https://files.kryptpad.com/Krypt Pad-Linux-0.1.0.deb"
                download
                class="btn btn-lg p-5 flex-column"
            >
                <p><svg-icon type="mdi" :path="mdiLinux" :size="64"></svg-icon></p>
                <span>Download for Linux (.deb)</span>
            </a>
        </div>

        <h2 class="other">Krypt Pad Dekrypter Tool - Only for old Krypt Pad profiles</h2>
        <a
            href="https://files.kryptpad.com/krypt-pad-dekrypter.zip"
            download
            class="btn btn-lg p-5 flex-column"
        >
            <p><svg-icon type="mdi" :path="mdiMicrosoftWindows" :size="64"></svg-icon></p>

            <span>Download Dekrypter for Windows</span>
        </a>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMicrosoftWindows, mdiApple, mdiLinux } from '@mdi/js';
</script>
