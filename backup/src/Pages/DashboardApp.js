
    import { faker } from '@faker-js/faker';
    // @mui
    import { useTheme } from '@mui/material/styles';
    import { Grid, Container, Typography } from '@mui/material';
    // components
    import Page from '../components/Page';
    import Iconify from '../Dashboard/Iconify';
    import Cats from '../components/Cats';
    
    // ----------------------------------------------------------------------
    
    export default function DashboardApp() {
        const theme = useTheme();
      
        return (
          <Page title="Dashboard">
            <Container maxWidth="xl">
              // <Typography variant="h4" sx={{ mb: 5 }}>
              //   Hi, Welcome back
              // </Typography>
      
              <Grid container spacing={3}>
                {/* <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
                </Grid>
      
                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
                </Grid>
      
                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
                </Grid>
      
                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
                </Grid> */}
            <Cats/>
                <Grid item xs={12} md={6} lg={8}>
                 
                </Grid>
      
                <Grid item xs={12} md={6} lg={4}>
                  
                </Grid>
      
                <Grid item xs={12} md={6} lg={8}>
                
                </Grid>
      
                <Grid item xs={12} md={6} lg={4}>
                  
                </Grid>
      
                <Grid item xs={12} md={6} lg={8}>
                 
                </Grid>
      
                <Grid item xs={12} md={6} lg={4}>
                  
                </Grid>
      
                <Grid item xs={12} md={6} lg={4}>
                 
                </Grid>
      
                <Grid item xs={12} md={6} lg={8}>
                  
                </Grid>
              </Grid>
            </Container>
          </Page>
        );
      }
      
    