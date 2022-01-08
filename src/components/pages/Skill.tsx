import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const REACT_IMAGE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";

export const Skill: VFC = memo(() => {
  return (
    <>
      <Flex>
        <Box
          role={"group"}
          mt={6}
          mb={6}
          p={6}
          maxW={"250px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Image
            rounded={"lg"}
            // height={230}
            // width={282}
            boxSize={"201px"}
            objectFit={"cover"}
            src={REACT_IMAGE}
          />
          <Stack pt={4} align={"center"}>
            <Text color={"gray.500"} fontSize={"sm"}>
              Brand
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Nice Chair, pink
            </Heading>
            <Text fontWeight={300} fontSize={"xl"}>
              aaa
            </Text>
          </Stack>
        </Box>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
          />
          <Stack pt={4} align={"center"}>
            <Text color={"gray.500"} fontSize={"sm"}>
              Brand
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Nice Chair, pink
            </Heading>
            <Text fontWeight={300} fontSize={"xl"}>
              aaa
            </Text>
          </Stack>
        </Box>
      </Flex>
    </>
  );
});
