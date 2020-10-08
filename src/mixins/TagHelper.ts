import Vue from "vue";
import Compontent from "vue-class-component";

@Compontent
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name !== null) {
      if (!name) {
        return window.alert("标签名不能为空");
      }
      this.$store.commit("createTag", name);
    }
  }
}

export default TagHelper;
