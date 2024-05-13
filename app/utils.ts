export function getFileNameWithoutExtension(filename: string) {
  var lastIndex = filename.lastIndexOf(".");
  if (lastIndex === -1) {
    return filename;
  } else {
    return filename.substring(0, lastIndex);
  }
}