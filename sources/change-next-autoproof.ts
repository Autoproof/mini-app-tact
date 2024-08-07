import { TonClient, WalletContractV4, beginCell, internal, toNano } from "@ton/ton";
import { mnemonicToPrivateKey } from "@ton/crypto";
import { storeSetTheNextAutoproof } from "./output/autoproof_Autoproof";

(async () => {
  // Create Client
  const client = new TonClient({
    endpoint: 'https://toncenter.com/api/v2/jsonRPC',
    apiKey: process.env.TONCENTER_APIKEY ?? ""
  });

  // Generate new key
  let mnemonics = process.env.MNEMONICS?.split(" ") ?? [];
  let keyPair = await mnemonicToPrivateKey(mnemonics);

  // Create wallet contract
  let workchain = 0;
  let wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });
  const walletContract = client.open(wallet);

  // Create a transfer
  let seqno: number = await walletContract.getSeqno();
  let transfer = walletContract.createTransfer({
    seqno,
    secretKey: keyPair.secretKey,
    messages: [internal({
      value: '0.1',
      to: "EQBNBHb0DWZnXyzC0tc6nh4aB976kJSpM9CmQQlevnWxc_JW",
      body: beginCell().endCell()
    })]
  });

  // Send
  await walletContract.send(transfer);
})();