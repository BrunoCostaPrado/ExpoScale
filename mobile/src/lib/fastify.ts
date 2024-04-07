import Fastify, { FastifyInstance } from "fastify"

export const port: number = 3000
export const host: string = "0.0.0.0"

export const app: FastifyInstance = Fastify({ logger: true })
