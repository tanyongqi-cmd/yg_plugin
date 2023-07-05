<template>
  <div class="dialogBox">
    <div>demo</div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel('取消')">取 消</el-button>
      <el-button type="primary" @click="cancel('确定')">确 定</el-button>
    </span>
  </div>
</template>

<script>
export default {
  name: "demo",
  props:['title'],
  mounted() {

  },
  methods:{
    show(e){
      console.log(e)
    },
    cancel(row){
      this.$emit('cancel', {
        name:this.title,
        row:row
      })
    }
  }
}
</script>

<style scoped>
.dialogBox{
  width: 100%;
}
.dialog-footer{
  display: block;
  width: 100%;
  margin-top: 20px;
  text-align: right;
}
</style>
