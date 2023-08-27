import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/Constraints";
import SearchBar from "./SearchBar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Search } from "@material-ui/icons";

// const Navbar = createStackNavigator();

export default function Navbar() {
  return (
    <AppBar className="nav-bar" position="static" color="black">
      <Toolbar
        direction="row"
        alignItems="center"
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#000"
        }}
        p={2}
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          justifyContent: "space-between"
        }}
      >
        <Link>
          <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="bug" height={50} />
        </Link>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
}
