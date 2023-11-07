function globalToggle(className) {
    const elements = document.getElementsByClassName(className);
    if (elements.length === 0) {
        return;
    }
    let newClassName;
    if (className.endsWith('_active')) {
        newClassName = className.slice(0, '_active'.length);
    } else {
        newClassName = className + '_active';
    }
    for (const element of elements) {
        element.classList.remove(className);
        element.classList.add(newClassName);
    }
}
