function fetchData(url) {
  const BASE_URL = "https://ghibliapi.herokuapp.com/";
  const newUrl = url.startsWith("/") ? url.slice(1) : url;
  return fetch(`${BASE_URL}${newUrl}`).then((res) => res.json());
}

function fetchFilms(id) {
  const newUrl = `people/${id}`;
  const films = fetchData(newUrl).then((data) => data.films);
  return films;
}

function fetchFilm(filrmUrl) {
  return fetch(filrmUrl).then((res) => res.json());
}

// fetchData('people').then((data) => console.log(data))
// fetchData('films').then((data) => console.log(data))

init();

function init() {
  const rootEl = document.querySelector("#root");
  const divEl = App();
  rootEl.append(divEl);
}

function App() {
  const container = document.createElement("div");
  container.setAttribute("component-name", "App");

  const state = {
    people: [],
    id: null,
    films: [],
  };

  window.state = state;

  function setState(obj) {
    for (let key in obj) {
      state[key] = obj[key];
    }
    render();
  }

  function render() {
    container.innerHTML = "";
    const peopleEl = People(state, setState);
    container.append(peopleEl);
  }

  fetchData("people").then((data) => {
    setState({ people: data });
  });

  render();

  return container;
}

function People({ people, id: stateID, films }, setState) {
  const container = document.createElement("div");
  container.setAttribute("component-name", "People");

  people.forEach(({ name, age, gender, eye_color, hair_color, id }) => {
    const userEl = Person(
      name,
      age,
      gender,
      eye_color,
      hair_color,
      id,
      setState
    );
    container.append(userEl);
    if (id === stateID) {
      const filmElem = document.createElement("div");
      filmElem.innerHTML = getFilms(films);
      container.append(filmElem);
    }
  });

  return container;
}

function Person(name, age, gender, eye_color, hair_color, id, setState) {
  const template = document
    .querySelector("#person-template")
    .content.cloneNode(true);

  template.querySelector(".name").innerHTML = name;
  template.querySelector(".age").innerHTML = age;
  template.querySelector(".gender").innerHTML = gender;
  template.querySelector(".eye_color").innerHTML = eye_color;
  template.querySelector(".hair_color").innerHTML = hair_color;
  template.querySelector(".btn").onclick = () => {
    fetchFilms(id).then((data) => {
      setState({ films: [], id });
      data.forEach((item) => {
        fetchFilm(item).then((data) =>
          setState({ films: [...state.films, data] })
        );
      });
    });
  };

  return template;
}
function getFilms(films) {
  let html = "";
  if (films) {
    films.forEach(({ image, title }) => {
      html += `<div>
      <img class = "img" src="${image} ">
      <h1>${title}<h1>
      </div>`;
    });
    return html;
  }
}
// function Films(films) {
//   const template = document
//     .querySelector("film-template")
//     .content.cloneNode(true);

//     template.querySelector(".img").src =
// }
