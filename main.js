

document.querySelector('.search').addEventListener('click',search)


function search(click){
    let date = document.querySelector('input').value
    console.log(date)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=5lYybx9awN58EuKJP1G0LsoffEd8cYEtFeoa2lqh&date=${date}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        if (data.media_type === "image"){
            document.querySelector('.Photo').src = data.url
            document.querySelector('.video').style = "height:0"
        } else{
            document.querySelector('.video').src = data.url
        }
        document.querySelector('.title').innerText = data.title
        document.querySelector('.description').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}




