import {
  Stack,
  CardMedia,
  CardContent,
  Typography,
  SxProps,
  Theme,
} from "@mui/material";
import { Photo } from "../../apis/photo";

export const ListItem: React.FC<{ data: Photo; sx?: SxProps<Theme> }> = ({
  data,
  sx,
}) => {
  return (
    <Stack sx={{ ...sx, width: "100%", border: "1px solid black" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.thumbnailUrl}
        title="サンプル画像"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.id}
        </Typography>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.url}
        </Typography>
      </CardContent>
    </Stack>
  );
};
