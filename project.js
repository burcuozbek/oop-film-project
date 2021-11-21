const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.querySelector("#url");

//UI Objesini Başlatma
const ui = new UI();

//Storage objesi üret

const storage = new Storage();

//Tüm eventleri yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });
}
function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //Hata
    ui.displayMessages("Tüm alanları doldurun!", "danger");
  } else {
    //Yeni Film
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm); //Arayüze film ekleme
    storage.addFilmToStorage(newFilm); //Storage'a film ekleme
    ui.displayMessages("Başarıyla eklendi", "success");
  }

  ui.clearInputs(titleElement, urlElement, directorElement);
  e.preventDefault();
}
