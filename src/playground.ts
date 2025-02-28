import { db } from "./server/db";

await db.user.create({
    data: {
emailAddress: 'test@gmail.com',
firstName: 'hani',
lastName: 'shahrul',
    }
})
console.log('done')