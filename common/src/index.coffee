m = module.exports = {}

# Insert your code here.

# This function is tested.
m.sayHello = (name) -> return "Hello, #{name}"

# This function is not tested, but ignored by Istanbul.
###
  istanbul ignore next
###
m.ignored = (foo) ->
  return true if foo is true
  return false

# This function is untested.
m.notCovered = (foo) ->
  return true if foo is true
  return false
