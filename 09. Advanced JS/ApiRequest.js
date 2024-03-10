const requestUrl = "https://api.github.com/users/hiteshchoudhary";

const XHR = new XMLHttpRequest();
XHR.open("GET", requestUrl);
XHR.onreadystatechange = function () {
  console.log(XHR.readyState);
  if (XHR.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data.followers); // it will show undefined becaause when get response from data it is mostly in string type so we have to change the type of response to object
  }
};
// console.log(XHR.readyState);
XHR.send();
