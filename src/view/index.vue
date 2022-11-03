<template>
    <div>
        {{$store.state.test}}

        {{js}}
    </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from "vue";
const js = ref('hello script setup');
onMounted(() => {
    console.log(2)
})
</script>
<style scoped>

</style>
