import './loadEnv.js'

import express from "express"
import path from "path"
import helmet from "helmet"
import { fileURLToPath } from "url";

const app = express();

const port = process.env.PORT || 8000;
const targetFolder = process.env.REACT_APP_TARGET_DIR || "../apps/build_deploy"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Handle Security using Helmet and custom HSTS, Force SSL
app.use(
  helmet({
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    contentSecurityPolicy: false,
  })
);

app.use((req, res, next) => {
  let err = null;
  try {
    decodeURIComponent(req.path);
  } catch (e) {
    err = e;
  }
  if (err) return res.redirect("/404");

  next();

  return true;
});

// Send files such as html, css, and js
app.use(express.static(path.join(__dirname, targetFolder)));


// Route to handle 404 error
app.get("/not-found", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, targetFolder, "index.html"));
});

//
// health-check
app.get("/health-check", function (req, res) {
  res.status(200).send("Ok");
});

// Route to handle every routing
app.get("/*", (req, res) => {
  const tokenName = "USER-ACCESS-TOKEN";
  const refTokenName = "USER-REFRESH-TOKEN";

  const istokenHeaders = req.headers[tokenName.toLowerCase()] || "";
  const isrefTokenHeaders = req.headers[refTokenName.toLowerCase()] || "";

  // console.log("Headers: ", req.headers);
  // console.log({ istokenHeaders, isrefTokenHeaders });

  res.cookie(tokenName, istokenHeaders);
  res.cookie(refTokenName, isrefTokenHeaders);

  return res.sendFile(path.join(__dirname, targetFolder, "index.html"));
});

app.listen(port);
console.log(`Running on PORT: ${port}`);
