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
    top="0"
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
            justify-content="space-between"
            borderBottom="1px"
            borderBottomColor="gray.300"
            borderRadius="0"
            borderRight="1px"
            borderRightColor="gray.300"
            transition="all 0.2s"
            :_hover="{ bg: 'gray.100' }"
            :_focus="{ outline: 0 }"
          >
            <c-box
              fontSize="lg"
              fontWeight="normal"
              display="flex"
              align-items="center"
              ><c-icon name="paperNote" mr="10px" size="24px" />File Management
            </c-box>
            <c-icon name="arrowDown" />
          </c-menu-button>
          <c-menu-list w="360px" fontSize="lg" fontWeight="normal">
            <c-menu-item py="12px" v-for="item in Array(5)" :key="item"
              ><c-box
                fontSize="lg"
                fontWeight="normal"
                display="flex"
                align-items="center"
                ><c-icon name="paperNote" mr="10px" size="24px" />File
                Management
              </c-box></c-menu-item
            >
          </c-menu-list>
        </c-menu>
      </CFlex>
    </CFlex>
    <CFlex direction="row" align="center" mr="24px" h="100%">
      <c-icon name="bell" mr="16px" size="24px" />
      <c-menu>
        <c-menu-button
          h="100%"
          m="0"
          bg="white"
          display="flex"
          borderRadius="8px"
          transition="all 0.2s"
          :_hover="{ bg: 'gray.100' }"
          :_focus="{ outline: 0 }"
        >
          <c-avatar size="md" name="HoangViet" />
          <c-icon name="arrowDown" />
        </c-menu-button>
        <c-menu-list fontWeight="normal">
          <c-menu-item>Profile</c-menu-item>
          <c-menu-item>Setting</c-menu-item>
          <c-menu-item>Theme</c-menu-item>
          <c-menu-divider />
          <c-menu-item color="red.500">Log out</c-menu-item>
        </c-menu-list>
      </c-menu>
    </CFlex>
  </CFlex>
</template>
<script>
export default {
  name: "NidsHeader",
};
</script>
