<template>
  <div class="home" v-loading="isLoading">
    <el-button @click="operation('弹框','ygDialog')" type="primary">弹框</el-button>
    <el-button @click="operation('地区选择','ygRegionSelector')" type="primary">地区选择</el-button>
    <el-button @click="operation('抽屉','ygDrawer')" type="primary">抽屉</el-button>
    <h4>弹框抽屉不要连续调用，渲染有问题</h4>
    <div class="testBox">
      <h4>演示:{{testData.name}}</h4>
      <yg-dialog v-if="testData.type=='ygDialog'" ref="commentDialog"></yg-dialog>
      <yg-region-selector v-show="testData.type=='ygRegionSelector'" ref="commentDialog"></yg-region-selector>
      <yg-drawer v-if="testData.type=='ygDrawer'" ref="commentDialog"></yg-drawer>
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
            that.$nextTick(()=>{
              that.$refs.commentDialog.show(name,'demo',{},{})
            })
            break;
          case 'ygDrawer':
            that.$nextTick(()=>{
              that.$refs.commentDialog.show(name,'ygDrawer_demo',{},{})
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
