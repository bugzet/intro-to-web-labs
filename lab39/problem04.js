function fetch_data() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received")
    }, 2000)
  })
}

fetch_data()
  .then(result => console.log(result))
  .finally(() => console.log("Request completed"))
