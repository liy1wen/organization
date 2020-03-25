<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="o in 9" :key="o">
        <el-card>
          <slot name="title"></slot>
          <img :src="image" class="image"/>
          <div style="padding: 14px;">
            <span>{{ name }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ date }}</time>
              <el-button type="text" class="button">编辑</el-button>
            </div>
          </div>
          <slot name="comment"></slot>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props:['name','date','image'],
  data() {
    return {
        
    };
  }
};
</script>
<style lang="scss" scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>