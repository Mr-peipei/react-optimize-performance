import React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";

const TopPage: React.FC = () => {
  const navigation = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigation(paths.home);
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigation(paths.suspense.always);
        }}
      >
        Always Suspense
      </button>
    </>
  );
};

export default TopPage;
