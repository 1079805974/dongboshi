<template>
  <div class="tab1">
    <div class="fixed-header">
      <mu-appbar title="做家教">
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="菜单 1"/>
          <mu-menu-item title="菜单 2"/>
          <mu-menu-item title="菜单 3"/>
          <mu-menu-item title="菜单 4"/>
          <mu-menu-item title="菜单 5"/>
        </mu-icon-menu>
      </mu-appbar>
      <mu-row class="top-bar">
        <mu-col width="33" >
          <mu-flat-button :label="currentCity+'站'" style="width: 108px;min-height: 46px;" @click="chooseCity" />
        </mu-col>
        <mu-col width="33" >
          <mu-flat-button label="全部科目" labelPosition="before" @click="chooseSubject" icon="keyboard_arrow_down"/>
        </mu-col>
        <mu-col width="33" >
          <mu-flat-button label="全市区" labelPosition="before" @click="chooseArea" icon="keyboard_arrow_down"/>
        </mu-col>
      </mu-row>
    </div>
    <mu-bottom-sheet :open="open" @close="closeBottomSheet">
      <mu-menu @itemClick="itemClick" :maxHeight="188">
        <mu-list-item v-for="(item,index) in chooseArray" :title="item" :key="index" />
      </mu-menu>
    </mu-bottom-sheet>
    <student-list />

  </div>
</template>

<script>

  import StudentList from "./StudentList.vue";
  import bus from '../bus.js'
  export default {
    components: {StudentList},
    name: 'tab1',
    data() {
      return {
        currentCity:bus.city,
        open: false,
        chooseArray:[],
        areaArray:['全市区','和平区','大东区','浑南区'],
        subjectArray:['所有科目','语文','数学','英语','物理','化学','生物','地理','历史','政治']
      }
    },
    methods:{
      chooseCity(){
        bus.$emit('chooseCity')
      },
      chooseSubject (){
        this.chooseArray=this.subjectArray
        this.open=true
      },
      chooseArea(){
        this.chooseArray=this.areaArray
        this.open=true
      },
      itemClick(){

      },
      closeBottomSheet(){
        this.open = false
      }
    },
    mounted(){
      const that = this
      bus.$on('cityChanged',function(val){
        that.currentCity=val
      })
    }
  }
</script>

<style>
  .fixed-header{
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width:100%;
  }
  .top-bar{
    background: #2196f3;
  }
  .top-bar .mu-flat-button{
    min-height: 46px;
  }
  .top-bar .mu-flat-button-label{
    color:#FFF;
  }
  .top-bar i{
    color:white;
  }
  .tab1{
    padding-bottom: 48px;
  }
</style>
