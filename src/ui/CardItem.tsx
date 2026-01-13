import { ServiceStatus } from "@/model/ServiceStatus";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Link, VStack, Image, Heading, Text, Box, HStack } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef, useCallback } from "react";

type CardItemProps = {
  url: string;
  iconSrc: string;
  title: string;
  details: string;
  status: ServiceStatus;
};

export default function CardItem({
  url,
  iconSrc,
  title,
  details,
  status,
}: CardItemProps) {
  const isServiceEnded = status === ServiceStatus.ENDED;
  const isDisabled = isServiceEnded;

  const [isMarqueePlay, setIsMarqueePlay] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkWidths = useCallback(() => {
    if (textRef.current && containerRef.current) {
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setIsMarqueePlay(textWidth > containerWidth);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(checkWidths, 100);
    window.addEventListener("resize", checkWidths);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkWidths);
    };
  }, [checkWidths]);

  const handleOnCycleComplete = useCallback(() => {
    setIsMarqueePlay(false);
    setTimeout(() => setIsMarqueePlay(true), 3000);
  }, []);

  return (
    <Link
      href={isDisabled ? undefined : url}
      target={isDisabled ? undefined : "_blank"}
      rel={isDisabled ? undefined : "noopener noreferrer"}
      style={{ textDecoration: "none", pointerEvents: isDisabled ? "none" : "auto" }}
      w="100%"
    >
      <VStack
        ref={containerRef}
        w="100%"
        bg={useColorModeValue("gray.100", "gray.900")}
        borderRadius="10px"
        gap={3}
        p={4}
        align="baseline"
        boxShadow="md"
        transition="transform 0.2s"
        opacity={isDisabled ? 0.5 : 1}
      >
        <Image src={iconSrc} alt={title} boxSize="100px" borderRadius="20px" />
        <VStack gap={1} align="start" w="100%">
          <CardHeader title={title} isServiceEnded={isServiceEnded} />
          <CardDetails
            details={details}
            isMarqueePlay={isMarqueePlay}
            handleOnCycleComplete={handleOnCycleComplete}
            textRef={textRef}
          />
        </VStack>
      </VStack>
    </Link>
  );
}

const CardHeader = ({
  title,
  isServiceEnded,
}: {
  title: string;
  isServiceEnded: boolean;
}) => (
  <HStack w="100%" align="center">
    <Heading as="h3" size="md" color="primary">
      {title}
    </Heading>
    {isServiceEnded && (
      <StatusLabel text="サービス終了" bgColor="red.500" />
    )}
  </HStack>
);

const StatusLabel = ({ text, bgColor }: { text: string; bgColor: string }) => (
  <Box
    bg={bgColor}
    color="white"
    px={2}
    py={0.5}
    borderRadius="5px"
    fontSize="2xs"
    fontWeight="bold"
  >
    {text}
  </Box>
);

const CardDetails = ({
  details,
  isMarqueePlay,
  handleOnCycleComplete,
  textRef,
}: {
  details: string;
  isMarqueePlay: boolean;
  handleOnCycleComplete: () => void;
  textRef: React.RefObject<HTMLDivElement | null>;
}) => (
  <Marquee
    delay={3}
    play={isMarqueePlay}
    gradient={false}
    onCycleComplete={handleOnCycleComplete}
  >
    <Text ref={textRef} fontSize="sm" color="gray">
      {details}
    </Text>
  </Marquee>
);