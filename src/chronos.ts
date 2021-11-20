function convert_to_time(seconds: number) {
  return {
    minutes: (seconds / 60).toFixed(1),
    hours: (seconds / 60 / 60).toFixed(1),
    days: (seconds / 60 / 60 / 24).toFixed(1),
    weeks: (seconds / 60 / 60 / 24 / 7).toFixed(1),
    months: (seconds / 60 / 60 / 24 / 30).toFixed(1),
    years: (seconds / 60 / 60 / 24 / 365).toFixed(1),
  };
}

export default convert_to_time;
