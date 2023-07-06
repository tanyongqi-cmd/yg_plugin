<template>
  <el-drawer :title="name" :visible.sync="dialogFormVisible"
             :size="option.size"
             :direction="option.direction"
             :wrapperClosable="option.wrapperClosable"
             :withHeader="option.withHeader"
             append-to-body destroy-on-close
             :before-close="close">
    <comment ref="commentDialog" :name="type"
             :is="type" @cancel="cancel" :title="name"></comment>
  </el-drawer>
</template>
<script>
export default {
  name: "ygDrawer",
  data() {
    return {
      dialogFormVisible: false,
      name:'',
      type:'',
      option:{
        size:'30%',
        direction:'rtl',
        wrapperClosable:true,
        withHeader:true,
      },
    }
  },
  mounted() {

  },
  methods:{
    /**
     * title=弹框名称
     * type=进入的组件
     * option=弹框配置项
     * row=其他入参
     */
    show(title,type,option={
      size:'30%',
      direction:'rtl',
      wrapperClosable:true,
      withHeader:true,
    },row){
      const that=this
      this.name=title
      this.type=type
      this.option=option
      this.dialogFormVisible=true
      console.log(this.option)
      that.$nextTick(function () {
        that.$refs.commentDialog.show(row)
      })
    },
    close(){
      this.dialogFormVisible=false
    },
    cancel(row){
      this.$emit('cancel',row)
      this.close()
    }
  }
}
</script>
