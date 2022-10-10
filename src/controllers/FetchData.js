export const FetchData = async url => {
    const response = await fetch(url);
    const output = await response.json();
    return output ? output : {};
}