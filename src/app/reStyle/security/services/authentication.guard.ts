import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {map, take} from "rxjs";
import {AuthenticationService} from "./authentication.service";

export const authenticationGuard: CanActivateFn = () => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  return authenticationService.isSignedIn.pipe(
    take(1), map(isSignedIn => {
      if (isSignedIn) return true; else {
        router.navigate(['home/sign-in']).then();
        return false;
      }
    })
  );
}