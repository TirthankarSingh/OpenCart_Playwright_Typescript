import {test, expect } from '../../src/fixtures/apifixtures'
import{UserPayload} from    '../../src/data/payload'
import {CsvHelper} from '../../src/utils/csvutils';
import{ENDPOINTS} from    '../../src/data/api_endpoints'

const Token = process.env.API_TOKEN!
let name = "Akhil"
let email = `akhil${Date.now()}@abc.com`
// console.log(Token);
let Auth_Token = {Authorization: `Bearer ${Token}`}
// console.log(Auth_Token);

const Create_User_Payload = UserPayload.createUser(name,email)

async function createUser(apiHelper: any) {
    console.log(ENDPOINTS.USERS);
    console.log(Create_User_Payload);
    let res = await apiHelper.post(ENDPOINTS.USERS,Create_User_Payload,Auth_Token)
    expect(res.status).toBe(201)
    return res.body;
}

test('Create users @smoke @api',async({apiHelper})=>{
    //Created User
    let UserResponce = await createUser(apiHelper)
    //Get User
    let responce = await apiHelper.get(`${ENDPOINTS.USERS}/${UserResponce.id}`,Auth_Token)
    expect(responce.status).toBe(200)
    expect(responce.body.name).toBe(name)
})

test('Update User',async({apiHelper})=>{
    let updatedUserData= {
        name:'Akhil Singh',
        status:'inactive'
    }
    //Created User
    let UserResponce = await createUser(apiHelper)
    //Update User
    let responce = await apiHelper.put(`${ENDPOINTS.USERS}/${UserResponce.id}`,updatedUserData,Auth_Token)
    expect(responce.status).toBe(200)
    expect(responce.body.name).toBe(updatedUserData.name)
    expect(responce.body.status).toBe(updatedUserData.status)
    //Get user
    let get_responce = await apiHelper.get(`${ENDPOINTS.USERS}/${UserResponce.id}`,Auth_Token)
    expect(get_responce.status).toBe(200)
    expect(get_responce.body.name).toBe(updatedUserData.name)

})
    
//Delete user
test('Delete User @smoke @api',async({apiHelper})=>{
    //Created User
    let UserResponce = await createUser(apiHelper)
    //Delete User
    let responce = await apiHelper.delete(`${ENDPOINTS.USERS}/${UserResponce.id}`,Auth_Token)
    expect(responce.status).toBe(204)
    //Get user
    let get_responce = await apiHelper.get(`${ENDPOINTS.USERS}/${UserResponce.id}`,Auth_Token)
    expect(get_responce.status).toBe(404)
    expect(get_responce.body.message).toBe('Resource not found')

})