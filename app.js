const BASE_URL = "http://numbersapi.com";
const FAV_NUM = 7;
const testBatch = [1,2,3];
const fourNums = "1,2,3,4";

//Part 1:
async function numFact() {
  const response = await axios({ url: `${BASE_URL}/${FAV_NUM}?json` });
}
numFact();

//Part 2:
async function multNumFact() {
  const batchResponse = await axios({ url: `${BASE_URL}/${testBatch}?json` });
  console.log(batchResponse.data)
}

multNumFact();

//Part 3:
async function favNumFact() {
  const responses = Array.from({length: 4}, () => axios({ url: `${BASE_URL}/${testBatch}?json` }));

  const facts = [];
  for(elem of responses){
      facts.push((await elem).data);
  }
  console.log(facts)
  for(item of facts){
      $("#response").append(`<p>${item[1]}</p>`);
  }
}

favNumFact();


