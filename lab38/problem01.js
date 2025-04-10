function parse_json(json_str) {
  try {
    const parsed = JSON.parse(json_str)
    console.log(parsed)
    return parsed
  } catch (error) {
    console.error("Invalid JSON format")
  }
}

parse_json('{"name": "alice", "age": 25}')
parse_json('{"name": "alice", "age": }')
