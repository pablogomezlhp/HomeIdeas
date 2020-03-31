function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

function checkFields(event) {
    const valuesToCheck = [
        "title",
        "description",
        "image",
        "link",
        "category",
    ]

    const isEmpty = valuesToCheck.find(function (value) {
        const checkIfIsString = typeof event.target[value].value === "string";
        const checkIfIsEmpty = !event.target[value].value.trim();

        

        for (let value of valuesToCheck) {
            return true
        }
    })

    if (isEmpty) {
        event.preventDefault();
        alert('PLEASE CHECK THE FORM!')
    }
}