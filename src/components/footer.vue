<template>
  <mu-bottom-nav :value="activeTab" @change="handleTabChange">
    <mu-bottom-nav-item value="tab1" title="找家教" icon="person_outline"/>
    <mu-bottom-nav-item value="tab2" title="做家教" icon="face"/>
    <mu-bottom-nav-item value="tab3" title="填写需求" icon=":fa fa-pencil"/>
    <mu-bottom-nav-item value="tab4" title="个人中心" icon=":fa fa-user"/>
  </mu-bottom-nav>
</template>

<script>
  import bus from '../bus.js'
  export default {
    name: 'MyFooter',
    data () {
      return {
        activeTab: 'tab1'
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
        this.$emit('changed', this.activeTab)
        this.$router.push('/'+this.activeTab)
      }
    },
    mounted(){
      const that=this
      bus.$on('tabChanged',function(val){
        that.activeTab=val
      })
    }
  }
</script>

<style>
  .mint-tab-item-label{
    font-size: 18px;
  }
  .mu-bottom-nav .fa{
    font-size: 20px;
  }
</style>
