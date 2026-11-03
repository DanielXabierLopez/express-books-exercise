const express = require("express");
const books = require("./data/books.json");

const app = express();

app.get("/all", (req, res) => {
  res.json(books);
});

app.get("/first", (req, res) => {
  res.json(books[0]);
});

app.get("/last", (req, res) => {
  res.json(books[books.length - 1]);
});

app.get("/middle", (req, res) => {
  res.json(books[49]);
});

app.get("/author/dante-alighieri", (req, res) => {
  const book = books.find(
    (book) => book.author.toLowerCase() === "dante alighieri"
  );

  res.json(book.title);
});

app.get("/country/charles-dickens", (req, res) => {
  const book = books.find(
    (book) => book.author.toLowerCase() === "charles dickens"
  );

  res.json(book.country);
});

app.get("/year&pages/cervantes", (req, res) => {
  const book = books.find((book) =>
    book.author.toLowerCase().includes("cervantes")
  );

  res.json({
    pages: book.pages,
    year: book.year,
  });
});

app.get("/country/count/spain", (req, res) => {
  const count = books.filter(
    (book) => book.country.toLowerCase() === "spain"
  ).length;

  res.json(count);
});

app.get("/country/at-least/germany", (req, res) => {
  const exists = books.some(
    (book) => book.country.toLowerCase() === "germany"
  );

  res.json(exists);
});

app.get("/pages/all-greater/200", (req, res) => {
  const allGreater = books.every((book) => book.pages > 200);

  res.json(allGreater);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
