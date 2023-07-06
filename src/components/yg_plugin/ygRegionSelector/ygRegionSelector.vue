<template>
  <div>
    <el-cascader
        :value="value"
        :options="options"
        :placeholder="placeholder"
        filterable clearable
        @change="change"
    ></el-cascader>
  </div>
</template>
<script>
export default {
  name: "ygRegionSelector",
  props: {
    value: {
      type: Array
    },
    placeholder: {
      type: String,
      required: false,
      default: '请选择地址'
    },
    options:{}
  },
  model: {
    prop: 'value',
    event: 'a'
  },
  data() {
    return {

    }
  },
  watch:{
    options(e){
      if(e.length>0&&!e[0].children){
        this.region(e,0)
      }
    }
  },
  methods: {
    change(value) {
      this.$emit('a', value);
    },
    region(arr, parentId) {
      let a = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].parentId === parentId)
          a.push({
            value: arr[i].id,
            label: arr[i].name,
            children: this.region(arr, arr[i].id)});
      }
      return a.length > 0 ? a : null;
    }
  }
}
</script>
