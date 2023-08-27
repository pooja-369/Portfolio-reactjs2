import React from "react";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos }) => {
  return console.log(videos);
  // return (
  // <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
  //   {videos.map((item , idx) => (
  //       <Box key={idx}>
  //         {item.id.videoId && <VideoCard videos={item} />}
  //         {item.id.ChannelId && <ChannelCard channelDetail={item} />}
  //       </Box>
  //   ))}
  // </Stack>
  // )
};

export default Videos;
