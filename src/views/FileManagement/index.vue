<template>
  <c-box>
    <nids-header />
    <c-box mt="60px" bg="gray.50">
      <statistic />
    </c-box>
  </c-box>
</template>

<script>
import NidsHeader from "@/components/common/NidsHeader";
import Statistic from "./Statistic.vue";
export default {
  name: "FileManagement",
  components: { NidsHeader, Statistic },
};
</script>
