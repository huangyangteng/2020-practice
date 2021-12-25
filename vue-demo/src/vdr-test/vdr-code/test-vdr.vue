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
                style="border: 0"
            >
                <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2000 2000"
                >
                    <rect
                        width="90%"
                        height="90%"
                        x="5%"
                        y="5%"
                        fill="transparent"
                        stroke="#6A707C"
                        stroke-width="2"
                    ></rect>
                </svg>
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
