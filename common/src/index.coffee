m = module.exports = {}

# Insert your code here.

# This function is tested.
m.sayHello = (name) -> return "Hello, #{name}"

# This function is not tested.
m.ignored = (foo) ->
  return true if foo is true
  return false
