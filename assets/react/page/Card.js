import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const personnes = [
    {nom: "Alice", age:25, country:"Paris", description: "Passionnée de musique."},
    {nom: "Bob", age: 30, country: "Lyon", description: "Amateur de cuisine asiatique."},
    {nom: "Charlie", age: 22, country: "Marseille", description: "Sportif et voyageur."},
    {nom: "David", age: 28, country: "Toulouse", description: "Fan de nouvelles technologies."},
  ];

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
        {personnes.map((personne) => (
            <CardActionArea>
                <CardMedia
                component='img'
                height="140"
                image="https://picsum.photos/200/300"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {personne.nom}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {personne.age}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {personne.country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {personne.description}
                </Typography>
                </CardContent>
            </CardActionArea>
        ))}
    </Card>
  );
}