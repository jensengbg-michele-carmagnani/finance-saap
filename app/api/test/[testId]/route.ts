import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { testId: string } }
) => {
  return NextResponse.json({ message: "testId", testId: params.testId });
};
