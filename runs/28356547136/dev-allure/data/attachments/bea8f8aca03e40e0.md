# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/user_api_E2E.spec.ts >> Create users @smoke @api
- Location: tests/api/user_api_E2E.spec.ts:23:1

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import { APIRequestContext } from "@playwright/test";
  2  | 
  3  | export class Api_Helper{
  4  |     private readonly request:APIRequestContext;
  5  |     private readonly baseURL:string;
  6  | 
  7  |     constructor(request:APIRequestContext,baseURL:string){
  8  |         this.request= request;
  9  |         this.baseURL=baseURL;
  10 | 
  11 |     }
  12 | 
  13 |     async get(endpoint:string, headers?:Record<string,string>){
  14 |         let responce = await this.request.get(`${this.baseURL}${endpoint}`,{headers:headers});
  15 |         console.log(`${this.baseURL}${endpoint}`)
  16 |         return {
  17 |             status: responce.status(),
  18 |             body:await responce.json()
  19 |         }
  20 |     }
  21 | 
  22 |         async post(endpoint:string,data:object ,headers?:Record<string,string>){
  23 |         let responce = await this.request.post(`${this.baseURL}${endpoint}`,
  24 |             {data:data,
  25 |             headers:headers});
  26 | 
  27 |         return {
  28 |             status: responce.status(),
> 29 |             body: await responce.json()
     |                   ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  30 |         }
  31 |     }
  32 | 
  33 |      async put(endpoint:string,data:object ,headers?:Record<string,string>){
  34 |         let responce = await this.request.put(`${this.baseURL}${endpoint}`,
  35 |             {data:data,
  36 |             headers:headers});
  37 |         console.log(`${this.baseURL}${endpoint}`)
  38 |         return {
  39 |             status: responce.status(),
  40 |             body:await responce.json()
  41 |         }
  42 |     }
  43 | 
  44 |      async delete(endpoint:string,headers?:Record<string,string>){
  45 |         let responce = await this.request.delete(`${this.baseURL}${endpoint}`,
  46 |             {headers:headers});
  47 |             
  48 |         return {
  49 |             status: responce.status()
  50 |             // body:await responce.json()
  51 |         }
  52 |     }
  53 | }
```