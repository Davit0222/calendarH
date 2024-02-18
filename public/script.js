fetch("/json")
  .then((res) => res.json())
  .then((res) => {
    alert(res.url);
  });
fetch("/hi", {
  method: "post",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    name: "Picsart",
  }),
});
