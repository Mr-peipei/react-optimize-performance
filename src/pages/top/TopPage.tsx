import React, { lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";
import { Button, Stack } from "@mui/material";

const dynamicImport = import("../home/HomePage");
const LazyLoad = lazy(() => dynamicImport);

const TopPage: React.FC = () => {
  const navigation = useNavigate();
  const [isHeavyVisible, setIsHeavyVisible] = useState(false);
  const loadHeavyComponent = async () => {
    setIsHeavyVisible(true);
  };

  return (
    <Stack gap={2}>
      <Button
        onClick={() => {
          navigation(paths.home);
        }}
        variant="contained"
      >
        ホーム画面へ遷移
      </Button>
      <Button
        onClick={() => {
          navigation(paths.suspense.always);
        }}
        variant="contained"
      >
        Promiseを返却
      </Button>
      <Button
        onClick={() => {
          navigation(paths.suspense.legacy);
        }}
        variant="contained"
      >
        Suspense使わない
      </Button>
      <Button
        onClick={() => {
          navigation(paths.suspense.new);
        }}
        variant="contained"
      >
        Suspense使う
      </Button>

      <button onClick={loadHeavyComponent}>Load Heavy</button>
      {isHeavyVisible && <LazyLoad />}
    </Stack>
  );
};

export default TopPage;
