<template>
  <div>
    <h2>게시판 리스트</h2>
    <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a>
    <br />
    <br />
    
    <p><NuxtLink to="/write">작성</NuxtLink></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    getList() {
      axios.get("http://localhost:3000/api/board").then((res) => {
        console.log("data: ", res.data);
      });
    },
  },
};
</script>

<style></style>
