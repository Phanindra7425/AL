import {  ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms'

export class FormValidator {
    
    static emailValidator(control:AbstractControl):ValidationErrors | null{
        //no saces in username
        if((control.value as String).indexOf(" ") >0) return {cannotContainSpacesInEmail:true}

        return null;
    }

    static passwordValidator(control:AbstractControl):ValidationErrors | null{
        console.log('in pswd validator')
        let val = control.value as string;
        let errorObj: ValidationErrors | null = {
            havesmallcharacters:false,
            haveUppercasecharacters:false,
            havenumbers: false,
            havespecialcharacters: false
        };
        if((RegExp('[a-z]').test(val))) errorObj.havesmallcharacters = true;
        if((RegExp('[A-Z]').test(val))) errorObj.haveUppercasecharacters = true;
        if((RegExp('[0-9]').test(val))) errorObj.havenumbers = true;
        if((RegExp('[!@#$%^&*]').test(val))) errorObj.havespecialcharacters = true;

        console.log(errorObj);
        return errorObj;

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



