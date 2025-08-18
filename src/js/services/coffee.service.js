
export const getCoffeeData = async () => {
  try {
    // GET
    const responseData = await fetch("https://api.sampleapis.com/coffee/hot");
    if (!responseData.ok) { // Early return
      throw new Error(responseData.status);
    }
    const json = await responseData.json();
    return json;
  }
  catch(err) {
    console.error(`Oye, algo salio mal: ${err}`);
  }
}

