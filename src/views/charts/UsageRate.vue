<script lang="ts">
import { Pie } from "vue-chartjs";
import { GirlName } from "../../scripts/girl/girl";

export default {
  extends: Pie,
  computed: {
    usage: function() {
      var usage = {};
      Object.entries(GirlName).forEach(([key, value]) => {
        usage[key] = 0;
      });
      this.$store.state.record_manager.selectAll().forEach(record => {
        usage[record.charactor.name] += 1;
      });
      return usage;
    },
    girlColors: function() {
      var colors = {};
      colors[GirlName.Shiro] = "rgba(0, 204, 204, 0.5)";
      colors[GirlName.Kuro] = "rgba(0, 0, 128, 0.5)";
      colors[GirlName.Shiori] = "rgba(255, 0, 0, 0.5)";
      colors[GirlName.Gray] = "rgba(128, 128, 128, 0.5)";
      colors[GirlName.Oran] = "rgba(255, 153, 0, 0.5)";
      colors[GirlName.Urushi] = "rgba(221, 0, 0, 0.5)";
      colors[GirlName.Sepia] = "rgba(153, 51, 0, 0.5)";
      colors[GirlName.Emera] = "rgba(68, 255, 153, 0.5)";
      colors[GirlName.Puple] = "rgba(128, 0, 128, 0.5)";
      colors[GirlName.Tsugaru] = "rgba(153, 204, 0, 0.5)";
      colors[GirlName.Momoko] = "rgba(255, 153, 204, 0.5)";
      colors[GirlName.Aqua] = "rgba(0, 0, 255, 0.5)";
      colors[GirlName.GrimAloe] = "rgba(51, 51, 51, 0.5)";
      return colors;
    }
  },
  mounted() {
    var chartData = {
      labels: Object.keys(this.usage),
      datasets: [
        {
          backgroundColor: Object.keys(this.usage).map(
            key => this.girlColors[key]
          ),
          data: Object.keys(this.usage).map(key => this.usage[key])
        }
      ]
    };
    var options = {
      title: {
        display: true,
        responsive: true,
        text: "Usage Rate"
      }
    };
    this.renderChart(chartData, options);
  }
};
</script>