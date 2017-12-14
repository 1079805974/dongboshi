<template>
  <!--mu-bottom-nav :value="activeTab" @change="handleTabChange">
    <mu-bottom-nav-item value="tab1" title="找老师"/>
    <mu-bottom-nav-item value="tab2" title="找学员"/>
    <mu-bottom-nav-item value="tab3"  title="填写需求"/>
    <mu-bottom-nav-item value="tab4" title="个人中心"/>
  </mu-bottom-nav-->
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="找老师"/>
    <mu-tab value="tab2" title="找学员"/>
    <mu-tab value="tab3"  title="填写需求"/>
    <mu-tab value="tab4" title="个人中心"/>
  </mu-tabs>
</template>

<script>
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
        this.$router.push(this.activeTab)
      }
    }
  }
</script>

<style>
  .mint-tab-item-label{
    font-size: 18px;
  }
</style>
