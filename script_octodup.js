let changeText = (selector, text) => {

    Array.from(document.querySelectorAll(selector)).map((element) => element.outerHTML = text);

}


// changeText("img","hello");
