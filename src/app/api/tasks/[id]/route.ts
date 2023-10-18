import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma";


export async function GET (request: NextRequest, { params, ...data }: { params: { id: string } }) {
    try {
        const getById = await prisma.task.findUnique({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(getById)
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function PUT (request:NextRequest, { params, ...data }: { params: { id: string } }) {
    try {
        const data = await request.json()

        const updateTask = await prisma.task.update({
            where:{
                id: Number(params.id)
            },
            data: data
        })
        return NextResponse.json(updateTask)
    } catch (error) {
        return NextResponse.json(error);
        
    }
}

export async function DELETE (request:NextRequest, { params, ...data }: { params: { id: string } }) {
    try {
        const deleteById = await prisma.task.delete({
            where:{
                id: Number(params.id)
            }
        })
        return NextResponse.json(deleteById)
        
    } catch (error) {
        return NextResponse.json(error);
    }
}