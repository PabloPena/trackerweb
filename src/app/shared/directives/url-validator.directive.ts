import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[urlValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true }]
})
export class UrlValidatorDirective implements Validator {
    constructor() { }

    validate(control: AbstractControl): { [key: string]: any } | null { 
        if (!control.value) return null;

        let url;

        try {
            url = new URL(control.value);
        } catch (_){
            return { 'invalidUrl': { value: control.value } }
        }

        if (url.protocol !== "http:" && url.protocol !== "https:") {
            return { 'invalidProtocol': { value: control.value } }
        } 

        return null;
    }
}