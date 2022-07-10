import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";

import { IForm } from "../model/iform";

@Injectable({providedIn: 'root'})
export class FormGuardService implements CanDeactivate<IForm> {

    canDeactivate(
        component: IForm, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot | undefined): boolean {

        return component.changeRoute()
    }

}