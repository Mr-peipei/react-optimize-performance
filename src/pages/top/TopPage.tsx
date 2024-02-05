import React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";

const TopPage: React.FC = () => {
  const navigation = useNavigate();
  const onClickNavigate = () => {
    navigation(paths.home);
  };

  return <button onClick={onClickNavigate}>Home</button>;
};

export default TopPage;
