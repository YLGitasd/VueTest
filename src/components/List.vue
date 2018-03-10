<template>
  <MTable :hotSales="HotSales"></MTable>
</template>

<script>
import MTable from '../base/MTable.vue';
import {getHotSale} from "../api";

export default {
    data() {
        return {HotSales:[]}
    },
    created() {
      this.getData();
    },
    methods: {
      async getData(){
        const HotSales = await  getHotSale();
        this.HotSales = HotSales;
      }
    },
    computed: {},
    components: {MTable}
}

</script>

<style scoped>

</style>
