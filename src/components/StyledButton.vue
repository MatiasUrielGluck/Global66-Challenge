<script setup>
defineProps({
  secondary: {
    type: Boolean,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  forceWidth: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(["action"]);
</script>

<template>
  <div class="btn prevent-select" :class="{ secondary: secondary, forceWidth: forceWidth }" @click="emit('action')">
    <div class="icon-container" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.btn {
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: v-bind(width);
  height: v-bind(height);
  border-radius: 60px;
  background: var(--color-accent-background);
  transition: all 0.2s ease;
}

.btn:active {
  background: var(--color-button-pressed);
}

@media (min-width: 1024px) {
  .btn.forceWidth {
    width: 275px;
  }
}

.btn.secondary {
  background: var(--color-accent-secondary);
}

p {
  color: var(--color-text-secondary);
  font-weight: 700;
  font-size: 18px;
  line-height: 21.6px;
  text-align: center;
}
</style>
