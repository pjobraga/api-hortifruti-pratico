import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cidade from 'App/Models/Cidade'

export default class CidadesController {
    public async index({ response }: HttpContextContract) {
        const cidades = await Cidade.query().whereHas('estabelecimentos', (query) => {
            query.where("bloqueado", false);
        })
            .preload("estado");

        return response.ok(cidades);
    }
}
