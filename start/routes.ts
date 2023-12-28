import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.get('/', async () => {
  User.create({
    email: "admin@email.com",
    password: "123456",
    tipo: "admin"
  })
})

Route.post('/gettoken', async ({request, response, auth} : HttpContextContract) => {
  const email = request.input("email");
  const password = request.input("password");

  const user = await User.findBy("email", email);

  if(user == null){
    return response.notFound("User nao encontrado")
  }

  const token = await auth.use('api').attempt(email, password);
  return response.ok(token);
});

Route.get('/auth', async ({ response } : HttpContextContract) => {
    return response.ok("Somente usuarios autenticados podem acessar");
}).middleware("auth");

