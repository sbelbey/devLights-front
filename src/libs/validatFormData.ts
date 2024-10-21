import { z } from "zod";

export default function validateFormData(
    data: { [key: string]: string },
    schema: z.ZodType<{ [key: string]: string }>
) {
    try {
        schema.parse(data);
        return { valid: true, errors: {} };
    } catch (e) {
        if (e instanceof z.ZodError) {
            const errors = e.errors.reduce((acc, error) => {
                acc[error.path[0]] = error.message;
                return acc;
            }, {} as { [key: string]: string });
            return { valid: false, errors };
        }
        return { valid: false, errors: {} };
    }
}
