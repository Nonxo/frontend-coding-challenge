/** Service to Fetch all members **/

export const fetchAllMembers = () => {
  return fetch("api/json_files/members.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
