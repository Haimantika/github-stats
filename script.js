// script.js
document.getElementById('loadStars').addEventListener('click', function() {
    fetchData('https://api.opensauced.pizza/v2/histogram/top/stars', 'starRows');
});

document.getElementById('loadForks').addEventListener('click', function() {
    fetchData('https://api.opensauced.pizza/v2/histogram/top/forks', 'forkRows');
});

function fetchData(url, elementId) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById(elementId);
            tableBody.innerHTML = ''; // Clear existing data

            // Slice the data to display only the first 10 items
            data.slice(0, 10).forEach(item => {
                const row = `<tr>
                    <td>${item.repo_name}</td>
                    <td>${item.star_count || item.fork_count}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

