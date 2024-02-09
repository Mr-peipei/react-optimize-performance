import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// 非同期でデータを取得する関数
const fetchData = () => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      axios
        .get<User>("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    }, 3000); // 3秒の遅延を追加
  });
};

const SuspenseWithAxiosPage: React.FC = () => {
  const [data, setData] = useState<User | undefined>();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };
    fetchDataAsync();
  }, []);
  console.log(data);

  // throw sleep(1000);
  return (
    <div>
      <h2>Data:</h2>
      <p>{data?.userId}</p>
    </div>
  );
};

export default SuspenseWithAxiosPage;
