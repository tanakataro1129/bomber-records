<template>
  <div>
    <v-layout row>
      <v-flex xs2>
        <v-card dark color="primary">{{record.victory}}</v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="primary">{{playDate}}</v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="primary">{{record.charactor}}</v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="primary">{{record.stage}}</v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="primary">{{record.rank}}</v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { WarRecord } from "../scripts/record/record";
import * as Moment from "moment";

@Component({
  computed: {
    playDate: function() {
      return Moment(this.record.date).format("YYYY/MM/DD");
    }
  }
})
export default class RecordUnit extends Vue {
  @Prop({ required: true }) record!: WarRecord;
}
</script>