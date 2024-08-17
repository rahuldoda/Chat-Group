import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
if(JSON.parse(route.queryParams['data'])){
  return true;
}
 return false
};
