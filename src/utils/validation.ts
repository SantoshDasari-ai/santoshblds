/**
 * Email validation regex pattern
 */
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * URL validation regex pattern
 */
const URL_REGEX =
  /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

/**
 * Interface for validation result
 */
export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

/**
 * Validates an email address
 * @param email - Email address to validate
 * @returns Validation result
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { isValid: false, message: "Email is required" };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { isValid: false, message: "Please enter a valid email address" };
  }

  return { isValid: true };
}

/**
 * Validates a URL
 * @param url - URL to validate
 * @returns Validation result
 */
export function validateUrl(url: string): ValidationResult {
  if (!url) {
    return { isValid: false, message: "URL is required" };
  }

  if (!URL_REGEX.test(url)) {
    return { isValid: false, message: "Please enter a valid URL" };
  }

  return { isValid: true };
}

/**
 * Validates required fields
 * @param value - Value to validate
 * @param fieldName - Name of the field for error message
 * @returns Validation result
 */
export function validateRequired(
  value: string,
  fieldName = "Field"
): ValidationResult {
  if (!value || value.trim() === "") {
    return { isValid: false, message: `${fieldName} is required` };
  }

  return { isValid: true };
}

/**
 * Validates minimum length
 * @param value - Value to validate
 * @param minLength - Minimum length required
 * @param fieldName - Name of the field for error message
 * @returns Validation result
 */
export function validateMinLength(
  value: string,
  minLength: number,
  fieldName = "Field"
): ValidationResult {
  if (value.length < minLength) {
    return {
      isValid: false,
      message: `${fieldName} must be at least ${minLength} characters`,
    };
  }

  return { isValid: true };
}

/**
 * Validates maximum length
 * @param value - Value to validate
 * @param maxLength - Maximum length allowed
 * @param fieldName - Name of the field for error message
 * @returns Validation result
 */
export function validateMaxLength(
  value: string,
  maxLength: number,
  fieldName = "Field"
): ValidationResult {
  if (value.length > maxLength) {
    return {
      isValid: false,
      message: `${fieldName} must be no more than ${maxLength} characters`,
    };
  }

  return { isValid: true };
}
