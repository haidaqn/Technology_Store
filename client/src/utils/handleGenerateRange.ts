export const generateRange = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (item, index) => start + index);
};
/* 
    start : 3 
    end : 7
    => [3,4,5,6,7]

    callback trong array from de dieu chinh so bat dau

*/
