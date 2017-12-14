<template>
  <div class="teacherList">
    <mu-list>
      <template v-for="teacher in teacherList">
        <mu-list-item>
          <img :src="teacher.icon" class="teacher-icon"/>
          <div class="teacher-info" style="display: inline-block;">
          <p>{{teacher.name}}</p>
          <p>{{teacher.college}}</p>
            <p>擅长科目:<span v-for="subject in teacher.subjects" :key="subject" class="subject">{{subject}}</span></p>
          </div>
        </mu-list-item>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
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
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
          {icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']},
        ],
      }
    },
    mounted () {
      this.scroller = this.$el
    },
    methods: {
      loadMore () {
        this.loading = true
        this.teacherList.push({icon: './src/assets/logo.png', name: '胡老师', college: '东北大学', subjects: ['数学', '英语', '语文']})
      }
    }
  }
</script>

<style>
  .teacher-icon{
    width: 50px;
    height: 50px;
    display: inline;
  }
  .teacher-info{
    position: absolute;
    top:5px;
    padding-left: 8px;
  }
  .teacher-info p{
    padding: 0;
    margin: 0;
  }
  .mu-list{
    z-index: -1;
    padding-top: 102px;
    padding-bottom: 0;
  }
  .mu-item{
  }
  .subject{
    padding-left: 3px;
    padding-right: 3px;
  }
  .teacherList{
    height:60%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
