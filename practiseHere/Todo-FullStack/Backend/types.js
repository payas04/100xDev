const  { z } =  require ('zod')

const createSchema = z.object({
    title: z.string(),
    description: z.string()
})

const updateSchema = z.object({
    id: z.string()
})


module.exports= {
    createSchema: createSchema,
    updateSchema: updateSchema,
}