import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "@/components/layouts";
import { UIProvider } from "@/context/ui";
import { EntryList } from "@/components/ui";

export default function Home() {
  return (
    <>
      <UIProvider>
        <Layout title="Home openJira">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ height: "calc(100vh - 100px)" }}>
                <CardHeader title="Pendientes" />

                <CardContent>
                  {/* Agregar una nueva Entrada */}
                  {/* Listado de las entradas */}
                  <EntryList status={'pending'}/>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ height: "calc(100vh - 100px)" }}>
                <CardHeader title="En progreso" />
                <CardContent>
                  <EntryList status={"in-progress"}/>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ height: "calc(100vh - 100px)" }}>
                <CardHeader title="Completadas" />
                <CardContent>
                  <EntryList status={"finished"}/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Layout>
      </UIProvider>
    </>
  );
}
