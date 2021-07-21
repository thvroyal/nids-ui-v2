<template>
  <CFlex
    w="100%"
    bg="white"
    h="60px"
    borderBottom="1px"
    borderBottomColor="gray.300"
    align="center"
    justify-content="space-between"
    pos="fixed"
    zIndex="10"
  >
    <CFlex w="420px" h="100%" align="center">
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
      <CFlex align="center" justify="between" h="60px">
        <c-menu>
          <c-menu-button
            h="100%"
            px="16px"
            w="360px"
            m="0"
            bg="white"
            display="flex"
            borderBottom="1px"
            borderBottomColor="gray.300"
            justify-content="space-between"
            borderRadius="0"
            borderRight="1px"
            borderRightColor="gray.300"
            transition="all 0.2s"
            :_hover="{ bg: 'gray.100' }"
            :_focus="{ outline: 0 }"
          >
            <c-box fontSize="lg" fontWeight="normal"
              ><c-icon name="triangle-up" mr="10px" />File Management
            </c-box>
            <c-icon name="chevron-down" />
          </c-menu-button>
          <c-menu-list w="360px" fontSize="lg" fontWeight="normal">
            <c-menu-item py="12px" v-for="item in Array(5)" :key="item"
              ><c-icon name="triangle-up" mr="10px" />File
              Management</c-menu-item
            >
          </c-menu-list>
        </c-menu>
      </CFlex>
    </CFlex>
    <CFlex direction="row" align="center" mr="24px">
      <c-icon name="sun" mr="16px" size="24px" />
      <c-avatar
        size="md"
        name="Kelvin Omereshone"
        src="https://bit.ly/chakra-kelvin-omereshone"
      />
      <c-icon name="chevron-down" />
    </CFlex>
  </CFlex>
</template>
<script>
export default {
  name: "NidsHeader",
};
</script>
