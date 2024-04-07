import { app } from "./fastify"
import cors from "@fastify/cors"

export async function c() {
	await app.register(cors, {
		origin: "*"
	})
}
