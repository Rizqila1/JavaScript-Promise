let box = document.getElementById("square");
let search = document.getElementById("searchbar");

function searching(link) {
    let input = search.value;
    input=input.toLowerCase();
    link = `https://newsapi.org/v2/everything?q=${input || "a"}&apiKey=e400dae40cbd4dfc8f8770dfb8de9412`;

     axios.get(link)
    .then((response) => {
          let { data } = response;
          data = data.articles;
          listData(data);
    
});
};

function listData(data) {
    console.log("Hasil", data);
    let totalResult = "";
    data.forEach((element) => {
        totalResult += `
        <div class="col-md-4 p-4">
        <div class="card" style="width: 350px; background-color: #85CDFD; border-color: rgb(0, 110, 255);">
        <img src=${element.urlToImage} class="card-img-top">
        <div class="card-body">
          <h5 class="card-title"">${element.title}</h5>
          <p style="color: white;">${element.author} - ${element.publishedAt}</p>
          <p class="card-text">${element.description}</p>
          <a href="${element.url}" class="btn btn-primary">Read More...</a>
        </div>
        </div>
      </div>`;
    });
    box.innerHTML = totalResult;
};

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
        "body").style.visibility = "hidden";
        document.querySelector(
        "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
        "#loader").style.display = "none";
        document.querySelector(
        "body").style.visibility = "visible";
    }
};

searching();