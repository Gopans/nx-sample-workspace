/**
 * Interface for the 'Crypto' data
 */
export interface CryptoEntity { 
  id: string,
  rank: number,
  symbol: string,
  name: string,
  supply: number,
  maxSupply: null,
  marketCapUsd: number,
  volumeUsd24Hr: number,
  priceUsd: number,
  changePercent24Hr: number,
  vwap24Hr: string,
  explorer:string
}
