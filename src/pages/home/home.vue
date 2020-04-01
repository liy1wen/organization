<template>
  <div>
    <card :name="name" :date="date" :image="image">
      <h4 class="title" slot="title">牛肉汉堡卡片</h4>
      <h4 class="comment" slot="comment">评价：好吃不腻</h4>
    </card>
  </div>
</template>
<script>
import card from '@c/card'
export default {
  components:{
    card
  },
  data() {
    return {
      name:'牛肉汉堡',
      date:'2020-01-14 14:18:16',
      image:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    }
  },
}
</script>
<style lang="scss" scoped>
  .title{
    height: 40px;
    line-height: 25px;
    text-align: center;
  }
  .comment{
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
</style>