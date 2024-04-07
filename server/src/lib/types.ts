import { z } from "zod"

const weight = z.object({
	weight: z.number()
})

export type Weight = z.infer<typeof weight>

export { weight as Set_weight }
