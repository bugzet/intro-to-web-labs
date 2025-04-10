function delayed_message(message, delay) {
  setTimeout(() => {
    console.log(message)
  }, delay)
}

delayed_message("Hello, after 3 seconds!", 3000)
