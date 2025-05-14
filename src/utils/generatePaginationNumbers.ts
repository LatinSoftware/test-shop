export function generatePaginationNumbers(currentPage: number,totalPages: number){

    // if the total pages is less than 7, then return all pages

    if(totalPages <= 7){
        return Array.from({length: totalPages}, (_, i) => i + 1);
    }

    // if the current page is in the first 3 pages, then return the first 4 and the last 2 pages
    if(currentPage <= 3){
        return [1, 2, 3, "...", totalPages - 1, totalPages]; // [1,2, 3, ..., 49, 50]
    }

    if(currentPage >= totalPages - 2){
        return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages]; // [1, 2, ..., 48, 49, 50]
    }


    return [1,  "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]; 
}