import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function MenuBox() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        MenuBox
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">HOME</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/State">State</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Reducer">Reducer</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Effect">Effect</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Ref">Ref</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/LayoutEffect">LayoutEffect</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/ImperativeHandle">ImperativeHandle</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Context">Context</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Memo">Memo</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Callback">Callback</Link>
        </MenuItem>
      </Menu>
    </>
  );
}
