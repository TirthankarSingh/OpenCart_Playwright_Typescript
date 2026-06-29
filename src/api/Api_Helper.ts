import { APIRequestContext } from "@playwright/test";

export class Api_Helper{
    private readonly request:APIRequestContext;
    private readonly baseURL:string;

    constructor(request:APIRequestContext,baseURL:string){
        this.request= request;
        this.baseURL=baseURL;

    }

    async get(endpoint:string, headers?:Record<string,string>){
        let response = await this.request.get(`${this.baseURL}${endpoint}`,{headers:headers});
        console.log(`${this.baseURL}${endpoint}`)

        const text = await response.text();
        console.log("=================================");
        console.log("URL:", response.url());
        console.log("Status:", response.status());
        console.log("Content-Type:", response.headers()["content-type"]);
        console.log("Body:", text.substring(0, 500));
        console.log("=================================");

        return {
            status: response.status(),
            body:await response.json()
        }
    }

        async post(endpoint:string,data:object ,headers?:Record<string,string>){
        let response = await this.request.post(`${this.baseURL}${endpoint}`,
            {data:data,
            headers:headers});

        const text = await response.text();
        console.log("=================================");
        console.log("URL:", response.url());
        console.log("Status:", response.status());
        console.log("Content-Type:", response.headers()["content-type"]);
        console.log("Body:", text.substring(0, 500));
        console.log("=================================");

        return {
            status: response.status(),
            body: await response.json()
        }
    }

     async put(endpoint:string,data:object ,headers?:Record<string,string>){
        let response = await this.request.put(`${this.baseURL}${endpoint}`,
            {data:data,
            headers:headers});
        console.log(`${this.baseURL}${endpoint}`)
        return {
            status: response.status(),
            body:await response.json()
        }
    }

     async delete(endpoint:string,headers?:Record<string,string>){
        let response = await this.request.delete(`${this.baseURL}${endpoint}`,
            {headers:headers});

        const text = await response.text();
        console.log("=================================");
        console.log("URL:", response.url());
        console.log("Status:", response.status());
        console.log("Content-Type:", response.headers()["content-type"]);
        console.log("Body:", text.substring(0, 500));
        console.log("=================================");
            
        return {
            status: response.status()
            // body:await response.json()
        }
    }
}