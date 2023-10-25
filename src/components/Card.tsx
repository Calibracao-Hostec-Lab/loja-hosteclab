/**
 * Renders a card component.
 * @param name - The name of the card.
 * @param img - The image source of the card.
 * @returns The rendered card component.
 */

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import Button from "@mui/material/Button";
import CardMui from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Card({ name, img }: { name: string; img: string }): JSX.Element {
  return (
    <div className="grid justify-items-center max-w-[278px]">
      <CardMui>
        <CardActionArea /* href="/" */>
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
        }}
        size="medium"
        startIcon={<MailOutlineIcon />}
        variant="contained"
        href="mailto:comercial@hosteclab.com.br"
      >
        Solicitar o orçamento
      </Button>
      <Button
        sx={{ mt: 1, bgcolor: "#bbb", color: "black" }}
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
