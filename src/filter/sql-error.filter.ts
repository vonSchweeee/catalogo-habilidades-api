import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError, TypeORMError } from 'typeorm';

@Catch(TypeORMError)
export class SqlErrorFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response
      .status(400)
      .json({
        statusCode: 400,
        message: exception.message,
        sqlState: exception.driverError?.sqlState,
      });
  }
}