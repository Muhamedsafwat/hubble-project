import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import Mission from "@/models/Mission";

export async function POST(request) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return new NextResponse("Couldn't connect to database", { status: 500 });
  }

  const projectData = await request.json();

  try {
    await Mission.create({ ...projectData });
    return new NextResponse("Created successfully", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Couldn't save project", { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return new NextResponse("Couldn't connect to database", { status: 500 });
  }

  const projects = await Mission.find();
  projects.reverse();

  if (projects) {
    return new NextResponse(JSON.stringify(projects), { status: 200 });
  } else {
    return new NextResponse("No projects found", { status: 404 });
  }
}
