import { Container } from "@chakra-ui/react";
import BaseButton from "../components/common/BaseButton";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Header />
      <BaseButton />
    </Container>
  );
};

export default Home;
