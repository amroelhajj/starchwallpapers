const options = {
    method: 'GET'
};

let url = 'https://api.nasa.gov/planetary/apod?api_key=QMmo2rwXeZaej3t06wPAm6KsgeYuG8fbgyF49q64';

let isAlreadyFetched = sessionStorage.getItem("fetched");

if (isAlreadyFetched === null) {
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log("data");
            console.log(data);
            let relevantInfo = {
                Copyright: data.copyright,
                Date: data.date,
                Tooltip: data.explanation,
                Hdimg: data.hdurl,
                Title: data.title,
                Thumbnail: data.url
            };
            localStorage.setItem("dataStore", JSON.stringify(relevantInfo));
            sessionStorage.setItem("fetched", "true");

            const modelData = JSON.parse(localStorage.getItem("dataStore"));
            window.location.href = "Home/Index2?Name=" + modelData.Name + "&Age=" + modelData.Age;
        })
        .catch(err => console.error(err));
}