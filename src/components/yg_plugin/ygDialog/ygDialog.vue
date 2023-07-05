<template>
  <el-dialog :title="name" :width="option.width"
             :top="option.top" append-to-body destroy-on-close
             :fullscreen="option.fullscreen"
             :before-close="close"
             :visible.sync="dialogFormVisible">
    <comment ref="commentDialog" :name="type"
             :is="type" @cancel="cancel" :title="name"></comment>
  </el-dialog>
</template>
<script>
export default {
  name: "ygDialog",
  data() {
    return {
      dialogFormVisible: false,
      name:'', type:'',
      option:{
        width:'50%',
        top:'4rem'
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
    show(title,type,option,row){
      const that=this
      console.log(title,type,option,row)
      this.name=title
      this.type=type
      this.option=option.top?option:this.option
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
