import { memo, useCallback, VFC } from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  useDisclosure,
  useBreakpointValue,
  Stack,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
  DrawerHeader,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();

  // リンク押下
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onClickProducts = useCallback(() => {
    navigate("/products");
  }, [navigate]);
  const onClickSkill = useCallback(() => {
    navigate("/skill");
  }, [navigate]);
  const onClickContact = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <Box>
      <Flex
        bg={"teal.500"}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex ml={{ base: -2 }} display={{ md: "none" }}>
          <IconButton
            aria-label="Menu Button"
            icon={<HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            display={{ md: "none" }}
            onClick={onOpen}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            onClick={onClickHome}
          >
            ポートフォリオ
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Stack direction={"row"} spacing={4}>
              <Link onClick={onClickProducts}>Products</Link>
              <Link onClick={onClickSkill}>Skill</Link>
              <Link onClick={onClickContact}>Contact</Link>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth={"1px"}>メニュー</DrawerHeader>
            <DrawerBody p={0}>
              <Button
                w={"100%"}
                colorScheme={"white"}
                color={"gray.800"}
                onClick={() => {
                  onClickProducts();
                  onClose();
                }}
              >
                Products
              </Button>
              <Button
                w={"100%"}
                colorScheme={"white"}
                color={"gray.800"}
                onClick={() => {
                  onClickSkill();
                  onClose();
                }}
              >
                Skill
              </Button>
              <Button
                w={"100%"}
                colorScheme={"white"}
                color={"gray.800"}
                onClick={() => {
                  onClickContact();
                  onClose();
                }}
              >
                Contact
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
});
