export const validatorsRegex = {
  fullname: /^[a-zA-ZÀ-ÖØ-öø-ÿ'.\s-]{1,50}$/,
  username: /^[a-zA-ZÀ-ÖØ-öø-ÿ'.\s-]{1,50}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!*$#+])[A-Za-z\d!*$#+]{8,}$/,
};

export type RegexType = "fullname" | "username" | "password";

export const validateFieldValue = (
  value: string,
  regex: RegexType
): boolean => {
  return validatorsRegex[regex].test(value);
};

export interface FormField {
  value: any;
  regex: RegexType;
}
