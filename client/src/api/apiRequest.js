export async function createPlayer(data) {
  await fetch('https://rock-paper-scissors-app-io.herokuapp.com/api/create/players/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export function getPlayerById(data) {
  fetch(`https://rock-paper-scissors-app-io.herokuapp.com/api/get/player/${data}`);
}

export function createMatch(data) {
  fetch('https://rock-paper-scissors-app-io.herokuapp.com/api/create/match/winner', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
