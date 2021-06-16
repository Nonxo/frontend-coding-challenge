/** Service to Fetch all members **/

import data from "../../../../api/json_files/absences.json";

export const fetchAllMembers = () => {
  fetch(data).then((res) => {
    return res.json();
  });
};
