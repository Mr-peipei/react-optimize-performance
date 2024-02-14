import { Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Photo, fetchPhotos } from "../../apis/photo";
import { User, fetchUser } from "../../apis/user";
import LoadingScreen from "../../components/loading-screen/LoadingScreen";
import { ListItem } from "./ListItem";

type Props = object;

const ListPage: React.FC<Props> = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [, setUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const refFirstRef = useRef(true);

  useEffect(() => {
    // マウント時に１回のみ実行する
    if (refFirstRef.current) {
      refFirstRef.current = false;
      return;
    }
    const fetchDataAndSetState = async () => {
      setIsLoading(true);

      console.time("Report");
      const user = await fetchUser(1);
      console.timeLog("Report");
      const photos = await fetchPhotos();
      console.timeEnd("Report");

      setUser(user);
      setPhotos(photos);
      setIsLoading(false);
    };
    fetchDataAndSetState();
  }, []);

  if (isLoading) <LoadingScreen />;

  return (
    <Stack gap={2} width={"100%"}>
      {photos.map((item, index) => {
        return <ListItem key={index} data={item} />;
      })}
    </Stack>
  );
};

export default ListPage;
