<template>
  <div>
    <input
      class="checkbox"
      type="checkbox"
      :name="id"
      :id="`checkbox-${id}`"
      :checked="checked"
      @change="change"
    />
    <label class="custom-checkbox" :for="`checkbox-${id}`"></label>
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: ["checked", "id"],
  methods: {
    change: function(event) {
      this.$emit("checked", event.target.name);
    }
  }
};
</script>

<style scoped lang="scss">
.checkbox {
  display: none;
}

.custom-checkbox:hover {
  cursor: pointer;
}

.custom-checkbox:before {
  background-color: #f9f9f9;
  border: 3px solid;
  border-color: #3498db;
  border-radius: 50%;
  content: "";
  display: block;
  height: 2.5rem;
  width: 2.5rem;
}

.checkbox:checked + .custom-checkbox:before {
  background-color: #f39c12;
}
</style>