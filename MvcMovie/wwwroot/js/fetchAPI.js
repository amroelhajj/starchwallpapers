const options = {
    method: 'GET'
};

let url = "https://api.nasa.gov/planetary/apod?api_key=QMmo2rwXeZaej3t06wPAm6KsgeYuG8fbgyF49q64"; // NASA Astronomy Picture of the Day API med Alvars API key. (Må helst ikke misbruges tak.)

let isAlreadyFetched = sessionStorage.getItem("fetched"); // En boolsk værdi der sikrer at Home/Index.cshtml ikke reloader uendeligt da den ellers fetcher uendeligt.

if (isAlreadyFetched === null) { // Det tjekkes om variablen der holder scriptets sessionStorage for det fetchede indhold er tom.
    // === frem for == sikrer at datatypen også skal være den samme for at statementet er sandt.
    fetch(url, options) // Fetch request med NASA URL og option 'GET'.
        .then(response => response.json())
        .then(data => {
            console.log("data"); // Debug prints.
            console.log(data);
            let relevantInfo = { // Fetchet data gemmes i objekt.
                Copyright: data.copyright,
                Date: data.date,
                Tooltip: data.explanation,
                Hdimg: data.hdurl,
                Title: data.title,
                Thumbnail: data.url
            };
            localStorage.setItem("dataStore", JSON.stringify(relevantInfo)); // Data gemmes i local storage som JSON (JavaScript Object Notatation) string.
            sessionStorage.setItem("fetched", "true"); // Boolsk værdi i sessionStorage indstilles til true.

            const modelData = JSON.parse(localStorage.getItem("dataStore")); // JSON data parses, som i læses.
            // Data skrives ind i den korresponderende tabel via linket. Dette ses dels på href keywordet.
            window.location.href = "Home/Index3?Copyright=" + modelData.Copyright + "&Date=" + modelData.Date + "&Tooltip=" + modelData.Tooltip + "&Hdimg=" + modelData.Hdimg + "&Title=" + modelData.Title + "&Thumbnail=" + modelData.Thumbnail;
        })
        .catch(err => console.error(err)); // Error hvis fetch ikke virker.
}

let url2 = "https://bing.npanuhin.me/US/en.json"; // API der redistribuerer Bings Image of the Day. Dette er da Bings egen API har CORS (Cross-Origin Resource Sharing) restriktioner.
// Denne API muliggør blot at fetche direkte via JavaScript.

let isAlreadyFetched2 = sessionStorage.getItem("fetched2"); // Samme mekanisme, blot en ny variabel.

console.log("debug1"); // Debug print.

if (isAlreadyFetched2 === null) {
    console.log("debug2"); // Debug print.
    fetch(url2, options)
        .then(response => response.json())
        .then(data => {
            console.log("data");
            console.log(data);
            let relevantInfo = {
                Date: data[data.length - 1].date, // Det allersidste element i det fetchede indhold er med denne API den seneste entry i Bings Image of the Day.
                Url: data[data.length - 1].bing_url, // Derfor bruges dataens længde - 1 for at få de rigtige index. Første element har jo et index lig 0.
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