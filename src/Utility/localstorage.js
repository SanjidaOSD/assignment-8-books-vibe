const getStoredBookApplication = () => {
    const storedBookApplication = localStorage.getItem('book-applications');
    if (storedBookApplication) {
        return JSON.parse(storedBookApplication);
    }
    return [];
}

const saveReadBooksApplication = id => {
    const storedBookApplication = getStoredBookApplication();
    const exists = storedBookApplication.find(booksId => booksId === id);
    if (!exists) {
        storedBookApplication.push(id);
        localStorage.setItem('book-applications',JSON.stringify(storedBookApplication))
    }
}
export { getStoredBookApplication, saveReadBooksApplication }