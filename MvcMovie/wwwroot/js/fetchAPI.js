const options = {
    method: 'GET'
};

let url = 'https://randomuser.me/api';

let isAlreadyFetched = sessionStorage.getItem("fetched");

if (isAlreadyFetched === null) {
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log("data");
            console.log(data);
            let relevantInfo = {
                Name: data.results[0].name.first,
                Age: data.results[0].dob.age
            };
            localStorage.setItem("dataStore", JSON.stringify(relevantInfo));
            sessionStorage.setItem("fetched", "true");

            const modelData = JSON.parse(localStorage.getItem("dataStore"));
            window.location.href = "Home/Index2?Name=" + modelData.Name + "&Age=" + modelData.Age;
        })
        .catch(err => console.error(err));
}