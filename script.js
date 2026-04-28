const url = "data.json";

async function fetchJSONData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("response is not okay");
        }

        const data = await response.json();
        console.log(data);

        createCard(data);
    } catch (err) {
        console.error("Failed to load JSON:", err);
        document.getElementById("container").textContent = "Unable to load data.";
    }
}

fetchJSONData(url);

function createCard(data) {
    const container = document.getElementById("container");

    data.forEach(el => {
        const divs = document.createElement("div");
        divs.classList.add("column");

        divs.innerHTML = `
            <div>
                <img src="${el.image}" alt="image1"/>
            </div>
        `;

        container.appendChild(divs);
    });
}