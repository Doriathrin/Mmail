<template>
  <div class="lineitem">
    <p class="title">品类详情</p>
    <div class="div1">
        <div>
            <div>订单号</div>
            <div>{{orderNo}}</div>
        </div>
        <div>
            <div>创建时间</div>
            <div>{{createTime}}</div>
        </div>
        <div>
            <div>收件人</div>
            <div>{{receiverName}},{{receiverCity}},{{receiverAddress}}</div>
        </div>
        <div>
            <div>订单状态</div>
            <div>{{statusDesc}}</div>
        </div>
        <div>
            <div>支付方式</div>
            <div>{{paymentTypeDesc}}</div>
        </div>
        <div>
            <div>订单金额</div>
            <div>￥{{payment}}</div>
        </div>
    </div>
    <div class="div2" >
        <table border="1">
        <tr>
            <th>商品详情</th>
            <th>商品信息</th>
            <th>单价</th>
            <th>数量</th>
            <th>合计</th>
        </tr>
        <tr>
            <td><img width="100px" :src='imageHost+productImage' alt=""></td>
            <td>{{productName}}</td>
            <td>￥{{payment}}</td>
            <td>{{quantity}}</td>
            <td>￥{{payment}}</td>
        </tr>
        </table>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  name: 'lineitem',
  data() { 
    return {
      orderNo:"",
      createTime:"",
      receiverName:"",
      receiverCity:"",
      receiverAddress:"",
      statusDesc:"",
      paymentTypeDesc:"",
      payment:"",
      imageHost:"",
      productImage:"",
      productName:"",
      payment:"",
      quantity:""
    }
  },
  computed: {
    ...mapState("a",["scope"]),
  },
  methods: {

  },
  mounted() {
      this.orderNo=this.scope.orderNo;
      this.createTime=this.scope.createTime;
      this.receiverName=this.scope.receiverName;
      this.receiverCity=this.scope.shippingVo.receiverCity;
      this.receiverAddress=this.scope.shippingVo.receiverAddress;
      this.statusDesc=this.scope.statusDesc;
      this.paymentTypeDesc=this.scope.paymentTypeDesc;
      this.payment=this.scope.payment;
      this.imageHost=this.scope.imageHost;
      this.productImage=this.scope.orderItemVoList[0].productImage;
      this.productName=this.scope.orderItemVoList[0].productName;
      this.payment=this.scope.payment;
      this.productImage=this.scope.orderItemVoList[0].productImage;
      this.productImage=this.scope.orderItemVoList[0].productImage;
      this.productName=this.scope.payment;
      this.quantity=this.scope.orderItemVoList[0].quantity;
  },
 }
</script>

<style lang="scss" scoped>

</style>