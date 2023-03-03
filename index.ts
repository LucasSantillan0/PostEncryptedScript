import forge from "node-forge";
import axios from "axios";
const encrypt = (msg: string) => {
  const publicKey = forge.pki.publicKeyFromPem(
    "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApGmhXE2RjOGo3ULOHvZm0X82AwAefgjhTlWLQegY+cPAq9DcF3yTCvTPZZp4IMb/I9MMNKSq55dr9sP5RefZxleMNKJEPrClgOIx/Uit3CU7LkUBSKPJPRkAUHn7BDiC6zCpGuHrpHFN0PAJ8WOMJr68H3qmPXyoEP8Zz9VuTUPXZsVhxvUZoriRgJRPauAY/yxIJVkzZmLP81sa9DF6XbNNCsrd0UTnVc0atmyicoONHuIGOYPnprJbWg3AfYux/tLWEypzv/q7faacW4du2IN3M+ZUTjms5nuVwigj9KMW65C0U86aqeMdfzQ9zVZVxq2Bo/r15XERumOIU8bEvQIDAQAB-----END PUBLIC KEY-----"
  );
  const encrypted = publicKey.encrypt(msg, "RSA-OAEP", {
    md: forge.md.sha256.create(),
  });
  return forge.util.encode64(encrypted);
};

const cellphone = "WRITE THE CELLPHONE HERE";

const hash = "WRITE THE HASH HERE";

const body = {
  cellphone: encrypt(cellphone),
  hash: encrypt(hash),
};

const main = async () => {
  try {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    console.log(`Sending: ${JSON.stringify(body)}`);
    const { data } = await axios.post("WRITE THE URL HERE", body, {
      headers,
    });
    console.log(`Response: ${JSON.stringify(data)}`);
  } catch (e) {
    console.error(`Error: ${e}`);
  }
};
main();
