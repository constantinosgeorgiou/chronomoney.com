function convert_to_time(seconds: number) {
  // Remove fractional digits.
  let mnts: number = Math.trunc(seconds / 60);
  let hrs: number = Math.trunc(seconds / 60 / 60);
  let ds: number = Math.trunc(seconds / 60 / 60 / 24);
  let wks: number = Math.trunc(seconds / 60 / 60 / 24 / 7);
  let mnths: number = Math.trunc(seconds / 60 / 60 / 24 / 30);
  let yrs: number = Math.trunc(seconds / 60 / 60 / 24 / 365);

  return {
    minutes: mnts,
    hours: hrs,
    days: parseInt(ds.toString(24), 24), // Change to base 24
    weeks: parseInt(wks.toString(7), 7), // Change to base 7
    months: parseInt(mnths.toString(12), 12), // Change to base 12
    years: yrs,
  };
}

export default convert_to_time;
