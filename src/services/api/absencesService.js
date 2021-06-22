/** Service to Fetch all absences **/

export const fetchAllAbsences = () => {
  return fetch("api/json_files/absences.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
