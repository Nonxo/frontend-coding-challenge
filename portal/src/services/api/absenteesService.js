/** Service to Fetch all absentees **/

export const fetchAllAbsentees = () => {
  return fetch("api/json_files/absences.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
