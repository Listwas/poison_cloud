// Make async requests easily.

// Makes a request to the server and calls result_consumer with
// the response as the first argument.
//
// Example for GET:
//  requestGet("/v1/active_users", (res) => {
//      console.log(res.users);
//  });
//
// Example for POST:
//  requestPost("/v1/user/login", { "username": "x", "passwd": "x"}, (res) => {
//      console.log(res);
//  });
//

export async function requestGet(endpoint, resultConsumer, sessionKey) {
  let res = null;

  try {
    res = await fetch("http://192.168.1.21:7708" + endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionKey}`,
      },
    });
  } catch (err) {
    console.log("failed to send request", err);
    return resultConsumer(null);
  }

  resultConsumer(await res.json());
}

export async function requestPost(endpoint, data, resultConsumer, sessionKey) {
  let res = null;

  try {
    res = await fetch("http://192.168.1.21:7708" + endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionKey}`,
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log("failed to send request", err);
    return resultConsumer(null);
  }

  resultConsumer(await res.json());
}
