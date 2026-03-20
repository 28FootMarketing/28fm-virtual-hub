const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || "";

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"), { index: false }));

app.get("/health", (req, res) => res.json({ status: "ok", service: "28FM Virtual Hub" }));

app.get("*", (req, res) => {
  const htmlPath = path.join(__dirname, "public", "index.html");
  let html = fs.readFileSync(htmlPath, "utf8");
  html = html.replace("%%SUPABASE_URL%%", SUPABASE_URL).replace("%%SUPABASE_KEY%%", SUPABASE_KEY);
  res.setHeader("Content-Type", "text/html");
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`28FM Virtual Hub running on port ${PORT}`);
  console.log(`Supabase URL: ${SUPABASE_URL ? "✓ set" : "✗ MISSING"}`);
  console.log(`Supabase Key: ${SUPABASE_KEY ? "✓ set" : "✗ MISSING"}`);
});
