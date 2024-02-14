import { CircularProgress, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { fetchPhotos } from "../../apis/photo";
import { fetchUser } from "../../apis/user";
import { ListItem } from "./ListItem";
import LoadingScreen from "../../components/loading-screen/LoadingScreen";

type Props = object;

const OptimizedListPage: React.FC<Props> = () => {
  console.time("Report");
  // useQueryはデフォルトで並行にリクエストを行う
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(1),
  });
  const { data: photos } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
  });
  if (photos !== undefined && user !== undefined) console.timeEnd("Report");

  const [displayItem, setDisplayItem] = useState(10);
  const loadMore = () => {
    setDisplayItem((x) => x + 1);
  };

  if (photos === undefined) return <LoadingScreen />;

  const hasMore = displayItem < photos.length;

  return (
    <Stack width={"100%"}>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} style={{ gap: 2 }}>
        {photos?.slice(0, displayItem).map((item, index) => {
          return <ListItem key={index} data={item} sx={{ mb: 2 }} />;
        })}
      </InfiniteScroll>
      {hasMore && <CircularProgress />}
    </Stack>
  );
};

export default OptimizedListPage;
