import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import * as React from 'react';
import Button from '@mui/material/Button';
import BasicTabs from '@components/TabPanel';
import { Container, Grid } from '@mui/material';

function App() {
  return <Button variant="contained">Hello World</Button>;
}

export default function Home() {
  return (<>
    <Head>
      <title>Next.js Starter!</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <BasicTabs></BasicTabs>
          <Footer />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Container>
  </>)
}
