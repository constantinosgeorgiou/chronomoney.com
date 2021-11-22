import convert_to_time from "./chronos";

test("Convert 1 million seconds", () => {
  let time = convert_to_time(1000000);

  expect(time.minutes).toBe(16666);
  expect(time.hours).toBe(277);
  expect(time.days).toBe(11);
  expect(time.weeks).toBe(1);
  expect(time.months).toBe(0);
  expect(time.years).toBe(0);
});

test("Convert 1 billion seconds", () => {
  let time = convert_to_time(1000000000);

  expect(time.minutes).toBe(16666666);
  expect(time.hours).toBe(277777);
  expect(time.days).toBe(11574);
  expect(time.weeks).toBe(1653);
  expect(time.months).toBe(385);
  expect(time.years).toBe(31);
});
