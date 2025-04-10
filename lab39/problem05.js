function fetch_data_with_error() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data received")
      } else {
        reject("Error: Failed to fetch data")
      }
    }, 2000)
  })
}

fetch_data_with_error()
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Request completed"))
