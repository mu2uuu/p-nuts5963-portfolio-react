import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { memo, VFC } from "react";
import { SocialButton } from "../../atoms/button/SocialButton";

export const Hooter: VFC = memo(() => {
  return (
    <Box bg={"teal.500"} color={"white"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justity={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 p-nuts5963. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Github"} href={"https://github.com/p-nuts5963"}>
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/p-nuts5963/"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
});
