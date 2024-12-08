'use client';
import { env } from 'next-runtime-env';

export const BASE_URL = env('NEXT_PUBLIC_API_URL')
export const API_AUTH = BASE_URL + "/auth"
export const API_TALENT = BASE_URL + "/talent"
export const API_USER = BASE_URL + "/user"