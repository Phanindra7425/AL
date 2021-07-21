import {  ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms'

export class FormValidator {
    
    static emailValidator(control:AbstractControl):ValidationErrors | null{
        //no saces in username
        if((control.value as String).indexOf(" ") >0) return {cannotContainSpacesInEmail:true}

        return null;
    }

    static passwordValidator(control:AbstractControl):ValidationErrors | null{
        let re = RegExp("[a-zA-Z0-9!@#$%^&*]*");
        let val = control.value as string;
        let errorObj: ValidationErrors | null = {};
        if((RegExp('[a-z]').test(val))) errorObj.havesmallcharacters = true;
        if((RegExp('[A-Z]').test(val))) errorObj.haveUppercasecharacters = true;
        if((RegExp('[0-9]').test(val))) errorObj.havenumbers = true;
        if((RegExp('[!@#$%^&*]').test(val))) errorObj.havespecialcharacters = true;

        return (errorObj.length == null)? null: errorObj;

    }

    static passwordMatchValidator(oldp:any,newp:any){

        return new Promise((resolve) => {
            if((oldp.value == newp.value)){
                console.log(oldp ,newp);
                console.log(true);
                resolve({passwordMatchValidator:true})
            }
            else{
                resolve({passwordMatchValidator:false});
            }
        });

    }


}



