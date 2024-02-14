import axios from "axios";

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const fetchPhotos = () => {
  return new Promise<Photo[]>((resolve, reject) => {
    setTimeout(() => {
      axios
        .get<Photo[]>("https://jsonplaceholder.typicode.com/photos")
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    }, 1000); // 1秒の遅延を追加
  });
};
