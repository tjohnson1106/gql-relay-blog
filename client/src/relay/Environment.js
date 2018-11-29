const { Environment, Network, RecordSource, Store } = require("relay-runtime");

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch("http://localhost:5000/api", {
    method: "POST",
    headers: {
      Accept: "application/jsonb",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
});

export const environment = new Environment({
  network,
  store
});
