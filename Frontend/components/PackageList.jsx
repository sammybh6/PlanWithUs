// import React from 'react'
import { fetchData } from './utils/Rest'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import Navigation from './Navigation';
// export default function PackageList() {

//   const auth = useContext(AuthContext);
//   console.log(auth.user);
//   const [packageList, setPackageList] = React.useState([])
//   async function getPackageList() {
//     const response = await fetchData('package', true);
//     setPackageList(response.data.data)
//   }

//   React.useEffect(() => {
//     getPackageList();
//   }, [])


//   return (
//     <div>
//       {
//         packageList.map((item) => {
//           return (
//             <div key={item._id}>
//               <h1>{item.name}</h1>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }


import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function PackageList() {

  const auth = useContext(AuthContext);
  console.log(auth.user);
  const [packageList, setPackageList] = React.useState([])
  async function getPackageList() {
    const response = await fetchData('package', true);
    setPackageList(response.data.data)
  }

  React.useEffect(() => {
    getPackageList();
  }, [])

  return (

    <ThemeProvider theme={defaultTheme}>
      <Navigation />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {packageList.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {/* This is a media card. You can use this section to describe the
                      content. */}
                      {card.stayMode && card.stayMode.stayName}
                      <br />
                      {card.modeOfTransport && card.modeOfTransport.transportName}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"> Edit</Button>
                    <Button size="small">Delete</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}