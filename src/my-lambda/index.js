/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

async function main(event) {
  try {
    console.log('VPC CIDR 👉', process.env.VPC_CIDR);
    console.log('VPC ID 👉', process.env.VPC_ID);
    return {
      body: JSON.stringify({
        cidr: process.env.VPC_CIDR,
        id: process.env.VPC_ID,
      }),
      statusCode: 200,
    };
  } catch (error) {
    return {body: JSON.stringify({error})};
  }
}

module.exports = {main};
