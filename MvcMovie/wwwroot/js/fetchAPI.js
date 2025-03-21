const options = {
    method: 'GET'
};

let url = "https://api.nasa.gov/planetary/apod?api_key=QMmo2rwXeZaej3t06wPAm6KsgeYuG8fbgyF49q64";

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
            window.location.href = "Home/Index3?Copyright=" + modelData.Copyright + "&Date=" + modelData.Date + "&Tooltip=" + modelData.Tooltip + "&Hdimg=" + modelData.Hdimg + "&Title=" + modelData.Title + "&Thumbnail=" + modelData.Thumbnail;
        })
        .catch(err => console.error(err));
}

let url2 = "https://bing.npanuhin.me/US/en.json";

let isAlreadyFetched2 = sessionStorage.getItem("fetched2");

console.log("debug1");

if (isAlreadyFetched2 === null) {
    console.log("debug2");
    fetch(url2, options)
        .then(response => response.json())
        .then(data => {
            console.log("data");
            console.log(data);
            let relevantInfo = {
                Date: data[data.length - 1].date,
                Url: data[data.length - 1].bing_url,
                Copyright: data[data.length - 1].copyright,
                Title: data[data.length - 1].title,
            };
            localStorage.setItem("dataStore2", JSON.stringify(relevantInfo));
            sessionStorage.setItem("fetched2", "true");

            const modelData = JSON.parse(localStorage.getItem("dataStore2"));
            window.location.href = "Home/Index4?Date=" + modelData.Date + "&Url=" + modelData.Url + "&Copyright=" + modelData.Copyright + "&Title=" + modelData.Title;
        })
        .catch(err => console.error(err));
}