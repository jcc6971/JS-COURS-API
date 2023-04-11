function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((donnee) => {
      const data = donnee.data.content;
      console.log(data);
      header.textContent = data.text_head;
      content.textContent = data.text !== "" ? data.text : data.text_hidden;
    });
}
document.body.addEventListener("click", getJoke);
