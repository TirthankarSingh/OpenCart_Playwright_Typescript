import { APIRequestContext } from "@playwright/test";

export class Api_Helper{
    private readonly request:APIRequestContext;
    private readonly baseURL:string;

    constructor(request:APIRequestContext,baseURL:string){
        this.request= request;
        this.baseURL=baseURL;

    }

    async get(endpoint:string, headers?:Record<string,string>){
        let responce = await this.request.get(`${this.baseURL}${endpoint}`,{headers:headers});
        console.log(`${this.baseURL}${endpoint}`)
        return {
            status: responce.status(),
            body:await responce.json()
        }
    }

        async post(endpoint:string,data:object ,headers?:Record<string,string>){
        let responce = await this.request.post(`${this.baseURL}${endpoint}`,
            {data:data,
            headers:headers});

        return {
            status: responce.status(),
            body: await responce.json()
        }
    }

     async put(endpoint:string,data:object ,headers?:Record<string,string>){
        let responce = await this.request.put(`${this.baseURL}${endpoint}`,
            {data:data,
            headers:headers});
        console.log(`${this.baseURL}${endpoint}`)
        return {
            status: responce.status(),
            body:await responce.json()
        }
    }

     async delete(endpoint:string,headers?:Record<string,string>){
        let responce = await this.request.delete(`${this.baseURL}${endpoint}`,
            {headers:headers});
            
        return {
            status: responce.status()
            // body:await responce.json()
        }
    }
}