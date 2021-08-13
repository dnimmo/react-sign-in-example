export const isValidPhoneNumber = (str: string): boolean =>
  isNaN(parseInt(str, 10)) ? false : str.startsWith("0") && str.length === 11;

export const isValidEmailAddress = (str: string): boolean => {
  const emailParts = str.split("@");

  if (emailParts.length !== 2) return false;

  const emailDomainParts = emailParts[1].split(".");

  return (
    emailDomainParts.length > 1 &&
    emailDomainParts[emailDomainParts.length - 1].length > 0
  );
};
