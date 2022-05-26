<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpFoundation\Response;
use Throwable;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;


class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Throwable
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if($exception instanceof TokenBlacklistedException){
            return response(['Error'=> 'token is blacklisted'], Response::HTTP_BAD_GATEWAY);
        }else if($exception instanceof TokenInvalidException){
            return response(['Error'=> 'token is notvalid'], Response::HTTP_BAD_GATEWAY);
        }else if($exception instanceof TokenExpiredException){
            return response(['Error'=> 'token is Expired'], Response::HTTP_BAD_GATEWAY);
        }else if($exception instanceof TokenInvalidException){
            return response(['Error'=> 'token is notvalid'], Response::HTTP_BAD_GATEWAY);
        }else if($exception instanceof JWTException){
            return response(['Error'=> 'token is not provid'], Response::HTTP_BAD_GATEWAY);
        }

        return parent::render($request, $exception);
    }
}
