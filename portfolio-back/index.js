const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors"); //need this to set this API to allow requests from other servers
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || "8000";

const dbUrl= `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?retryWrites=true&w=majority&appName=portfolio`;
const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //need this line to be able to receive/parse JSON from request

//allow requests from all servers
// app.use(cors({
//   origin: "*"
// }));
const allowedOrigins = ['https://irinabalanel.com', 'http://localhost:5173'];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) { //The !origin part is a check to see if the origin is null or undefined, and it allows requests without an origin to pass (requests coming from the same server, Postman curl or server-to-server requests.)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

//API endpoints
app.get("/api/projects", async (request, response) => {
  let projectsList = await getProjects();
  response.json(projectsList); //send JSON object with appropriate JSON headers
});

app.get("/api/skills", async (request, response) => {
  let skillsList = await getSkills();
  response.json(skillsList); //send JSON object with appropriate JSON headers
});

app.post("/api/contactform/submit", async (request, reponse) => {
  try {
    console.log("Received POST request");
    console.log("Request Body:", request.body);

    const { name, email, phone, message } = request.body;
    const newMessage = { name, email, phone, message };

    await contact(newMessage);

    reponse.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error("Error submitting form:", error);
    reponse.status(500).json({ message: 'Error submitting form' });
  }
});

//MongoDB functions
async function connection() {
  await client.connect();
  db = client.db("portfolio");
  return db;
}

async function getProjects() {
  db = await connection(); //await result of connection() and store the returned db
  let results = db.collection("projects").find({}); //{} as the query means no filter, so select all
  response = await results.toArray();
  return response;
}

async function getSkills() {
  db = await connection(); //await result of connection() and store the returned db
  let results = db.collection("skills").find({}); //{} as the query means no filter, so select all
  response = await results.toArray();
  return response;
}

async function contact(newMessage) {
  try {
    const db = await connection(); 
    const result = await db.collection("messages").insertOne(newMessage);
    console.log("Message added:", result.insertedId);
  } catch (error) {
    console.error("Error saving message:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
}
//for navigation via URLs
app.use(express.static(path.join(__dirname, "../portfolio-front/dist")));
// Catch-all route to serve React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../portfolio-front/dist", "index.html")); // Adjusted path
// });
app.get("*", (req, res) => {
  if (!req.originalUrl.startsWith("/api")) {
    res.sendFile(path.join(__dirname, "../portfolio-front/dist", "index.html"));
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
