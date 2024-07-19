"use server";

import prisma from "@/util/prisma";

export async function get5Bottles() {
  try {
    const data = await prisma.bottle.findMany({
      where: {
        consume: {
          not: null,
        },
      },
      take: 15,

      include: {
        wine: true,
      },
    });

    return { data };
  } catch (error) {
    return { error: error };
  }
}
