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

export async function requestGet(endpoint, result_consumer) {
    let res = null;

    try {
        res = await fetch("http://192.168.1.21:7708" + endpoint, {
            method: method,
            headers: {
                "Authorization": "Bearer 4c9cdbcba9603a60a569e0c7723287b3"
            }
        });
    } catch (err) {
        return;
    }

    result_consumer(await res.json());
}

export async function requestPost(endpoint, data, result_consumer) {
    let res = null;

    try {
        res = await fetch("http://192.168.1.21:7708" + endpoint, {
            method: method,
            headers: {
                "Authorization": "Bearer 4c9cdbcba9603a60a569e0c7723287b3"
            },
            body: JSON.stringify(data)
        });
    } catch (err) {
        return;
    }

    result_consumer(await res.json());
}
