# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/users.api.schema.spec.ts >> @smoke GET -- get a user
- Location: tests/api/users.api.schema.spec.ts:53:1

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import { APIRequestContext } from "@playwright/test";
  2  | 
  3  | export class ApiHelper {
  4  | 
  5  |     private readonly request: APIRequestContext;
  6  |     private readonly baseURL: string;
  7  | 
  8  |     constructor(request: APIRequestContext, baseURL: string) {
  9  |         this.request = request;
  10 |         this.baseURL = baseURL;
  11 |     }
  12 | 
  13 | 
  14 |     //GET
  15 |     async get(endPoint: string, headers?: Record<string, string>) {
  16 |         let response = await this.request.get(`${this.baseURL}${endPoint}`, {
  17 |             headers: headers
  18 |         });
  19 |         //console.log('API GET response: ', response);
  20 |         return {
  21 |             status: response.status(),
  22 |             body: await response.json()
  23 |         }
  24 |     }
  25 | 
  26 |     //POSt
  27 |     async post(endPoint: string, data: object, headers?: Record<string, string>) {
  28 |         let response = await this.request.post(`${this.baseURL}${endPoint}`, {
  29 |             data: data,
  30 |             headers: headers
  31 |         });
  32 |         return {
  33 |             status: response.status(),
> 34 |             body: await response.json()
     |                   ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  35 |         }
  36 |     }
  37 | 
  38 | 
  39 |     //PUT
  40 |     async put(endPoint: string, data: object, headers?: Record<string, string>) {
  41 |         let response = await this.request.put(`${this.baseURL}${endPoint}`, {
  42 |             data: data,
  43 |             headers: headers
  44 |         });
  45 |         return {
  46 |             status: response.status(),
  47 |             body: await response.json()
  48 |         }
  49 |     }
  50 | 
  51 |     //Delete
  52 |     async delete(endPoint: string, headers?: Record<string, string>) {
  53 |         let response = await this.request.delete(`${this.baseURL}${endPoint}`, {
  54 |             headers: headers
  55 |         });
  56 |         return {
  57 |             status: response.status()
  58 |         }
  59 |     }
  60 | 
  61 | }
```