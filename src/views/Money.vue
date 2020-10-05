<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem
        field-name="备注"
        placeholder="请输入备注"
        :value.sync="record.notes"
      />
    </div>
    <Tags :selectedTags.sync="record.tags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/Money/Tags.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import { Component} from "vue-property-decorator";

import store from "@/store/index2";

@Component({
  components: { Tags, FormItem, Types, NumberPad },
})
export default class Money extends Vue {
  recordList = store.recordList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createdAt: new Date(),
  };

  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss" >
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
  background: #f5f5f5;
}
</style>
