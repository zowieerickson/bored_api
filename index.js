fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
        const boredContainer = document.querySelector("#bored-container")
        boredContainer.innerHTML = `
        Activity: ${data.activity}
        `
    })