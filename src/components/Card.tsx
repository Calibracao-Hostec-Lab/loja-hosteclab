import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import CardMui from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface CardProps {
  name: string;
  img: string;
  link: string;
}

function Card({ name, img, link }: CardProps) {
  return (
    <div className="grid justify-items-center max-w-[278px]">
      <CardMui>
        <CardActionArea href={link}>
          <CardMedia
            sx={{ objectFit: "cover", aspectRatio: "1 / 1" }}
            component="img"
            width={"240"}
            image={require(`../images/${img}`)}
            alt={name}
          />
          <CardContent sx={{ padding: "16px 8px 8px 8px" }}>
            <Typography
              sx={{ typography: { xs: "h7", sm: "h6", md: "h5", lg: "h5" } }}
              component={"div"}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardMui>
      <Button
        sx={{
          mt: 1,
          bgcolor: "#bbb",
          color: "black",
          width: "full",
          ":hover": { backgroundColor: "#0000bb", color: "white" },
          transitionDuration: "200ms",
        }}
        size="medium"
        startIcon={<MailOutlineIcon />}
        variant="contained"
        href="mailto:comercial@hosteclab.com.br"
      >
        Solicitar o orçamento
      </Button>
      <Button
        sx={{
          mt: 1,
          bgcolor: "#bbb",
          color: "black",
          ":hover": { backgroundColor: "#007500", color: "white" },
          transitionDuration: "200ms",
        }}
        size="medium"
        startIcon={<SmartphoneOutlinedIcon />}
        variant="contained"
        href={`https://wa.me/5511976478132?text=Ol%C3%A1%2C+gostaria+de+fazer+o+or%C3%A7amento+de%3A+${name}`}
        target="_blank"
      >
        Orçamento via WhatsApp
      </Button>
    </div>
  );
}

export default Card;
