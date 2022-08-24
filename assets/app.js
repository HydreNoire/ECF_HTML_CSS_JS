const dog_btn = document.querySelector('#dog_btn');
const dog_result = document.querySelector('#dog_result');
const btn_msg = document.querySelector('.btn-msg');
const msg = ['You like dogs ?', 'Seems you like them', 'He\'s so cute', 'You want him?', "How are you?"];

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

            btn_msg.style.display = "block";
            btn_msg.innerText = msg[Math.floor(Math.random() * msg.length)];
            setTimeout(() => {
                btn_msg.style.display = "none";
                btn_msg.innerText = "";
            }, 1000);
        });
}
