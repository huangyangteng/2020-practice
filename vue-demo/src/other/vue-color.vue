<template>
    <div>
        <div>
            <material-picker v-model="colors" />
        </div>
    </div>
</template>

<script>
import { Sketch } from 'vue-color'
export default {
    name: 'vue-color.vue',
    components: {
        'material-picker': Sketch,
    },
    data() {
        return {
            colors: '',
        }
    },
}
</script>

<style scoped></style>
