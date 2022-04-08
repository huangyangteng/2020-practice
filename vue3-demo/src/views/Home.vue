<template>
    <div class="home">
        <TodoList v-if="false"></TodoList>
        <VideoPreviewItem></VideoPreviewItem>
        <!-- <vdr :w="100" :h="100"></vdr> -->
    </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
// import vdr from 'vue-draggable-resizable'
import VideoPreviewItem from '../components/VideoPreviewItem.vue'
// console.log(vdr)
export default {
    name: 'Home',
    data() {
        return {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
        }
    },
    components: {
        TodoList,
        // vdr,
        VideoPreviewItem,
    },
}
</script>
