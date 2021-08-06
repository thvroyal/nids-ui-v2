<template>
  <c-box>
    <nids-header />
    <c-box mt="60px" bg="gray.50">
      <statistic />
      <CFlex align="center" justify="between" px="32px">
        <c-stack :spacing="2" isInline>
          <c-input-group>
            <c-input-left-element
              ><c-icon name="search" color="gray.300"
            /></c-input-left-element>
            <c-input type="text" placeholder="File name" />
          </c-input-group>
          <c-input-group>
            <c-input-left-element
              ><c-icon name="search" color="gray.300"
            /></c-input-left-element>
            <c-input type="text" placeholder="Upload time" />
          </c-input-group>
          <c-input-group>
            <c-input-left-element
              ><c-icon name="search" color="gray.300"
            /></c-input-left-element>
            <c-input type="text" placeholder="Start time" />
          </c-input-group>
          <c-input-group>
            <c-input-left-element
              ><c-icon name="search" color="gray.300"
            /></c-input-left-element>
            <c-input type="text" placeholder="Time" />
          </c-input-group>
        </c-stack>
      </CFlex>
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
