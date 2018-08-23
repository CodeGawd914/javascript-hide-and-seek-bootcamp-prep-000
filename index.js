function getFirstSelector(selector){
return  document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}
function increaseRankBy(n){
  var ranking = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i< ranking.length; i++){
    ranking[i].innerHTML = parseInt(ranking[i].innerHTML)+ n
  }
}
function deepestChild(){
 var deep = document.getElementById('grand-node').querySelectorAll('div')
 return deep[deep.length-1]
}