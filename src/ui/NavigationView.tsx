import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";
import { Stack, Flex, Box, Text } from "@chakra-ui/react";

type NavigationViewProps = {
  children: React.ReactNode;
};

export default function NavigationView({ children }: NavigationViewProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

const Header = () => (
  <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Logo />
      <Flex alignItems="center">
        <Stack direction="row">
          <ColorModeButton />
        </Stack>
      </Flex>
    </Flex>
  </Box>
);

const Footer = () => (
  <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
    <Flex h={16} alignItems="center" justifyContent="center">
      <Text fontSize="0.875rem" pl="0.5rem" color="gray.500">
        © {new Date().getFullYear()} Taishin Miyamoto
      </Text>
    </Flex>
  </Box>
);

const Logo = () => (
  <Text fontSize="2em" fontWeight="bold" color="orange">
    TAISHIN MIYAMOTO
  </Text>
);