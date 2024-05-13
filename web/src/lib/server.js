// Make async requests easily.

// Makes a request to the server and calls result_consumer with
// the response as the first argument.
//
// Example:
//  request("GET", "/v1/active_users", (res) => {
//      console.log(res.users);
//  });
//
export async function request(method, endpoint, result_consumer) {
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
