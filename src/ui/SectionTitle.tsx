import { Box, Text } from '@chakra-ui/react';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Box position="relative" display="inline-block" paddingX="55px" marginBottom={3}>
      <Text fontSize="2em" fontWeight="bold" color="orange">
        {title}
      </Text>
      {/* 左線 */}
      <Box
        position="absolute"
        content="''"
        top="50%"
        left="0"
        width="45px"
        height={"2px"}
        borderTop="solid 1px orange"
        borderBottom="solid 1px orange"
      />
      {/* 右線 */}
      <Box
        position="absolute"
        content="''"
        top="50%"
        right="0"
        width="45px"
        height="2px"
        borderTop="solid 1px #FEA808"
        borderBottom="solid 1px #FEA808"
      />
    </Box>
  );
}
