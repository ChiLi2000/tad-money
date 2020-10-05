import clone from "@/lib/clone";

const recordListModel = {
  data: [] as RecordItem[],

  fetch() {
    return JSON.parse(
      window.localStorage.getItem("recordList") || "[]"
    ) as RecordItem[];
  },

  create(record: RecordItem) {
    const record2: RecordItem = clone(record);
    this.data.push(record2);
    this.save();
  },
  save() {
    window.localStorage.setItem("recordList", JSON.stringify(this.data));
  },
};

export default recordListModel;
