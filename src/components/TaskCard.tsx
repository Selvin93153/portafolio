import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
  task: { id: string; title: string; summary: string };
  onDelete: (id: string) => void;
};

export default function TaskCard({ task }: Props) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {task.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/tarea/${task.id}`)}>Ver más</Button>
      </CardActions>
    </Card>
  );
}
