<template>
  <img src="teacher.icon"/>
  <p>{{teacher.name}}</p>
  <p><i :class="teacher.sex==='男'?'fa fa-mars green':'fa fa-venus pink'"></i></p>
  <p>专业:{{teacher.major}}</p>
  <p>教授课程:<span v-for="subject in teacher.subjects">{{subject}}</span></p>
  <p>授课区域:<span v-for="area in teacher.areas">{{area}}</span></p>
  <p>薪水要求:{{teacher.pay}}</p>
  <p>自我描述:{{teacher.description}}</p>
</template>
