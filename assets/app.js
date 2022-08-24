const dog_btn = document.querySelector('#dog_btn');
const dog_result = document.querySelector('#dog_result');

dog_btn.addEventListener('click', getRandomDog);

function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            dog_result.style.backgroundImage = "url(" + data.message + ")";
            dog_btn.classList.add('btn-success');
            setTimeout(() => {
                dog_btn.classList.remove('btn-success');
            }, 500);
        });
}
