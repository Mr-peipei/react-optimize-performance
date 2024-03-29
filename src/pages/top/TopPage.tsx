import React, { lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";
import { Button, Stack } from "@mui/material";
import { elements } from "../../routes/datasets";

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
      {elements.map((element) => {
        return (
          <Button
            onClick={() => {
              navigation(paths[element.path]);
            }}
            variant="contained"
          >
            {element.title}
          </Button>
        );
      })}
      <button onClick={loadHeavyComponent}>Load Heavy</button>
      {isHeavyVisible && <LazyLoad />}
    </Stack>
  );
};

export default TopPage;
