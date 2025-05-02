import { Box, Heading } from '@chakra-ui/react';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Box position="relative" display="inline-block" paddingX="55px" marginBottom={3}>
      <Heading as="h1" size="md" color="#FEA808" textTransform="none">
        {title}
      </Heading>
      {/* 左線 */}
      <Box
        position="absolute"
        content="''"
        top="50%"
        left="0"
        width="45px"
        height="2px"
        borderTop="solid 1px #FEA808"
        borderBottom="solid 1px #FEA808"
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
