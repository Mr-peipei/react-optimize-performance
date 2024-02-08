import { useQuery } from "@tanstack/react-query";
import { sleep } from "../../utils/sleep";
import LoadingScreen from "../../components/loading-screen/LoadingScreen";

export const LegacyLoadingPage: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["legacy"],
    queryFn: async () => await sleep(3000).then(() => "legacy"),
  });

  if (isLoading) return <LoadingScreen />;

  return <div>{data}</div>;
};
