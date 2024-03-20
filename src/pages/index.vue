<template>
    <div>
heelow workd
    </div>
</template>

<script setup lang="ts">

import { invoke } from '@tauri-apps/api';

onMounted(() => {
    invoke('greet')
})

</script>

<style lang="scss" scoped>

</style>