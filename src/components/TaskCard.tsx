import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  task: { id: string; title: string; summary: string };
  onDelete: (id: string) => void;
};

export default function TaskCard({ task }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        transition: "all 0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 220, // 🔹 todas las tarjetas tendrán la misma altura
        "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap", // 🔹 título en una sola línea
          }}
        >
          {task.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3, // 🔹 solo 3 líneas de resumen
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {task.summary}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate(`/tarea/${task.id}`)}
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}
