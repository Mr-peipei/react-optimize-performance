import React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";

const HomePage: React.FC = () => {
  const navigation = useNavigate();
  const onClickNavigate = () => {
    navigation(paths.top);
  };

  return <button onClick={onClickNavigate}>Top</button>;
};

export default HomePage;
