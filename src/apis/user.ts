import axios from "axios";

export type User = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fetchUser = (userId: number) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    }, 1000); // 1秒の遅延を追加
  });
};
