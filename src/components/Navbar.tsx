import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Logo from "../images/Logo/Logo Hostec Lab.svg";

export default function Navbar({ id }: { id: string }) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        id={id}
        sx={{ bgcolor: "#00273a", borderRadius: "0 0 8px 8px" }}
        component="nav"
      >
        <Toolbar className="flex justify-between">
          <IconButton
            href="https://painel.hosteclab.com"
            sx={{
              backgroundColor: "#bbb",
              ":hover": { backgroundColor: "#757575" },
              transitionDuration: "200ms",
              color: "black",
              marginRight: { sm: "172px" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className="hidden sm:flex flex-col flex-wrap text-center"
            variant="h6"
            component="h1"
            sx={{ fontSize: { xs: "0.7rem", sm: "1rem", lg: "1.25rem" } }}
          >
            <Box
              component="img"
              alt="Hostec Lab"
              src={Logo}
              className="mt-1 h-[60px]"
            />
            "Superar a expectativa do cliente é nossa meta"
          </Typography>
          <Box className="flex sm:w-[212px]">
            <Button
              sx={{
                color: "#fff",
                bgcolor: "#9c001f",
                ":hover": { backgroundColor: "#750000" },
                transitionDuration: "200ms",
                fontSize: { xs: "0.7rem", sm: "0.8rem", lg: "0.875rem" },
              }}
              href="https://wa.me/5511976478132"
              target="_blank"
            >
              Fale com um consultor
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
