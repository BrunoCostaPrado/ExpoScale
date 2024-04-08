import { Weight } from "@/lib/types"
import { prisma } from "@/lib/prisma"
import { app } from "@/lib/fastify"

export async function getWeight() {
	// const weight: Weight = 1
	app.get("/weight", async (request, reply) => {
		console.time("Get Weight")

		const weight = await prisma.weight.findMany({ select: { weight: true, createdAt: true } })

		console.timeEnd("Get Weight")
		return reply.status(202).send(weight)
	})
}
