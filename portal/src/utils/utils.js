export const Utils = {
  getAbsenceStatus(obj) {
    if (obj.confirmedAt) {
      return "Confirmed";
    } else if (obj.rejectedAt) {
      return "Rejected";
    } else {
      return "Requested";
    }
  },
};
