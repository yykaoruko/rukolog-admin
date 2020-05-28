<template>
  <div>hoooooo</div>
</template>

<script>
import { getIssues } from '~/gateways/issues.gateway';
export default {
  created() {
    const issues = getIssues();
    console.log(issues);
  },
};
</script>
