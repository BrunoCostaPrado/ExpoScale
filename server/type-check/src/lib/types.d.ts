import { z } from "zod";
declare const weight: z.ZodObject<{
    weight: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    weight: number;
}, {
    weight: number;
}>;
export type Weight = z.infer<typeof weight>;
export {};
