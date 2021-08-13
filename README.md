# Sign in example: React

I created this with a "state-first" approach in mind (see: https://dev.to/nimmo/state-driven-development-for-user-interfaces-part-1-an-introduction-27f1).

## Walkthrough

### Common structure

This covers `CreateAccount/`, `PasswordReset/`, and `SignIn/`, as well as `Global/` (although the last paragraph doesn't apply to `Global/`).

Each section of the application that has any state associated with it has a `Context` directory. Inside this directory you'll find a `Provider` file, a `state` file, and an `update` file.

The possible states are all defined in the `state` files, and the possible actions as well as how to handle those actions are in the `update` files.

The `Provider` files set up the context so that the state and actions can be used throughout the application.

Sections of the application that have a view associated with it also have a `View` directory, as well as an `Index` file. The `Index` file is responsible for choosing which view to render based on the state, and the `View` directory contains each possible view for that section.

### Users

You'll find the `User` type in `User/user`, along with a mock user and a function for requesting a user's details. Use `test@user.com` and `password1` to sign in successfully.

### Components

You'll find the components in `Components/`, separated by `General`, `Layout`, and `Input`.

### Global

`Global` is responsible for global state. Common to each global state are the `Theme` and `Language` types. These both function in this example - forgive me for only translating the `Sign in` title on the homepage though, I didn't think it was particularly worthwhile to translate everything just to show that it worked.

### Tests

The test directory covers tests for all of the `update` functions (i.e. all of the state transitions), as well as some utility functions.
