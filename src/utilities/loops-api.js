import { getToken } from "./users-service";

const BASE_URL = "/api/loops";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function deleteLoop(id) {
  return sendRequest(`${BASE_URL}/deleteLoop/${id}`, "DELETE");
}

export function editLoop(id) {
  return sendRequest(`${BASE_URL}/editLoop/${id}`, "PUT");
}

// Add an cat to the cat list
export function newLoop(loopData) {
  // Just send itemId for best security (no pricing)
  // console.log(catData)
  return sendRequest(`${BASE_URL}/newLoop`, "POST", loopData);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  console.log(url);
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  console.log("sending request");
  if (res.ok) return res.json();
  console.log(res.json);
  throw new Error("Bad Request");
}
