import cors from "@fastify/cors"

import { host, port, app } from "@/lib/fastify"
import { getWeight } from "@/routes/getWeight"
import { setWeight } from "@/routes/setWeight"

app.get("/", async (req, reply) => {
	return await reply.status(202).send("hello")
})

await app.register(cors, {
	origin: "*"
})

 app.register(getWeight)
app.register(setWeight)

async function main() {
	try {
		await app.listen({ port, host })

		console.log(`Server listening on ${host}:${port}`)
	} catch (e) {
		console.log(e)
		process.exit(1)
	}
}

main()
