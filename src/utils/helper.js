export function isNull(value) {

    return value === undefined || value === null ||  value === ""
}

export function arrContains(needles, haystack) {

    return needles.every(Set.prototype.has, new Set(haystack))
}