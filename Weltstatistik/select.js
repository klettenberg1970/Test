const selectContainer = document.querySelector(".select-container");

export const auswahl = (liste) => {
    return new Promise((resolve) => {
        const select = document.createElement("select");

        const placeholderOption = document.createElement("option");
        placeholderOption.value = "";
        placeholderOption.innerText = "--- Bitte wählen ---";
        placeholderOption.disabled = true;
        placeholderOption.selected = true;
        select.appendChild(placeholderOption);

        for (const option of liste) {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.innerText = option;
            select.appendChild(optionElement);
        }
        selectContainer.appendChild(select);

        select.addEventListener("change", (event) => {
            resolve(event.target.value);
        });
    });
};