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
  url: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["action"]);
</script>

<template>
  <div class="btn" :class="{ secondary: secondary }" @click="emit('action')">
    <div class="icon-container" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 11px 20px;
  border-radius: 60px;
  background: var(--color-accent-background);
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
