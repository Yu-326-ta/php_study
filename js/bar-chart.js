poll_chart();
function poll_chart() {
    const $chart = document.querySelector('#chart');

    if (!chart) {
        return;
    }
    const ctx = $chart.getContext('2d');

    const likes = $chart.dataset.likes;
    const dislikes = $chart.dataset.dislikes;

    let data;

    if (likes == 0 && dislikes == 0) {
        data = {
            labels: ['まだ投票がありません'],
            datasets: [{
                label: '投票結果',
                data: [1],
                backgroundColor: [
                    '#9ca3af'
                ],
                borderWidth: 1
            }]
        }
    } else {
        data = {
            labels: ['賛成', '反対'],
            datasets: [{
                label: '投票結果',
                data: [likes, dislikes, 0],
                backgroundColor: [
                    '#34d339',
                    '#f87171'
                ],
                borderWidth: 1
            }]
        }
    }

    new Chart(ctx,  {
        type: 'bar',
        data:data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}