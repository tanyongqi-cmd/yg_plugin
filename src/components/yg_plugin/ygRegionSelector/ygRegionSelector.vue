<template>
  <div>
    <el-cascader
        :value="value"
        :options="[]"
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
  },
  model: {
    prop: 'value',
    event: 'a'
  },
  data() {
    return {

    }
  },
  methods: {
    change(value) {
      this.$emit('a', value);
    }
  }
}
</script>
