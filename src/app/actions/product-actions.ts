"use server";

import prisma from "@/lib/prisma";
import { productState } from "../schema";

export async function SubmitProductAction(
  _prevState: productState,
  formData: FormData,
) {
  const values = {
    name: formData.get("name"),
    description: formData.get("description"),
    detailDescription: formData.get("detailDescription"),
    productCategory: formData.getAll("productCategory"),
    productType: formData.getAll("productType"),
    images: formData.getAll("images").flatMap((item) => {
      try {
        return JSON.parse(item as string);
      } catch {
        return item;
      }
    }),
    sizes: formData.getAll("sizes"),
    colors: formData.getAll("colors"),
    note: formData.get("note"),
    price: formData.get("price") ? Number(formData.get("price")) : 0,
    status: formData.get("status"),
  };
}
