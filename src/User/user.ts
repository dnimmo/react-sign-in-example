export type User = {
  emailAddress: string;
  password: string;
  userId: string;
  username: string;
  telephoneNumber: string;
};

const mockUser: User = {
  emailAddress: "test@user.com",
  password: "password1",
  userId: "user001",
  username: "Mr Test User",
  telephoneNumber: "07707070707"
};

const users: User[] = [mockUser];

interface UserRequest {
  emailOrTelephone: string;
  password: string;
}

interface UserFound {
  kind: "USER_FOUND";
  user: User;
}

interface NoUserFound {
  kind: "NO_USER_FOUND";
  error: string;
}

type UserResponse = UserFound | NoUserFound;

export function getUser({
  emailOrTelephone,
  password
}: UserRequest): UserResponse {
  const requestedUser: User | undefined = users.find(
    ({ emailAddress, telephoneNumber }) =>
      emailAddress === emailOrTelephone || telephoneNumber === emailOrTelephone
  );

  return requestedUser?.password === password
    ? { kind: "USER_FOUND", user: requestedUser }
    : {
        kind: "NO_USER_FOUND",
        error:
          "Sorry, we weren't able to sign you in with those details. Please check your information and try again."
      };
}
