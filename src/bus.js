import Vue from 'vue'
var bus= new Vue({
  data:{
    city:'沈阳'
  },
  watch:{
    city(val){
      this.$emit('cityChanged',val)
    }
  }
})
export default bus
