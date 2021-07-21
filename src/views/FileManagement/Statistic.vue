<template>
  <CFlex justify="center" py="24px">
    <CStack :spacing="40" isInline>
      <CFlex direction="column" align="center">
        <CText fontSize="5xl" fontWeight="medium" color="blue.600">90%</CText>
        <CText fontSize="lg" color="blackAlpha.800">Visibility</CText>
      </CFlex>
      <CFlex direction="column" align="center">
        <CText fontSize="5xl" fontWeight="medium" color="red.600">12</CText>
        <CText fontSize="lg" color="blackAlpha.800">Security Alert</CText>
      </CFlex>
      <CFlex direction="column" align="center">
        <CText fontSize="5xl" fontWeight="medium" color="green.600">32</CText>
        <CText fontSize="lg" color="blackAlpha.800"
          >Detected Applications</CText
        >
      </CFlex>
      <CFlex direction="column" align="center">
        <CText fontSize="5xl" fontWeight="medium" color="orange.600">64</CText>
        <CText fontSize="lg" color="blackAlpha.800">Detected Protocol</CText>
      </CFlex>
    </CStack>
  </CFlex>
</template>

<script>
export default {
  name: "Statistic",
};
</script>
