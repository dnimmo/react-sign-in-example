import update from "../../../src/PasswordReset/Context/update";
import {
  initialState,
  ResetMethod
} from "../../../src/PasswordReset/Context/state";

describe("Password reset update", () => {
  test("Allows the user to enter their username", () => {
    const input = "Some name";

    const expected = {
      ...initialState,
      username: input
    };

    const actual = update(initialState, {
      kind: "ENTER_USERNAME",
      username: input
    });

    expect(actual).toEqual(expected);
  });

  test("Alllows the user to request a password reset when a valid email address has been entered", () => {
    const resetMethod: ResetMethod = { kind: "EMAIL" };

    const expected = {
      kind: "PASSWORD_RESET_SENT",
      resetMethod
    };

    const actual = update(initialState, {
      kind: "REQUEST_PASSWORD_RESET",
      resetMethod
    });

    expect(actual).toEqual(expected);
  });

  test("Alllows the user to request a password reset when a valid phone number has been entered", () => {
    const resetMethod: ResetMethod = { kind: "PHONE" };

    const expected = {
      kind: "PASSWORD_RESET_SENT",
      resetMethod
    };

    const actual = update(initialState, {
      kind: "REQUEST_PASSWORD_RESET",
      resetMethod
    });

    expect(actual).toEqual(expected);
  });

  test("Does not allow the user to request a password reset when no valid details are entered", () => {
    const expected = {
      ...initialState,
      error: "Please enter a valid email address or telephone number"
    };

    const actual = update(initialState, {
      kind: "REQUEST_PASSWORD_RESET",
      resetMethod: null
    });

    expect(actual).toEqual(expected);
  });
});
