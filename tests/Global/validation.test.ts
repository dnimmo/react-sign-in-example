import {
  isValidPhoneNumber,
  isValidEmailAddress
} from "../../src/Global/validation";

describe("Validation", () => {
  test("Can recognise a valid phone number", () =>
    expect(isValidPhoneNumber("07707070707")).toBe(true));

  test("Can recognise an invalid phone number", () =>
    expect(isValidPhoneNumber("7070707")).toBe(false));

  test("Can recognise a valid email address", () =>
    expect(isValidEmailAddress("test@test.com")).toBe(true));

  test("Can recognise an invalid email address", () =>
    expect(isValidEmailAddress("myNameAtSomething.Something")).toBe(false));
});
