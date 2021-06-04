export const createElementFromHtml = (htmlString) => {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    return div.firstChild;
}
