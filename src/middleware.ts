import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./Middleware/withAuth";

export function mainMiddleware(req: NextRequest) {
    return NextResponse.next();
}

export default withAuth(mainMiddleware, ["/profile", "/products", "/about", "/admin", "/editor"]);
