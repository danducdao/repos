/*
* Program : Class Regex
* Écrit par : Dan Duc Dao
*/

export class Regex {
  constructor() {}

  static NoDigitPattern(): string {
    return "^[a-zA-ZäöüÄÖÜßáôéàè\\-\/\' *]+$";
  }

  static DecimalPattern(): string {
    return "^[0-9]+\\.?[0-9]*$";
  }

  static DigitPattern() {
    return "^[0-9]+$";
  }

  static PasswordPattern() {
    return "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  }

  static PhoneNumberPattern() {
    return "^\\+*[0-9()-]+$";
  }

  static EmailPattern() {
    return "^[a-zA-Z0-9\\.\\-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$";
  }
}
