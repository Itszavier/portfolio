/** @format */

export class ErrorResponse extends Error {
  code: number;

  constructor(name: string, code: number, message: string) {
    super(message);
    this.code = code;
    this.name = name;
  }
}

export function errorMessage(name: string, code: number, message: string) {
  return new ErrorResponse(name, code, message);
}
