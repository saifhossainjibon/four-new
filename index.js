// const user = { id: 11, name:'jibon', job: 'actor' };
// const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);
// const studentInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name)
const shop ={
    name: "Jibon store",
    address:"gazipura",
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner : {
        name :'saif hossai jibon',
        profession : 'developer'
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified)
console.log(converted)