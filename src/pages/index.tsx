import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "@/components/layouts";
import { UIProvider } from "@/context/ui";

export default function Home() {
  return (
    <>
      <UIProvider>
        <Layout title="Home openJira">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ height: "calc(100vh - 100px)" }}>
                <CardHeader title="Pendientes">
                  <CardContent>
                    {/* Agregar una nueva Entrada */}
                    {/* Listado de las entradas */}
                  </CardContent>
                </CardHeader>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ height: "calc(100vh - 100px)" }}>
                <CardHeader title="En progreso"></CardHeader>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ height: "calc(100vh - 100px)" }}>
                <CardHeader title="Completadas"></CardHeader>
              </Card>
            </Grid>
          </Grid>
        </Layout>
      </UIProvider>
    </>
  );
}
