import React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";
import { Button, Stack } from "@mui/material";

const TopPage: React.FC = () => {
  const navigation = useNavigate();

  return (
    <Stack>
      <Button
        onClick={() => {
          navigation(paths.home);
        }}
        variant="contained"
      >
        Home
      </Button>
      <Button
        onClick={() => {
          navigation(paths.suspense.always);
        }}
        variant="contained"
      >
        Always Suspense
      </Button>
    </Stack>
  );
};

export default TopPage;
