const statuses: Record<number, string> = {
  400: "Bad Request",
  401: "Unauthorized",
  404: "Not Found",
  500: "Internal Server Error",
};

class HttpError extends Error {
  code: number;
  status: string;

  constructor(code: number, message?: string) {
    super(message);
    const status = statuses[code];
    this.code = code;
    this.status = status ?? "";

    if (message == null) {
      this.message = `${code}${status != null ? ` - ${status}` : ""}`;
    }
  }
}

export default HttpError;
