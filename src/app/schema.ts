import z from "zod"


const imageType = z.object({
    name: z.string(),
    url: z.string(),
    resource_type: z.string()
})

const reviewSchema = z.object({  
  rating: z.number(),
  author: z.string(),
  comment: z.string(),
  product: z.any(), // Replace 'any' with the actual Product type if available
  productId: z.number()
})

// const addToCartSchema = z.object({
//   product: z.any(), // Replace 'any' with the actual Product type if available
//   productId: z.number(),
//   quantity: z.number(),
//   user: z.any(), // Replace 'any' with the actual User type if available
//   userId: z.number()
// })
// })

const productSchema = z.object({
    id: z.string().optional(),      
    name: z.string().min(2, "Name must be at least 2 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    detailDescription: z.string().min(10, "Detail description must be at least 10 characters"),
    productCategory: z.enum(["Party", "Cultural", "Baby", "Casual", "Formal"]).array(),
    productType: z.enum(["Featured", "Trending", "New"]).array(),
    images: imageType.array(),
    sizes: z.enum(["XS", "S", "M", "L", "XL", "XXL"]).array(),
    colors: z.string().array(),
    note: z.string(),
    price: z.number(),
    status: z.string()
})

type productState = {
    values?: z.infer<typeof productSchema>
    errors?: null | Partial<Record<keyof z.infer<typeof productSchema>, string[]>>
    success: boolean
}


export {
    productSchema,
    imageType,
    reviewSchema,
    type productState
}