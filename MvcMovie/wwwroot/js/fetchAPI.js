/*const options = {
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
            window.location.href = "Home/Index3?Copyright=" + encodeURIComponent(data.copyright) +
                "&Date=" + encodeURIComponent(data.date) +
                "&Tooltip=" + encodeURIComponent(data.explanation) +
                "&Hdimg=" + encodeURIComponent(data.hdurl) +
                "&Title=" + encodeURIComponent(data.title) +
                "&Thumbnail=" + encodeURIComponent(data.url);
        })
        .catch(err => console.error(err));
}*/
const options = {
    method: 'GET'
};

const url = 'https://api.nasa.gov/planetary/apod?api_key=QMmo2rwXeZaej3t06wPAm6KsgeYuG8fbgyF49q64';

const isAlreadyFetched = sessionStorage.getItem("fetched");

if (!isAlreadyFetched) {
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);

            // Handle null or undefined values
            const relevantInfo = {
                Copyright: data.copyright || "Unknown", // Fallback for null/undefined
                Date: data.date || "",
                Tooltip: data.explanation || "",
                Hdimg: data.hdurl || "",
                Title: data.title || "",
                Thumbnail: data.url || ""
            };

            // Store relevant info in localStorage
            localStorage.setItem("dataStore", JSON.stringify(relevantInfo));

            // Mark data as fetched in sessionStorage
            sessionStorage.setItem("fetched", "true");

            // Redirect with query parameters
            const queryParams = new URLSearchParams({
                Copyright: relevantInfo.Copyright,
                Date: relevantInfo.Date,
                Tooltip: relevantInfo.Tooltip,
                Hdimg: relevantInfo.Hdimg,
                Title: relevantInfo.Title,
                Thumbnail: relevantInfo.Thumbnail
            }).toString();

            window.location.href = `Home/Index3?${queryParams}`;
        })
        .catch(err => {
            console.error("Fetch error:", err);
        });
}