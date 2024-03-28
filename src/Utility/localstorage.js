import { toast } from "react-toastify";



export const saveBookToLocalStorage = (book) =>{
    const saveReadBooks = JSON.parse(localStorage.getItem('books')) || [];
   const readBooks = saveReadBooks.find(item => item.bookId == book.bookId);
   
   if(readBooks){
    toast('Books all ready added..')
   }
   else{
    saveReadBooks.push(book)
    localStorage.setItem('books', JSON.stringify(saveReadBooks));
   }
   
}
