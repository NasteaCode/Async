const BASE_URL = "http://numbersapi.com";
const FAV_NUM = 7;
const testBatch = "1,2,3";

//Part 1:
async function numFact() {
  const response = await axios({ url: `${BASE_URL}/${FAV_NUM}?json` });
}

//Part 2:
async function multNumFact() {
  const batchResponse = await axios({ url: `${BASE_URL}/${testBatch}?json` });
  console.log(batchResponse.data)
}


multNumFact();
