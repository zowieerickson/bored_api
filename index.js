








document.querySelector("#get-activity").addEventListener('click', function() {
    fetch('https://www.boredapi.com/api/activity')
.then(response => response.json())
.then(data => {
    const activity = document.querySelector("#activity")
    activity.style.visibility = "visible"
    activity.innerHTML = `
    ${data.activity}
    `
})
})

