import { saveUser } from './app.js';

const avatars = document.getElementsByClassName('avatar');
for (let avatar of avatars) {
    avatar.addEventListener('click', () => {
        const nameField = document.getElementById('username');
        saveUser({ username: nameField.value, avatar: avatar.src, clicks: 0, hits: 0 });
        window.location = '../real-map/index.html';
    });
}
