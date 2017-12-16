<template>
  <div class="teacherList">
    <mu-list>
        <mu-list-item  v-for="(teacher,index) in teacherList" @click="showTeacherInfo(teacher.id)" :key="index">
          <img :src="teacher.icon" class="teacher-icon"/>
          <div class="teacher-info" style="display: inline-block;">
            <p class="teacher-name">{{teacher.name}}</p>
            <p>{{teacher.college}}
              <span class="teacher-sex green" v-if="teacher.sex==='男'"><i class="fa fa-mars"></i>男</span>
              <span class="teacher-sex pink" v-else><i class="fa fa-venus"></i>女</span>
            </p>
            <p><span class="subject" v-for="(subject,index) in teacher.subjects" :key="index">{{subject}}</span></p>
          </div>
        </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  export default {
    name: 'TeacherList',
    data() {
      return {
        loading: false,
        scroller: null,
        teacherList: [
          {id:'1',icon: './src/assets/logo.png', name: '胡老师',sex:'男', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},

        ],
      }
    },
    mounted() {
      this.scroller = this.$el
    },
    methods: {
      loadMore() {
        this.loading = true
        this.teacherList.push({
          icon: './src/assets/logo.png',
          name: '胡老师',
          college: '东北大学',
          subjects: ['数学', '英语', '语文']
        })
      },
      showTeacherInfo(id){
         this.$emit('showInfo',id)
      }
    }
  }
</script>

<style>
  .teacher-name{
    font-weight:600;
  }
  .teacher-icon {
    width: 60px;
    height: 60px;
    display: inline;
  }
  .teacher-sex{
    margin-left: 30px;
  }
  .teacher-info {
    display: inline-block;
    top: 5px;
    padding-left: 10%;
  }

  .teacher-info p {
    padding: 0 0 5px 0;
    margin: 0;
  }


  .mu-list {
    z-index: 1;
    padding-top: 102px;
    padding-bottom: 0;
  }

  .mu-item {
  }

  .subject {
    padding-left: 3px;
    padding-right: 3px;
    color: #ff490f;
  }

  .teacherList {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
