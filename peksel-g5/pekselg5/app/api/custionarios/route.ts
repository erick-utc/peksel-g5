import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db:any = null;

// Define the GET request handler function

//read
export async function GET() {
  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./peksel.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  // Perform a database query to retrieve all items from the "items" table
  const items = await db.all("SELECT * FROM administrador");

  // Return the items as a JSON response with status 200
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

//create
export async function POST(request: Request) {
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./peksel.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }
  // Parse the request body
  const body = await request.json();
  const values = Object.values(body);
  // const { name } = body;

  // console.log(body);
  // console.log(Object.values(body));
  
  const insertSql = `INSERT INTO administrador(Nombre, PrimerApellido, SegundoApellido, Correo, Direccion, Telefono) VALUES(?, ?, ?, ?, ? ,?)`;

  // e.g. Insert new user into your DB
  const newUser = await db.run(insertSql, values);
 
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}


//update
export async function PUT(request: Request) {
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./peksel.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }
  // Parse the request body
  const body = await request.json();
  const values = Object.values(body);
  // const { name } = body;

  // console.log(body);
  // console.log(Object.values(body));
  
  const insertSql = `UPDATE administrador SET Nombre = ?, PrimerApellido = ?, SegundoApellido = ?, Correo = ?, Direccion = ?, Telefono = ? WHERE idAdministrador = ?`;

  // console.log(insertSql);

  // // e.g. Insert new user into your DB
  const updatedUser = await db.run(insertSql, values);
 
  return new Response(JSON.stringify(updatedUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

//delete
export async function DELETE(request: Request) {
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./peksel.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }
  // Parse the request body
  const body = await request.json();
  const values = Object.values(body);
  // const { name } = body;

  // console.log(body);
  // console.log(Object.values(body));
  
  const insertSql = `DELETE FROM administrador WHERE idAdministrador = ?`;

  // console.log(insertSql);

  // // e.g. Insert new user into your DB
  const deletedUser = await db.run(insertSql, values);
 
  return new Response(JSON.stringify(deletedUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}