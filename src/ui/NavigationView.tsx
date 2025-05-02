import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode"
import { Stack, Flex, Box, Text } from "@chakra-ui/react"

export default function NavigationView({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize="2em" fontWeight="bold" color="orange">TAISHIN MIYAMOTO</Text>

          <Flex alignItems={'center'}>
            <Stack direction={'row'}>
              {/* ダークモード対応は後ほど */}
              {/* <ColorModeButton /> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  )
}
