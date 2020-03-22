<template>
  <div class='linel'>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Echarts',
  data() { 
    return {
       
    }
  },
  methods: {
    add(){
    const option={
      title: {
          text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }],
    } 
      this.myChart.setOption(option);
    }
  },
  mounted() { 
    this.myChart = echarts.init(document.getElementById('main'));
    this.add();
  },
 }
</script>

<style lang="scss" scoped>
.linel{
  display: flex;
  justify-content: center;
}
</style>