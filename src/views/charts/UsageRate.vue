<template>
  <div id="contents">
    <GChart type="PieChart" :data="chartData" :options="chartOptions"></GChart>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { WarRecord } from "../../scripts/record/record";
import { GChart } from "vue-google-charts";

@Component({
  components: {
    GChart
  },

  computed: {
    usage: function() {
      var records = this.$store.state.record_manager.period(
        new Date(this.lower_date),
        new Date(this.upper_date)
      );
      var usage = {};
      records.forEach(r =>
        usage[r.charactor]
          ? (usage[r.charactor] += 1)
          : (usage[r.charactor] = 1)
      );
      return usage;
    },

    chartData: function() {
      var data = [];
      data.push(["Charactor", "Use"]);
      Object.keys(this.usage).forEach(k => data.push([k, this.usage[k]]));
      return data;
    },

    chartOptions: function() {
      return {
        title: "Usage"
      };
    }
  }
})
export default class Google extends Vue {
  @Prop() lower_date: Date;
  @Prop() upper_date: Date;
}
</script>