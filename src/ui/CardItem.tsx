import { ServiceStatus } from '@/model/ServiceStatus';
import { Link, VStack, Image, Heading, Text, Box, HStack } from '@chakra-ui/react';

export default function CardItem({
  url,
  iconSrc,
  title,
  details,
  status,
}: {
  url: string;
  iconSrc: string;
  title: string;
  details: string;
  status: ServiceStatus;
}) {
  const isServiceEnded = status === ServiceStatus.ENDED;
  const disabled = isServiceEnded;

  return (
    <Link
      href={disabled ? undefined : url} // disabledのときリンクを無効化
      target={disabled ? undefined : '_blank'} // disabledのときリンク属性を無効化
      rel={disabled ? undefined : 'noopener noreferrer'} // disabledのときリンク属性を無効化
      style={{ textDecoration: 'none', pointerEvents: disabled ? 'none' : 'auto' }} // pointerEventsでタップ無効化
      w="100%"
    >
      <VStack
        w="100%"
        bg={'gray.900'}
        borderRadius="10px"
        gap={3}
        p={4}
        align="baseline"
        boxShadow="md"
        transition="transform 0.2s"
        opacity={disabled ? 0.5 : 1} // 無効化時にカード全体の透明度を下げる
      >
        <Image src={iconSrc} alt={title} boxSize="100px" borderRadius="20px" />
        <VStack gap={1} align={'start'} w="100%">
          <HStack w="100%" align="center">
            {/* タイトル */}
            <Heading as="h3" size="md" color={disabled ? '#9a9a9a' : '#e0e5ec'}>
              {title}
            </Heading>
            {/* ServiceStatusラベル */}
            {isServiceEnded && (
              <Box
                bg={'red.500'}
                color="white"
                px={2}
                py={0.5}
                borderRadius="5px"
                fontSize="2xs"
                fontWeight="bold"
              >
                サービス終了
              </Box>
            )}
          </HStack>
          <Text fontSize="sm" color={disabled ? '#c0c0c0' : '#848484'}>
            {details}
          </Text>
        </VStack>
      </VStack>
    </Link>
  );
}