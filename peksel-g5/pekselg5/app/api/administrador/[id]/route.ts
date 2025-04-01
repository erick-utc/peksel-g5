import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { NextRequest } from 'next/server';

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db:any = null;

// Define the GET request handler function
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string}>}) {
  // Extract the "id" from the URL by splitting the URL and taking the last element
  const id = (await params).id;

  // Log the extracted "id" to the console (for debugging purposes)
  // console.log(id);

  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./peksel.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  // Perform a database query to retrieve an item based on the id
  const item = await db.get("SELECT * FROM administrador WHERE idAdministrador = ?", id);

  // Return the items as a JSON response with status 200
  return new Response(JSON.stringify(item), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
