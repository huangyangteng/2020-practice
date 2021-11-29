<template>
    <div id="app" style="padding-left: 200px">
        <div
            style="
                height: 500px;
                width: 500px;
                border: 1px solid rgba(0, 55, 255, 0.34);
                position: relative;
            "
        >
            <vue-draggable-resizable
                :w="200"
                :h="200"
                :onDragStart="onDragStartCallback"
            >
                <p>vue-draggable-resizable</p>
            </vue-draggable-resizable>
        </div>
    </div>
</template>

<script>
import VueDraggableResizable from './components/vue-draggable-resizable'
import './components/vue-draggable-resizable.css'

export default {
    name: 'app',
    components: {
        VueDraggableResizable,
    },
    methods: {
        onDragStartCallback(e) {},
    },
}
</script>

<style></style>
