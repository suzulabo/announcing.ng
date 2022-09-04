import console from 'console';
import crypto from 'crypto';
import { base64url } from 'jose';

const main = () => {
  const key = crypto.randomBytes(256 / 8);

  console.log(base64url.encode(key));
};

main();
