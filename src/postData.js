async function postData(obj){
    fetch('https://chess-tournament-api.devtest.ge/api/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
    })
    .then(async response =>{
        let content = await response.json()
        console.log(content);
    }).then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.log('Error:', error);
    });
}

export default postData
