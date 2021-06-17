export const Utils = {
  getAbsenceStatus(timeStamp) {
    switch (timeStamp) {
      case "confirmedAt":
        return "Confirmed";
      case "rejectedAt":
        return "Rejected";
      default:
        return "Requested";
    }
  },
};
