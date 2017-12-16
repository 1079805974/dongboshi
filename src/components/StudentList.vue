<template>
  <div class="studentList">
    <mu-list>
      <template v-for="student in studentList">
        <mu-list-item>
          <img :src="student.icon" class="student-icon"/>
          <div class="student-info" style="display: inline-block;">
            <p class="student-name">{{student.name}}</p>
            <p><span class="subject" v-for="subject in student.subjects" :key="subject">{{subject}}</span>
              <span class="student-sex green" v-if="student.sex==='男'"><i class="fa fa-mars"></i>男</span>
              <span class="student-sex pink" v-else><i class="fa fa-venus"></i>女</span>
            </p>
            <p class="student-area green"><i class="material-icons green">place</i><span>{{student.area}}</span></p>
          </div>
        </mu-list-item>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
  export default {
    name: 'StudentList',
    data() {
      return {
        loading: false,
        scroller: null,
        studentList: [
          {icon: './src/assets/logo.png', name: '刘学员', sex:'男', area: '和平区', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '刘学员', sex:'男', area: '和平区', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '刘学员', sex:'男', area: '和平区', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '刘学员', sex:'男', area: '和平区', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '刘学员', sex:'男', area: '和平区', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '刘学员', sex:'男', area: '和平区', subjects: ['数学', '英语', '语文']},

        ],
      }
    },
    mounted() {
      this.scroller = this.$el
    },
    methods: {
      loadMore() {
        this.loading = true
        this.studentList.push({
          icon: './src/assets/logo.png',
          name: '胡老师',
          college: '东北大学',
          subjects: ['数学', '英语', '语文']
        })
      }
    }
  }
</script>

<style>

  .student-name{
    font-weight:600;
  }
  .student-icon {
    width: 60px;
    height: 60px;
    display: inline;
  }
  .student-sex{
    margin-left: 30px;
  }
  .student-info {
    display: inline-block;
    top: 5px;
    padding-left: 10%;
  }
  .student-info p {
    padding: 0 0 5px 0;
    margin: 0;
  }
  .student-area{
    display: inline-block;
  }
  .student-area i{
    padding-right: 5px;
    font-size: 18px;
  }
  .subject {
    padding-left: 3px;
    padding-right: 3px;
    color: #ff490f;
  }

  .studentList {
    z-index: -2;
    height: 60%;
    overflow: hidden;
  }
</style>
