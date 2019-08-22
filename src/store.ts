import { DummyRecordManager } from './scripts/io/dummy-record-manager';
import Vue from 'vue';
import Vuex from 'vuex';
import { Stages } from './scripts/record/stage';
import { Girls } from './scripts/girl/girl';
import { PlayerRanks } from './scripts/record/player_rank';
import { Events } from './scripts/record/event';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stages: Stages.all(),
    girls: Girls.all(),
    player_ranks: PlayerRanks.all(),
    events: Events.all(),
    record_manager: new DummyRecordManager(1000)
  },
  mutations: {

  },
  actions: {

  },
});
