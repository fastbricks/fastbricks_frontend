"use client";
import {
  Box,
  Card,
  Typography,
  ButtonGroup,
  styled,
  Button,
} from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;
const SmallButton = styled(Button)`
  border-radius: 50%;
  border: 1px solid #f2f2f2;

  color: black;
`;
export default function GroupedButton() {
  return (
    <Component>
      <SmallButton>-</SmallButton>
      <Button disabled>1</Button>
      <SmallButton>+</SmallButton>
    </Component>
  );
}
