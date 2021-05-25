import { AbstractControl } from "@angular/forms";

export class PasswordValidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      if (control.value !== '1234')
        resolve({ invalidOldPassword: true });
      else resolve(null);
    })
  }
  static passwordsShouldMarch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword')
    if (confirmPassword !== newPassword) {
      return { passwordShouldMatch: true };
    }
    return null;
  }
}
