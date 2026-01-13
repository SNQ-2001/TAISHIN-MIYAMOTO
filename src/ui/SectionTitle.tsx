import { Box, Text } from "@chakra-ui/react";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  const lineStyles = {
    position: "absolute",
    top: "50%",
    width: "45px",
    height: "2px",
    borderTop: "solid 1px orange",
    borderBottom: "solid 1px orange",
  };

  return (
    <Box position="relative" display="inline-block" px="55px" mb={3}>
      <Text fontSize="2em" fontWeight="bold" color="orange">
        {title}
      </Text>
      {/* 左線 */}
      <Box {...lineStyles} left="0" />
      {/* 右線 */}
      <Box {...lineStyles} right="0" />
    </Box>
  );
}