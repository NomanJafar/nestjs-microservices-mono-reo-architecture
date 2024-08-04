import { LoggerService } from '@app/logger';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';;

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) { logger.setContext(RequestLoggerMiddleware.name) }
  use(req: Request, res: Response, next: () => void) {
    const { method, url, baseUrl, hostname, body, query, params } = req;
    const message = `Incoming Request: URL: ${hostname}${baseUrl}${url} - Method: ${method} - Body: ${JSON.stringify(body)} - Query: ${JSON.stringify(query)} - Params: ${JSON.stringify(params)}`;
    this.logger.log(message);
    next();
  }
}
