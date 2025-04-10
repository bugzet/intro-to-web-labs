function start_counter() {
  let count = 1
  const interval_id = setInterval(() => {
    console.log("Counter:", count)
    if (count === 5) {
      clearInterval(interval_id)
    }
    count++
  }, 1000)
}

start_counter()
