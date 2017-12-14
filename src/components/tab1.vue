<template>
  <div class="tab1">
    <div class="fixed-header">
    <mu-appbar title="教师列表">
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
        <mu-flat-button label="沈阳站" style="width: 108px;min-height: 36px;" @click="chooseCity" />
      </mu-col>
      <mu-col width="33" >
        <mu-flat-button label="全部科目" labelPosition="before" @click="chooseSubject" icon="keyboard_arrow_down"/>
      </mu-col>
      <mu-col width="33" >
        <mu-flat-button label="所有老师" labelPosition="before" @click="chooseTeacher" icon="keyboard_arrow_down"/>
      </mu-col>
    </mu-row>
    </div>
    <mu-bottom-sheet :open="open" @close="closeBottomSheet">
      <mu-menu @itemClick="itemClick" :maxHeight="188">
        <mu-list-item v-for="(item,index) in chooseArray" :title="item" :key="index" />
      </mu-menu>
    </mu-bottom-sheet>
    <teacher-list />

  </div>
</template>

<script>

  import TeacherList from "./TeacherList.vue";
  import bus from '../bus.js'
  export default {
    components: {TeacherList},
    name: 'tab1',
    data() {
      return {
        open: false,
        chooseArray:[],
        teacherArray:['所有老师','专家名师','在职教师','在校大学生','专业机构教师'],
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
      chooseTeacher(){
        this.chooseArray=this.teacherArray
        this.open=true
      },
      itemClick(){

      },
      closeBottomSheet(){
        this.open = false
      }
    }
  }
</script>

<style>
  .fixed-header{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
  }
  .top-bar{
    background: #2196f3;
    padding-top: 5px;
    padding-bottom: 5px;
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
