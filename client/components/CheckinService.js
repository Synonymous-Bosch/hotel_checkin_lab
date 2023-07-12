const baseURL = "http://localhost:9000/api/checkins/";

export const getCheckins = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postCheckin = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const deleteCheckin = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};
