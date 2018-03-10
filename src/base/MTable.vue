<template>
  <div class="panel panel-primary">
    <!-- Default panel contents -->
    <div class="panel-heading">类目趋势</div>

    <!-- Table -->
    <table class="table table-hover">
      <tr style="height: 80px;border-bottom: 1px solid #d9d9d9">
        <th width="80px">日期</th>
        <th width="60px">类目</th>
        <th width="80px">主图缩略图</th>
        <th width="200px">商品信息</th>
        <th>所属店铺</th>
        <th>热销排名</th>
        <th>支付子订单数</th>
        <th>交易增长幅度</th>
        <th>支付转化率指数</th>
        <th>操作</th>

      </tr>
      <tr v-for="hot in hotSales" >
        <td>{{hot.date}}</td>
        <td>{{hot.category}}</td>
        <td><img :src="hot.mainThumbnail"></td>
        <td><a :href="hot.goodsLink">{{hot.goodsMsg}}</a></td>
        <td><a :href="hot.storeLink">{{hot.storeName}}</a></td>
        <td>{{hot.hotRanking}}</td>
        <td>{{hot.paySuborders}}</td>
        <td>{{hot.tradeAmplification}}</td>
        <td>{{hot.tradeTransformation}}</td>
        <td>
          <a class="operate" :href="hot.viewDetails"><i class="iconfont icon-icon-chakanxq"></i></a>
          <a class="operate" :href="hot.sameSource"><i class="iconfont icon-zuixinhuoyuan"></i></a>
        </td>

      </tr>
    </table>
  </div>
</template>

<script>

  export default {
    props:['hotSales'],
    data() {
      return {}
    },
    created() {
      // this.getData();
    },
    methods: {
      // async getData(){
      //   let hotSales = await getHotSale();
      //   console.log(hotSales);
      //   this.hotSales = hotSales;
      // }
    },
    computed: {},
    components: {}
  }

</script>

<style scoped lang="less">
.panel,.panel-heading {
  border-radius: 0 !important;
}
table{
  position: relative;
  text-align: center;
}
table tr th{
  /*position: fixed;*/
  background: #fbfbfb;
  font-weight: bolder;
  text-align: center;
}

table tr{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #d8d8d8;
}
.operate{

  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center
}
</style>

