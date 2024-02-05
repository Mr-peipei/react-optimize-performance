import React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";
import { sleep } from "../../utils/sleep";

const HomePage: React.FC = () => {
  const navigation = useNavigate();
  const onClickNavigate = () => {
    navigation(paths.top);
  };
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }

  return <button onClick={onClickNavigate}>Top</button>;
};

export default HomePage;
