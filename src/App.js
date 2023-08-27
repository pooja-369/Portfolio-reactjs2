import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"; //act as a div element
import {
  // Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed
} from "./Components";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
