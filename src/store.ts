import { DummyRecordManager } from './scripts/io/dummy-record-manager';
import Vue from 'vue';
import Vuex from 'vuex';
import { _stages } from './assets/constants/stages';
import { _girls } from './assets/constants/girls';
import { _player_ranks } from './assets/constants/player_ranks';
import { createDummy } from './scripts/dummy-record';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stages: _stages,
    girls: _girls,
    player_ranks: _player_ranks,
    record_manager: new DummyRecordManager(1000)
  },
  mutations: {

  },
  actions: {

  },
});
