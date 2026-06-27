import {test, expect } from '../../src/fixtures/apifixtures'
import{UserPayload} from    '../../src/data/payload'
import{ENDPOINTS} from    '../../src/data/api_endpoints'
import {CsvHelper} from '../../src/utils/csvutils';

const Token = process.env.API_TOKEN!
// console.log(Token);
let Auth_Token = {Authorization: `Bearer ${Token}`}
// console.log(Auth_Token);

test('get all users',async({apiHelper})=>{
    let res = await apiHelper.get('/public/v2/users',Auth_Token)
    console.log(res.status);
    console.log(res.body);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})

let data = CsvHelper.readCsv('src/data/api_userData.csv')
console.log(data);
for(let user of data ){
test(`Create a new user${user.user}`, async({apiHelper})=>{
    // let Create_User_Payload = { "name": "Tenali Ramakrishna", "email": `tirth${Date.now()}@example.com`, "gender": "male", "status": "active" }
    const user_email = `${user.user}_${Date.now()}@open.com`
    const Create_User_Payload = UserPayload.createUser(user.user, user_email)
    console.log(user.user);
    console.log(user_email);
    console.log(Create_User_Payload);
    let res = await apiHelper.post(ENDPOINTS.USERS,Create_User_Payload,Auth_Token)
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(user.user);
    expect(res.body.email).toBe(user_email);
})
}
