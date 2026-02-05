import { NextResponse } from 'next/server';
import { PrismaClient } from "../../../../generated/prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    console.log("API route hit");

    const body =  await req.json();
    console.log("Request body received:", body);

    const { name, email, message} = body;

    if (!name || !email || !message) {
      console.log("Missing fields detected");
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const result = await prisma.user.create({
      data: { name, email, message },
    });
    console.log("DB insert successful:", result);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}