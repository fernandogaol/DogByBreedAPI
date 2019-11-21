function getDataFromApi(searchTerm) {
  fetch(`https://dog.ceo/api/breed/${searchTerm}/images/random`)
    .then(response => response.json())
    .then(responseJSON => responseJSON)
    .then(responseJSON => displaySearchData(responseJSON));
}

function displaySearchData(data) {
  let results;
  if (data.status == "success") {
    results = `
        <img src="${data.message}">
      `;
  } else {
    results = `<h1>Sorry! I don't recognize that breed.</h1>`;
  }
  $(".js-search-results")
    .html(results)
    .removeClass("hidden");
}

function watchSubmit() {
  $(".js-search-form").submit(event => {
    event.preventDefault();
    let searchTerm = $(".js-search-term").val();
    getDataFromApi(searchTerm);
  });
}

$(watchSubmit);
