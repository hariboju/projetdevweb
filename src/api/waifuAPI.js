const getWaifuData =
    async function() {
  const response =
      await fetch('https://api.waifu.im/random/?selected_tags=oppai')
  if (response.status == 200) {
    console.log(await response.json())
    return response.json()
  }
  else {
    new Error(response.statusText)
  }
}

export default {
  getWaifuData
}