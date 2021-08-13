import update from "../../../src/CreateAccount/Context/update";
import { initialState } from "../../../src/CreateAccount/Context/state";

describe("Create account update", () => {
  test("Allows the user to enter their email address", () => {
    const input = "some@email.com";

    const expected = {
      ...initialState,
      emailAddress: input
    };

    const actual = update(initialState, {
      kind: "ENTER_EMAIL_ADDRESS",
      emailAddress: input
    });

    expect(actual).toEqual(expected);
  });

  test("Allows the user to enter their telephone number", () => {
    const input = "07707070707";

    const expected = {
      ...initialState,
      telephoneNumber: input
    };

    const actual = update(initialState, {
      kind: "ENTER_TELEPHONE_NUMBER",
      telephoneNumber: input
    });

    expect(actual).toEqual(expected);
  });

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

  test("Allows the user to attempt to create an account", () => {
    const details = {
      emailAddress: "something@something.com",
      telephoneNumber: "07707070707",
      username: "Test User",
      password: "Top secret"
    };

    const expected = {
      ...details,
      kind: "AWAITING_RESPONSE"
    };

    const actual = update(
      {
        ...initialState,
        ...details
      },
      {
        kind: "ATTEMPT_CREATE_USER",
        details
      }
    );

    expect(actual).toEqual(expected);
  });

  test("Successfully reports user creation", () => {
    const details = {
      emailAddress: "something@something.com",
      telephoneNumber: "07707070707",
      username: "Test User",
      password: "Top secret"
    };

    const awaitingResponseState = update(
      {
        ...initialState,
        ...details
      },
      {
        kind: "ATTEMPT_CREATE_USER",
        details
      }
    );

    const mockUser = {
      ...details,
      userId: "User002"
    };

    const expected = {
      kind: "SUCCESS",
      user: mockUser
    };

    const actual = update(awaitingResponseState, {
      kind: "USER_CREATED",
      user: mockUser
    });

    expect(actual).toEqual(expected);
  });
});
