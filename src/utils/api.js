const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
  }).then(checkResponse);
}

function addItem() {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: "Content-type: application/json",
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  }).then(checkResponse);
}

function deleteItem() {
  return fetch(`${baseUrl}/items`, {
    method: "DELETE",
  }).then(checkResponse);
}

export { getItems, addItem, deleteItem };
