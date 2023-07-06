<template>
  <div class="dialogBox">
    <div>demo</div>
  </div>
</template>

<script>
export default {
  name: "ygDrawer_demo",
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
