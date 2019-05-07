chrome.tabs.getSelected(function (tabs) {
    console.log(tabs);
    let title= document.getElementById("title");
    let favIconUrl= document.getElementById("favIconUrl");
    let url= document.getElementById("url");
    title.innerText=tabs.title;
    favIconUrl.src=tabs.favIconUrl
    url.innerText=tabs.url
});
