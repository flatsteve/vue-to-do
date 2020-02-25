<template>
  <div>
    <input
      :id="`checkbox-${id}`"
      class="checkbox"
      type="checkbox"
      :name="id"
      :checked="checked"
      @change="change"
    />
    <label class="custom-checkbox" :for="`checkbox-${id}`"></label>
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: {
    checked: {
      type: Boolean
    },
    id: {
      default: "0",
      type: String
    }
  },
  methods: {
    change(event) {
      this.$emit("checked", event.target.name);
    }
  }
};
</script>

<style scoped lang="scss">
.checkbox {
  display: none;
}

.custom-checkbox {
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:before {
    background-color: $white;
    border: 3px solid;
    border-color: $blue;
    border-radius: 50%;
    content: "";
    display: block;
    height: 2rem;
    width: 2rem;
    transition: all 0.3s ease-in;
  }
}

.checkbox:checked + .custom-checkbox:before {
  background-color: $green;
}

.checkbox:checked + .custom-checkbox:after {
  content: "";
  display: block;
  width: 0.4rem;
  height: 1rem;
  border: solid $white;
  border-width: 0 0.25rem 0.25rem 0;
  transform: rotate(45deg);
  position: absolute;
  top: 0.5rem;
  left: 0.9rem;
}
</style>
