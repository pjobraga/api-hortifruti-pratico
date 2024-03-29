import Route from '@ioc:Adonis/Core/Route';

// Login para os 3 tipos de user;
Route.post("/login", "AuthController.login")
Route.post("/logout", "AuthController.logout")

Route.post("cliente/cadastro", "ClientesController.store");

Route.get("/cidades", "CidadesController.index");

Route.group(() => {
  Route.get("auth/me", "AuthController.me");

  Route.put("/cliente", "ClientesController.update");

}).middleware("auth");

Route.get('/', async () => {
  return {
    hortifruti: "pratico",
  }
})


