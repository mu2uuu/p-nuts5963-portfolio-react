import { memo, VFC, ReactNode } from "react";
import { chakra, VisuallyHidden } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  label: string;
  href: string;
};

export const SocialButton: VFC<Props> = memo((props) => {
  const { children, label, href } = props;
  return (
    <chakra.button
      bg={"blackAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{ bg: "blackAlpha.200" }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
});
