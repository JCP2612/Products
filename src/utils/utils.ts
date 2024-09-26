export const validatorsRegex = {
  names: /^[a-zA-ZÀ-ÖØ-öø-ÿ'.\s-]{1,50}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!*$#+])[A-Za-z\d!*$#+]{8,}$/,
};

export type RegexType = "names" | "email" | "password";

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
