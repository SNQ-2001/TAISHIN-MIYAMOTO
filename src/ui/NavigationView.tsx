import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode"
import { Stack, Flex, Box } from "@chakra-ui/react"

export default function NavigationView({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>TAISHIN MIYAMOTO</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'}>
              <ColorModeButton />
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  )
}
