import { sleep } from "../../utils/sleep";

const AlwaysSuspensePage: React.FC = () => {
  throw sleep(1000);
};

export default AlwaysSuspensePage;
