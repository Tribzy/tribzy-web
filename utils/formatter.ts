/**
 * Converts a string to title case.
 *
 * @param {string | undefined | null} text - The input string.
 * @returns {string} The string converted to title case.
 */
export const toTitleCase = (text: string | undefined | null): string => {

    if (!text || text === undefined) return "";

    const tempRes = text
        .trim() // Remove white space
        .replace(/^,+/, "") // Remove first commas
        .replace(/,+$/, "") // Remove last commas
        .split(" ") // Split to individual items
        .map((txt) => {

            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();

        })
        .join(" ");

    return tempRes;

}


export const getLocalDynamicImageUrl = (rootPath: string, name: string) => {

    return new URL(`/assets/${rootPath}/${name}`, import.meta.url).href

}
