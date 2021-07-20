<template>
  <CFlex
    align="center"
    justify="between"
    bg="white"
    h="60px"
    borderBottom="1px"
    borderBottomColor="gray.300"
  >
    <CFlex
      w="60px"
      h="100%"
      borderRight="1px"
      borderRightColor="gray.300"
      align="center"
      justify="center"
    >
      <c-icon name="onlyLogo" color="red.400" size="42px" />
    </CFlex>
    <c-menu>
      <c-menu-button
        h="100%"
        p="0"
        m="0"
        bg="white"
        transition="all 0.2s"
        :_hover="{ bg: 'gray.100' }"
        :_focus="{ outline: 0 }"
      >
        <c-icon name="triangle-up" ml="16px" />File Management
        <c-icon name="chevron-down" />
      </c-menu-button>
      <c-menu-list>
        <c-menu-item>New File</c-menu-item>
        <c-menu-item>New Window</c-menu-item>
        <c-menu-divider />
        <c-menu-item>Open...</c-menu-item>
        <c-menu-item>Save File</c-menu-item>
      </c-menu-list>
    </c-menu>
  </CFlex>
</template>
<script>
export default {
  name: "NidsHeader",
};
</script>
