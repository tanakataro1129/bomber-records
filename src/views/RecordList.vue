<template>
  <div>
    <v-app id="inspire">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 v-for="record in records" :key="Number(record.date)">
            <RecordUnit :record="record"></RecordUnit>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { WarRecord } from "../scripts/record/record";
import RecordUnit from "./RecordUnit.vue";

@Component({
  components: {
    RecordUnit
  }
})
export default class RecordList extends Vue {
  @Prop({ required: true }) records!: WarRecord[];
}
</script>
