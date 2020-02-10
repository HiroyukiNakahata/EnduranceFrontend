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
