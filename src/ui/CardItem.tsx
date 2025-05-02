import { Link, VStack, Image, Heading, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

export default function CardItem({
  url,
  iconSrc,
  title,
  details,
}: {
  url: string;
  iconSrc: string;
  title: string;
  details: string;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
      w="100%" // Linkを親要素の幅まで広げる
    >
      <VStack
        w="100%" // VStackを親要素の幅まで広げる
        bg={useColorModeValue('gray.100', 'gray.900')}
        borderRadius="10px"
        p={4}
        align="start"
        boxShadow="md"
        transition="transform 0.2s"
      >
        <Image src={iconSrc} alt={title} boxSize="100px" borderRadius="20px" />
        <Heading as="h3" size="sm" color="#e0e5ec">
          {title}
        </Heading>
        <Text fontSize="sm" color="#848484">
          {details}
        </Text>
      </VStack>
    </Link>
  );
}