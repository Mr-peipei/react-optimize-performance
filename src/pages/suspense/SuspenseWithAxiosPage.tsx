import { useEffect, useState } from "react";
import { User, fetchUser } from "../../apis/user";

const SuspenseWithAxiosPage: React.FC = () => {
  const [data, setData] = useState<User | undefined>();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchUser(1);
      setData(result);
    };
    fetchDataAsync();
  }, []);

  return (
    <div>
      <h2>Data:</h2>
      <p>{data?.userId}</p>
    </div>
  );
};

export default SuspenseWithAxiosPage;
