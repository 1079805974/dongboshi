<template>
  <div>
    <div class="fixed-header">
      <mu-appbar title="教员信息">
        <mu-icon-button icon=":fa fa-angle-left" @click="back" class="back" slot="left"/>
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="菜单 1"/>
          <mu-menu-item title="菜单 2"/>
          <mu-menu-item title="菜单 3"/>
          <mu-menu-item title="菜单 4"/>
          <mu-menu-item title="菜单 5"/>
        </mu-icon-menu>
      </mu-appbar>
    </div>
    <div style="margin-top: 60px;padding-left: 10px;">
      <div>
        <img class="teacher-info-icon" :src="teacher.icon"/>
        <div style="display: inline-block;margin-left: 20px;">
          <p class="teacher-info-name">{{teacher.name}}</p>
          <p>
            <i :class="teacher.sex==='男'?'fa fa-mars green':'fa fa-venus pink'"></i> {{teacher.sex === '男' ? '男' : '女'}}
          </p>
          <p><span>教授课程:</span><span v-for="subject in teacher.subjects">{{subject}}    </span></p>
        </div>
      </div>
      <div class="info-body">
        <p class="info-item"><span class="item-header">专业:<br /></span><span style="padding-left: 30px;">{{teacher.major}}</span></p>
        <p class="info-item"><span class="item-header">授课区域:<br /></span><span style="padding-left: 30px;"><span v-for="area in teacher.areas">{{area}}    </span></span></p>
        <p class="info-item"><span class="item-header">薪水要求:<br /></span><span style="padding-left: 30px;">{{teacher.pay}}</span></p>
        <p class="info-item"><span class="item-header">毕业院校:<br /></span><span style="padding-left: 30px;">{{teacher.college}}</span></p>
        <p class="info-item"><span class="item-header">自我描述:<br /></span><span style="padding-left: 30px;">{{teacher.description}}</span></p>
      </div>
      <div style="text-align: center;">
        <mu-raised-button label="预约该老师" @click="orderTeacher(teacher.id)" primary/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TeacherInformation',
    data() {
      console.log(this.$route.params.id)
      return {
        teacherId: this.$route.params.id,
        teacher: {
          id: '1',
          major: '软件学院',
          areas: ['和平区', '大东区', '铁西区'],
          pay: '执行东博士家教网薪水标准',
          description: '1到5个月，给你的孩子提升单词量到一万',
          icon: './src/assets/logo.png',
          name: '胡老师',
          sex: '男',
          college: '东北大学',
          subjects: ['数学', '英语', '语文']
        }
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      orderTeacher(){
        //order
      }
    },
    mounted() {
      //getTeacherById
    }
  }
</script>

<style>
  .info-body {
    padding-left: 5px;
    padding-top: 10px;
  }

  .back .mu-icon-button i {
    font-size: 25px;
  }

  .teacher-info-icon {
    width: 100px;
    height: 100px;
  }

  .teacher-info-name {
    font-weight: 600;
  }

  .item-header {
    color: #767676;
    padding-right: 5px;
  }

  .info-item {
    font-size: 16px;
    border-bottom-width: 1px;
    border-bottom-color: #fff;
  }
</style>
