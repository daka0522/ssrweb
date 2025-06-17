import Cloudflare from 'cloudflare';

// console.log("ENV: ", import.meta.env.TOKEN_VALUE);
// console.log("ENV2: ", process.env.TOKEN_VALUE);

const token = import.meta.env.API_TOKEN
const accountId = import.meta.env.ACCOUNT_ID


console.log("@@@: ", token, accountId);


const client = new Cloudflare({
  apiToken: token, // This is the default and can be omitted
});


export const buckets = await client.r2.buckets.list({ account_id: accountId });
export const getBuckets = await client.r2.buckets.get("bucket1", {account_id: accountId})
console.log(buckets.buckets?.forEach( item => item));
