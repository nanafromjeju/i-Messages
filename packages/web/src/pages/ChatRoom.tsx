import { Box, Container, Flex } from "@chakra-ui/react";

const ChatRoom = () => {
  return (
    <Container maxW="container.xl" h="100vh">
      <Flex h="full" direction="column">
        <Box flex="1">{/* 채팅 메시지 영역 */}</Box>
        <Box>{/* 채팅 입력 영역 */}</Box>
      </Flex>
    </Container>
  );
};

export default ChatRoom;
