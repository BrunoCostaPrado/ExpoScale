import { Weight, Set_weight } from "@/lib/types"
import { prisma } from "@/lib/prisma"
import { FastifyInstance } from "fastify"

export async function setWeight(app: FastifyInstance) {
	try {
		app.post("/setWeight", async (request, reply) => {
			console.time("Set Weight")
			const { weight } = Set_weight.parse(request.body)

			const setweight = await prisma.weight.create({ data: { weight } })
			console.timeEnd("Set Weight")
			return reply.status(201).send(`Weight set successfully ${setweight.weight}`)
		})
	} catch (e) {
		console.log(e)
	}
}
