import { Grid, GridItem } from "@chakra-ui/react";
import Caracterisct from './Caracteristic'


export default function Caracteriscts() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w='100%'
      justifyContent='space-between'
      align='center'
      mt={['10', '32']}
      mx='auto'
      maxW={1160}
      gap={[1, 5]}
    >
      <GridItem>
        <Caracterisct icon='cocktail.svg' text='vida noturna' />
      </GridItem>
      <GridItem>
        <Caracterisct icon='surf.svg' text='praia' />
      </GridItem>
      <GridItem>
        <Caracterisct icon='building.svg' text='moderno' />
      </GridItem>
      <GridItem>
        <Caracterisct icon='museum.svg' text='clássico' />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Caracterisct icon='earth.svg' text='e mais' />
      </GridItem>
    </Grid>
  )
}