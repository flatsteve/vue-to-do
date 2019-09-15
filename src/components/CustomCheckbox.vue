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
@import "../styles/colors";

.checkbox {
  display: none;
}

.custom-checkbox {
  position: relative;

  &:hover {
    cursor: pointer;

    &:before {
      background-color: $green;
    }
  }

  &:before {
    background-color: $white;
    border: 3px solid;
    border-color: $blue;
    border-radius: 50%;
    content: "";
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    transition: all 0.3s ease-in;
  }
}

.checkbox:checked + .custom-checkbox:before {
  background-color: $green;
}

.checkbox:checked + .custom-checkbox:after {
  content: "";
  display: block;
  width: 0.5rem;
  height: 1rem;
  border: solid $white;
  border-width: 0 0.3rem 0.3rem 0;
  transform: rotate(45deg);
  position: absolute;
  top: 0.6rem;
  left: 1rem;
}
</style>