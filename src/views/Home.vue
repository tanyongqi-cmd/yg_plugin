<template>
  <div class="home" v-loading="isLoading">
    <el-button @click="operation('弹框','ygDialog')" type="primary">弹框</el-button>
    <el-button @click="operation('地区选择','ygRegionSelector')" type="primary">地区选择</el-button>

    <div class="testBox">
      <h4>演示:{{testData.name}}</h4>
      <yg-dialog v-if="testData.type=='ygDialog'" ref="commentDialog"></yg-dialog>
      <yg-region-selector v-show="testData.type=='ygRegionSelector'" ref="commentDialog"></yg-region-selector>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      isShow:false,
      isLoading:false,
      testData:{
        name:'',
        type:'',
      }
    }
  },
  mounted() {

  },
  methods:{
    operation(name,type){
      const that=this
      this.isShow=false
      this.isLoading=true
      this.testData={
        name:name,
        type:type,
      }
      setTimeout(()=>{
        that.isShow=true
        that.isLoading=false
        switch (type) {
          case 'ygDialog':
            this.$nextTick(()=>{
              that.$refs.commentDialog.show(name,'demo',{},{})
            })
            break;
          case 'ygRegionSelector':
            break;
        }
      },1000)
    },
    cancel(row){
      console.log(row)
    },
  }
}
</script>
<style lang="less">
.testBox{

}
</style>
