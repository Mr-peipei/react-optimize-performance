import { useSuspenseQuery } from "@tanstack/react-query";
import { sleep } from "../../utils/sleep";

const SuspenseLoadingPage: React.FC = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["new"],
    queryFn: async () => await sleep(3000).then(() => "new"),
  });

  return <div>{data}</div>;
};

export default SuspenseLoadingPage;
