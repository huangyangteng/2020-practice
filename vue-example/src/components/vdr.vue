<template>
  <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <vdr
      :w="w"
      :h="200"
      :parent="true"
      :debug="false"
      :min-width="200"
      :min-height="200"
      :isConflictCheck="true"
      :snap="true"
      :snapTolerance="20"
    >
    </vdr>
  </div>
</template>

<script>
import vdr from 'vue-draggable-resizable-gorkys'
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
export default {
  components: {vdr},
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      w:100
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    },
    
  },
  mounted() {
      setInterval(()=>{
          this.w
      },1000)
  },
}
</script>