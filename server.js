import pg from "pg";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();

const port = process.env.port || 3000;
const pool = new pg.Pool({
  database: "gymbros",
});

app.use(morgan("combined"));
app.use(cors()); //idk what this does
app.use(express.json());
app.use(express.static("client"));

//CRUD stuff

//get all
app.get("/bros", (req, res) => {
  pool.query("SELECT * FROM bros").then((result) => {
    res.send(result.rows);
  });
});
//get one
app.get("/bros/:id", (req, res) => {
  const id = Number(req.params.id);
  pool.query("SELECT * FROM bros WHERE id = $1", [id]).then((result) => {
    res.send(result.rows[0]);
  });
});
//post
app.post("/bros", (req, res) => {
  const { firstname, lastname, address, email, gym_id } = req.body;
  pool
    .query(
      "INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ($1, $2, $3, $4, $5) RETURNING*;",
      [firstname, lastname, address, email, gym_id]
    )
    .then((result) => {
      res.send(result.rows[0]);
    });
});
//update
app.patch("/bros/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, age, kind } = req.body;
  if (Number.isNaN(id)) {
    res.status(400).send(`invalid id given "${req.params.id}"`);
  }

  pool
    .query(
      `
        UPDATE bros
        SET firstname = COALESCE($1, firstname),
            lastname = COALESCE($2, lastname),
            address = COALESCE($3, address),
            email = COALESCE($4, email),
            gym_id = COALESCE($5, gym_id)
        WHERE id = $6
        RETURNING *;
        `,
      [firstname, lastname, address, email, gym_id, id]
    )
    .then((result) => {
      if (result.rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(result.rows[0]);
      }
      res.send(result.rows[0]);
    });
});
//delete
app.delete("/bros/delete/:id", (req, res) => {
  const id = req.params.id;
  pool
    .query("DELETE FROM bros WHERE id = $1 RETURNING *;", [id])
    .then((data) => {
      if (data.rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    });
});

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
