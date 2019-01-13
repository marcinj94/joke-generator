jokeText = document.querySelector('.joke');
btn = document.querySelector('button');

getJoke = () => {
    fetch("http://api.icndb.com/jokes/random")
        .then(resp => {
            if (resp.value = '200') {
                return resp.json();
            } else {
                return Promise.reject(resp);
            }
        })
        .then(resp => {
            jokeText.innerHTML = resp.value.joke;
        })
        .catch(error => {
            if (error.status == '404') {
                jokeText.textContent = `Something went wrong!`;
                jokeText.style.textShadow = '0 0 15px red';
            }
        });
}

btn.addEventListener('click', getJoke);