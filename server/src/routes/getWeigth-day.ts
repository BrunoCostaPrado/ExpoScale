import { app } from "@/lib/fastify"
import { prisma } from "@/lib/prisma"
import { Set_weight, Weight } from "@/lib/types"

export function getWeightDay(app) {
	// const weight: Weight = 1
	app.get("/weight/:weightDay", async (request, reply) => {
		console.time("Get Weight")

		// const weight = await prisma.weight.findUnique({  })
		console.timeEnd("Get Weight")
		// return reply.send(weight)
	})
}
