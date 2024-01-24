const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjFiYzYxODE4LTdhMjMtNGEyYy1iZjg2LTgwMmJiOGYyOWQ0YyIsIm9yZ0lkIjoiMzU4NDYyIiwidXNlcklkIjoiMzY4NDAwIiwidHlwZUlkIjoiNDYwMmY1N2YtNDJlMC00NjcxLTg4MmEtNTdmMTAxZWRhZjZjIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTU0ODgxNDMsImV4cCI6NDg1MTI0ODE0M30.kAiPxjxz-dIbeAfJJn4C4Y1kzykWZ1dG33IttrlV1JQ";

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  //   console.log(response);
  return response.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  console.log(response);
  return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
