export default function byte (string: string) {
  const utf8 = unescape(encodeURIComponent(string))

  const array: number[] = []
  for (var i = 0; i < utf8.length; i++) {
    array.push(utf8.charCodeAt(i))
  }

  return array
}
