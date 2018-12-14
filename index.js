function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var nested =  document.querySelector("#nested")
   return nested.querySelector(".target")
}

function increaseRankBy(n) {

}

function deepestChild() {

let nodes = document.querySelector("#grand-node div")
    return nodes[nodes.length - 1]
}
