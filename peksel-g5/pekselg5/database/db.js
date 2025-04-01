const sqlite3 = require("sqlite3").verbose();

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "./peksel.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS administrador (
        idAdministrador INTEGER PRIMARY KEY,
        Nombre TEXT,
        PrimerApellido TEXT,
        SegundoApellido TEXT,
        Correo TEXT,
        Direccion TEXT,
        Telefono TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created table administrador.");

      // Clear the existing data in the administrador table
      db.run(`DELETE FROM administrador`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from administrador");

        // Insert new data into the administrador table
        const values1 = [
          "Erick",
          "Espinoza",
          "Araya",
          "e@e.com",
          "dir",
          "1234",
        ];

        const insertSql = `INSERT INTO administrador(Nombre, PrimerApellido, SegundoApellido, Correo, Direccion, Telefono) VALUES(?, ?, ?, ?, ? ,?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted in administrador, ID ${id}`);
        });
      });
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS clientes (
        idCliente INTEGER PRIMARY KEY,
        Nombre TEXT,
        PrimerApellido TEXT,
        SegundoApellido TEXT,
        Correo TEXT,
        Direccion TEXT,
        Telefono TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created table clientes.");

      // Clear the existing data in the administrador table
      db.run(`DELETE FROM clientes`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from clientes");

        // Insert new data into the administrador table
        const values1 = [
          "Erick",
          "Espinoza",
          "Araya",
          "e@e.com",
          "dir",
          "1234",
        ];

        const insertSql = `INSERT INTO clientes(Nombre, PrimerApellido, SegundoApellido, Correo, Direccion, Telefono) VALUES(?, ?, ?, ?, ? ,?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted in clientes, ID ${id}`);
        });
      });
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS preguntas (
        idPregunta INTEGER PRIMARY KEY,
        Pregunta TEXT,
        Respuesta1 TEXT,
        Respuesta2 TEXT,
        Respuesta3 TEXT,
        Respuesta4 TEXT,
        RespuestaCorrecta TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created table preguntas.");

      // Clear the existing data in the administrador table
      db.run(`DELETE FROM preguntas`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from preguntas");

        // Insert new data into the administrador table
        const values1 = [
          "Cada proyecto, independientemente de su metodo o del framework implementado, esta expuesto a:____",
          "Riesgos",
          "Incertidumbre",
          "Cambios",
          "Deslizamiento",
          "Cambios",
        ];

        const insertSql = `INSERT INTO preguntas(Pregunta, Respuesta1, Respuesta2, Respuesta3, Respuesta4, RespuestaCorrecta) VALUES(?, ?, ?, ?, ? ,?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted in preguntas, ID ${id}`);
        });
      });
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS cuestionarios (
        idCuestionario INTEGER PRIMARY KEY,
        Nombre TEXT,
        IdPregunta1 INTEGER REFERENCES preguntas(idPregunta),
        IdPregunta2 INTEGER REFERENCES preguntas(idPregunta),
        IdPregunta3 INTEGER REFERENCES preguntas(idPregunta),
        IdPregunta4 INTEGER REFERENCES preguntas(idPregunta),
        IdPregunta5 INTEGER REFERENCES preguntas(idPregunta)
      )`,
    (err) => {
      if (err) {
        return console.error('error creating table', err.message);
      }
      console.log("Created table cuestionarios.");

      // Clear the existing data in the administrador table
      db.run(`DELETE FROM cuestionarios`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from cuestionarios");

        // Insert new data into the administrador table
        const values1 = [
          "Scrum Escencial",
          1,
          1,
          1,
          1,
          1,
        ];

        const insertSql = `INSERT INTO cuestionarios(Nombre, IdPregunta1, IdPregunta2, IdPregunta3, IdPregunta4, IdPregunta5) VALUES(?, ?, ?, ?, ? ,?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted in cuestionarios, ID ${id}`);
        });
      });
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS cuestionariosfinalizados (
        idFinalizado INTEGER PRIMARY KEY,
        IdCuestionario INTEGER REFERENCES cuestionarios(idCuestionario),
        IdCliente INTEGER REFERENCES clientes(idCliente),
        Resultado TEXT
      )`,
    (err) => {
      if (err) {
        return console.error('error creating table', err.message);
      }
      console.log("Created table cuestionariosfinalizados.");

      // Clear the existing data in the administrador table
      db.run(`DELETE FROM cuestionariosfinalizados`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from cuestionariosfinalizados");

        // Insert new data into the administrador table
        const values1 = [
          1,
          1,
          "Nuevo"
        ];

        const insertSql = `INSERT INTO cuestionariosfinalizados(IdCuestionario, IdCliente, Resultado) VALUES(?, ?, ?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted in cuestionariosfinalizados, ID ${id}`);
        });

        //   Close the database connection after all insertions are done
        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});
