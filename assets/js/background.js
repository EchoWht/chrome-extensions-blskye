chrome.contextMenus.create({
  type: 'normal',
  title: 'translate.google.cn',
  id: 'a',
  contexts: ['selection'],
  onclick: translate
});
chrome.contextMenus.create({
  type: 'normal',
  title: '保存到Blskye',
  id: 'b',
  contexts: ['selection'],
  onclick: translate1
});
function translate(info, tab){
  console.log(info);
  var url = 'http://translate.google.cn/#auto/zh-CN/'+info.selectionText ;
  window.open(url, '_blank');
}
function translate1(info, tab){
  console.log(info);
  window.open("html/options.html"+info.selectionText, '_blank');
}


