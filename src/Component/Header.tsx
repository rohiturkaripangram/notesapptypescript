import { AppBar, Toolbar, Typography } from "@mui/material/";

const Header: React.FunctionComponent = () => {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <p text-align="center" > NotesApp</p>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
