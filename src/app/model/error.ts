import {HttpErrorResponse} from '@angular/common/http';

abstract class ProjectError extends Error {
  protected constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class AuthenticationException extends ProjectError {
  constructor(m: string) {
    super(m);
  }
}

export class ServerErrorException extends ProjectError {
  constructor(m: string) {
    super(m);
  }
}

export class BadRequestException extends ProjectError {
  constructor(m: string) {
    super(m);
  }
}

export class NetworkException extends ProjectError {
  constructor(m: string) {
    super(m);
  }
}

export const httpErrorHandler = (e: Error) => {
  if (e instanceof ErrorEvent) {
    throw new NetworkException(e.message);
  }

  if (e instanceof HttpErrorResponse) {
    switch (e.status) {
      case 0:
        throw new NetworkException(e.message);
      case 400:
        throw new BadRequestException(e.message);
      case 401:
        throw new AuthenticationException(e.message);
      case 500:
        throw new ServerErrorException(e.message);
      default:
        throw e;
    }
  }

  throw e;
};
