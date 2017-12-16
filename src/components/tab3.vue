<template>
  <div>
    <div class="fixed-header">
      <mu-appbar title="填写需求">
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="菜单 1"/>
          <mu-menu-item title="菜单 2"/>
          <mu-menu-item title="菜单 3"/>
          <mu-menu-item title="菜单 4"/>
          <mu-menu-item title="菜单 5"/>
        </mu-icon-menu>
      </mu-appbar>
    </div>
    <div class="tab3-body" v-if="!showForm">
      <a href="tel:17624048885">
      <mu-paper :zDepth="1">
        <mu-content-block>
        <h3>方法1</h3>
          <p>直接拨打客热线：<a href="tel:17624048885">17624048885</a><br/>
         客服人员将会根据您的要求挑选合适的教员</p>
        </mu-content-block>
      </mu-paper>
      </a>
      <a href="/#/tab3" @click="showForm=true">
      <mu-paper :zDepth="1" >
        <mu-content-block>
        <h3>方法2</h3>
        <p>自主填写订单：把您的需求填写清楚，客服人员将会根据您的要求挑选适合的教员。</p>
        </mu-content-block>
      </mu-paper>
      </a>
      <a @click="changeTab" href="/#/tab1">
      <mu-paper :zDepth="1" >
        <mu-content-block>
        <h3>方法3</h3>
        <p>在线预约：您可以直接进入<a @click="changeTab" href="/#/tab1">教员库</a>找到你中意的教员后，请在线预约此教员</p>
        </mu-content-block>
      </mu-paper>
      </a>
    </div>
    <div class="form-body" v-if="showForm">
      <h2 style="padding-left: 40px;"><i class="fa fa-pencil-square-o"></i>&nbsp;填写请家教订单</h2>
      <mu-text-field hintText="您的称呼" v-model="username" icon=":fa fa-user" />
      <mu-text-field hintText="联系电话" icon="phone"/>
      <mu-text-field hintText="学员年级" icon=":fa fa-asterisk"/>
      <mu-text-field hintText="求教学科" icon=":fa fa-info"/>
      <mu-text-field hintText="其他要求" multiLine :rows="3" :rowsMax="6" icon="comment"/><br/>
      <mu-text-field hintText="您的理想报酬" style="width: 50%;" icon=":fa fa-cny"/><p style="display: inline-block;">元/1.5小时</p><br />
      <mu-raised-button label="提交" style="margin-left: 80px;" primary/>
    </div>
  </div>
</template>

<script>
  import bus from '../bus.js'
  export default {
    name: 'tab3',
    data () {
      return {
        username: '',
        showForm: false
      }
    },
    methods: {
      changeTab(){
        bus.$emit('tabChanged','tab1')
      }
    }
  }
</script>

<style>
  .mu-paper{
    cursor: pointer;
    margin-top: 15px;
  }
  .tab3-body{
    margin: 0 auto 0 auto;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 100px;
    height: 100vh;
    background: #f3f3f3;
  }
  .form-body{
    padding-left: 30px;
    padding-top: 56px;
    margin: auto;
  }
  .form-body .mu-text-field-hint{
    padding-right: 70px;
  }
  .form-body .fa{
    font-size: 20px;
  }
  .form-body .mu-text-field-line{
    padding-right: 70px;
  }
  .form-body .mu-text-field-focus-line{
    padding-right: 70px;
  }
</style>
