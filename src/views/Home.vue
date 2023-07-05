<template>
  <div class="home">
    <el-button @click="operation('dialog')" type="primary">弹框</el-button>
    <el-button @click="operation('addressChange')" type="primary">地区选择</el-button>
    <yg-dialog ref="ygDialog" @cancel="cancel"></yg-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  mounted() {

  },
  methods:{
    cancel(row){
      console.log(row)
    },
    operation(name){
      switch (name) {
        case 'dialog':
          this.$refs.ygDialog.show('demo','demo',{},{})
          break;
        case 'addressChange':
          break;
      }
    }
  }
}
</script>
<style lang="less">

</style>
