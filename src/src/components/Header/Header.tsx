import CloseIcon from "@mui/icons-material/Close";
import { useChatContext } from "../../hooks/useChatContext";
import { HeaderProps } from "../../types";
import { Button } from "../Button";
import { Text } from "../Text";
import { HeaderContainer, Logo } from "./styles";

export const Header = ({
  padding,
  minHeight,
  logo,
  title,
  ...rest
}: HeaderProps) => {
  const { onClose } = useChatContext();
  return (
    <HeaderContainer padding={padding} minHeight={minHeight} {...rest}>
      {logo && <Logo>{logo}</Logo>}
      {typeof title === "string" ? (
        <Text fontSize="medium" flexGrow={1}>
          {title}
        </Text>
      ) : (
        title
      )}

      {/* <CloseBtn aria-label="close" onClick={onClose}>
        <CloseIcon />
      </CloseBtn> */}
      <Button $type="secondary" $displayStyle="iconButton" onClick={onClose}>
        <CloseIcon />
      </Button>
    </HeaderContainer>
  );
};
