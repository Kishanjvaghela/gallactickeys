module.exports = {
  accountAddressId: 1,
  validatorAddressId: 2,
  crypto: {
    acAddrPrefix: '12EC',
    vaAddrPrefix: '1E2A',
    seedHashEnco: 'hex',
    seedHashAlgo: 'sha256',
    typeEd25519: '01',
    pubkeyPrefix: '0120',
    saltSize: 32, // in bytes,
    ivSize: 16, // in bytes
    encryption: {
      cipher: 'aes-128-ctr'
    },
    kdf: { // key derivation function
      pbkdf2: {
        c: 65536,
        dklen: 64,
        hash: 'sha256',
        prf: 'hmac-sha256'
      }
    }
  },
  keyPair: {
    addressLength: 40, // 20 bytes
    publicKeyLength: 64, // 32 bytes
    privateKeyLength: 128, // 64 bytes
    seedHashLength: 64 // 32 bytes
  }
}