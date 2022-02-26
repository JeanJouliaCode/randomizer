const URL = "https://www.random.org/integers/?num=1&min=1&max=10000&col=1&base=10&format=plain&rnd=new"

async function getRandomNumberFromAPI() {
  let response = await fetch(URL);

  if (response.status === 200) {
    let data = await response.text();
    return { success: true, data: (parseInt(data) / 10000) }
  }
  else {
    return { success: false, error: "error while calling the API" }
  }
}

export default { getRandomNumberFromAPI }