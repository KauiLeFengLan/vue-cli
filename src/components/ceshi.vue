<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
<input type="button" value="弹出" @click="altear">
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'ceshi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      altear(){
        Toast('提示信息');
      }
    }
}

