import { Card, CardContent, Typography, Box } from '@mui/material';

interface TechCardProps {
  name: string;
  description: string;
  image?: string;  // imagen opcional
}

export default function TechCard({ name, description, image }: TechCardProps) {
  return (
    <Card sx={{ textAlign: 'center', p: 2, cursor: 'default', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
      {image && (
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{ width: 200, height: 200, objectFit: 'contain', mx: 'auto', mb: 1 }}
        />
      )}
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );
}
