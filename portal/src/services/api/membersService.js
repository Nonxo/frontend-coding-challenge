/** Service to Fetch all members **/

import data from "../../api/json_files/members.json";

export const fetchAllMembers = () => {
  fetch(data).then((res) => {
    return res.json();
  });
};
