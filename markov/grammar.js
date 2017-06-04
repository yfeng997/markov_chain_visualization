
function grammar(group, action) {
  
  var map = new Map()
if(group == "control") {
  map.set(0, "High Risk")
  map.set(1, "Med Risk")
  map.set(2, "Low Risk")
  map.set(3, "Submit")
} else if (group == "noncontrol"){
  map.set(0, "High Risk Small Step")
  map.set(1, "Med Risk Small Step")
  map.set(2, "Low Risk Small Step")
  map.set(3, "High Risk Med Step")
  map.set(4, "Med Risk Med Step")
  map.set(5, "Low Risk Med Step")
  map.set(6, "High Risk Big Step")
  map.set(7, "Med Risk Big Step")
  map.set(8, "Low Risk Big Step")
  map.set(9, "Submit")
}
  return map.get(action)
}