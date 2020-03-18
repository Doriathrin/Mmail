<template>
  <div class="look">
    
  </div>
</template>

<script>
import {listData} from '@/request/http'
export default {
  name: 'Look',
  data() { 
    return {
      listData:[],
    }
  },
  methods: {
    async change(){
      const res=await listData({id:this.$route.query.id});
      console.log(res);
      this.listData=res.data.data.list;
    }
  },
  mounted() {
    let id=this.$route.query.id;
    this.change();
  },
 }
</script>

<style lang="" scoped>

</style>