// https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const content = document.getElementById("content");
// console.log(header, content);

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    /* 1ere chose à faire : tester l'API, voir url dans google ou dans postman */
    .then((res) => res.json())
    // console.log(res);
    .then((data) => {
      // console.log(data);
      const joke = data.data.content;
      console.log(joke);

      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}

getJoke();

// document.body.addEventListener("click", getJoke);
