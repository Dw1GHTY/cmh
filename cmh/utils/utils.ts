export function toLowerCaseUnderscores(input: string): string {
    return input.toLowerCase().replace(/ /g, "_");
}