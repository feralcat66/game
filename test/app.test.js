import { saveUser, getUser, resetUser } from '../app.js';

const test = QUnit.test;

test('save a user', function(assert) {
    const user = { username: 'name', avatar: 'http://localhost/test.png' };
    saveUser(user);
    
    const savedUser = JSON.parse(localStorage.getItem('user'));

    assert.equal(user.username, savedUser.username);
    assert.equal(user.avatar, savedUser.avatar);
});

test('get a user', function(assert) {
    const user = { username: 'name', avatar: 'http://localhost/test.png' };
    localStorage.setItem('user', JSON.stringify(user));

    const savedUser = getUser();

    assert.equal(user.username, savedUser.username);
    assert.equal(user.avatar, savedUser.avatar);
});

test('reset a user', function(assert) {
    const user = { username: 'name', avatar: 'http://localhost/test.png' };
    saveUser(user);
    resetUser();

    assert.notOk(localStorage.getItem('user'));
});