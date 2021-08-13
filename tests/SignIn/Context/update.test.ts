import update from "../../../src/SignIn/Context/update";
import { initialState } from "../../../src/SignIn/Context/state";
import User from "../../../src/User/user";

describe("Sign in update", () => {
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

  test("Allows the user to enter their password", () => {
    const input = "Top secret";

    const expected = {
      ...initialState,
      password: input
    };

    const actual = update(initialState, {
      kind: "ENTER_PASSWORD",
      password: input
    });

    expect(actual).toEqual(expected);
  });

  test("Allows the user to attempt to sign in when ready", () => {
    const expected = {
      kind: "AWAITING_RESPONSE",
      username: initialState.username,
      password: initialState.password
    };

    const actual = update(initialState, {
      kind: "ATTEMPT_SIGN_IN",
      ready: true
    });

    expect(actual).toEqual(expected);
  });

  test("Does not allow the user to attempt to sign in when not ready", () => {
    const expected = {
      ...initialState,
      error: "Please complete all required fields"
    };

    const actual = update(initialState, {
      kind: "ATTEMPT_SIGN_IN",
      ready: false
    });

    expect(actual).toEqual(expected);
  });

  test("Responds to a successful sign in", () => {
    const awaitingResponseState = update(initialState, {
      kind: "ATTEMPT_SIGN_IN",
      ready: true
    });

    const mockUser: User = {
      emailAddress: "test@user.com",
      password: "password1",
      userId: "user001",
      username: "Mr Test User",
      telephoneNumber: "07707070707"
    };

    const expected = {
      kind: "SIGNED_IN",
      user: mockUser
    };

    const actual = update(awaitingResponseState, {
      kind: "SIGN_IN_SUCCEEDED",
      user: mockUser
    });

    expect(actual).toEqual(expected);
  });

    test("Responds to nau successful sign in", () => {
    const awaitingResponseState = update(initialState, {
      kind: "ATTEMPT_SIGN_IN",
      ready: true
    });

      const errorMessage = "Nope"

    const expected = {
      ...awaitingResponseState,
      kind: "ENTERING_DETAILS",
      error: errorMessage
    };

    const actual = update(awaitingResponseState, {
      kind: "SIGN_IN_FAILED",
      error: errorMessage
    });

    expect(actual).toEqual(expected);
  });
});
