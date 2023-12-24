import axios from "axios";

export async function fetchCoins() {
  const { data } = await axios("https://api.coinpaprika.com/v1/coins");
  return data.slice(0, 100);
}
