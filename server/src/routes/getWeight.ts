import { Weight } from "@/lib/types"
import { prisma } from "@/lib/prisma"
// import { ZodTypeProvider } from "fastify-type-provider-zod"
import { FastifyInstance } from "fastify"

export function getWeight(app: FastifyInstance) {
	// const weight: Weight = 1
	app.get("/weight", async (request, reply) => {
		console.time("Get Weight")

		// const weight = await prisma.weight.findUnique({  })
		console.timeEnd("Get Weight")
		// return reply.send(weight)
	})
}
