import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function unicRecipe(name, date, discriptif, prepa){
    return {name, date, discriptif, prepa};
}

const recettes = [
    unicRecipe("Poulet rôti au citron", "2023-03-20", "Poulet juteux rôti avec une touche de citron.", "Préchauffer le four à 180°C. Assaisonner le poulet avec du sel, du poivre et du  citron. Rôtir au four pendant 1 heure. Laisser reposer avant de découper."
    ),

    unicRecipe("Lasagnes au bœuf", "2023-03-18", "Un classique italien avec des couches de pâtes, de bœuf et de fromage.", "Préchauffer le four à 200°C. Préparer la sauce bolognaise et la béchamel. Assembler les lasagnes en alternant les couches. Cuire au four pendant 30 minutes."
    ),
    
    unicRecipe("Lasagnes au poulet", "2023-03-18", "Un classique italien avec des couches de pâtes, de poulet et de fromage.", "Préchauffer le four à 200°C. Préparer la sauce bolognaise et la béchamel. Assembler les lasagnes en alternant les couches. Cuire au four pendant 30 minutes."
    ),

    unicRecipe("Lasagnes au Cheval", "2023-03-18", "Un classique italien avec des couches de pâtes, de Cheval et de fromage.", "Préchauffer le four à 200°C.Préparer la sauce bolognaise et la béchamel. Assembler les lasagnes en alternant les couches. Cuire au four pendant 30 minutes."
    ),

    unicRecipe("Salade de Quinoa aux Légumes", "2023-03-25", "Une salade légère et nutritive avec du quinoa et des légumes frais.", "Cuire le quinoa selon les instructions. Couper les tomates, les concombres et les avocats en dés. Mélanger le quinoa cuit avec les légumes. Assaisonner avec de l'huile d'olive, du citron, du sel et du poivre."
        
    ),
    
    unicRecipe("Tacos au Poulet Épicé", "2023-03-23", "Des tacos savoureux avec du poulet épicé et des garnitures fraîches.", "Mariner le poulet avec des épices mexicaines. Faire cuire le poulet jusqu'à ce qu'il soit bien cuit. Chauffer les tortillas et assembler les tacos. Ajouter des garnitures comme la laitue, la salsa et le fromage."
    ),

    unicRecipe("Smoothie Fraise-Banane", "2023-03-28", "Un smoothie rafraîchissant avec des fraises sucrées et des bananes crémeuses.", "Mixer les fraises et les bananes dans un blender. Ajouter du yaourt et du miel selon le goût. Mixer à nouveau jusqu'à obtention d'une consistance lisse. Verser dans un verre et déguster !"
    ),

    unicRecipe("Pizza Margherita Maison", "2023-03-26", "Une pizza classique avec une croûte croustillante, de la sauce tomate et du fromage mozzarella.", "Préparer la pâte à pizza maison ou utiliser une pâte prête à l'emploi. Étaler la sauce tomate sur la pâte et ajouter des tranches de mozzarella. Cuire au four préchauffé à 220°C pendant 15-20 minutes. Garnir de basilic frais avant de servir."
    ),

    unicRecipe("Pâtes Primavera", "2023-04-01", "Des pâtes fraîches avec un mélange de légumes de saison et une sauce légère à l'ail.", "Cuire les pâtes al dente dans de l'eau bouillante salée. Faire sauter les légumes (courgettes, poivrons, tomates) dans de l'huile d'olive. Ajouter les pâtes cuites et mélanger avec une sauce à l'ail et au parmesan. Garnir de basilic frais avant de servir."
    ),

    unicRecipe("Tarte aux Pommes Maison", "2023-03-30", "Une délicieuse tarte aux pommes avec une croûte feuilletée et une touche de cannelle.", "Préchauffer le four à 190°C. Étaler la pâte feuilletée dans un moule à tarte et la piquer avec une fourchette. Disposer les tranches de pommes sur la pâte et saupoudrer de sucre et de cannelle. Cuire au four pendant 30-35 minutes jusqu'à ce que la croûte soit dorée."   
    )
];


export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Descriptif</StyledTableCell>
            <StyledTableCell align="right">Preparation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recettes.map((recette) => (
            <StyledTableRow key={recette.name}>
              <StyledTableCell align="right">{recette.name}</StyledTableCell>
              <StyledTableCell align="right">{recette.date}</StyledTableCell>
              <StyledTableCell align="right">{recette.discriptif}</StyledTableCell>
              <StyledTableCell align="right">{recette.prepa}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}