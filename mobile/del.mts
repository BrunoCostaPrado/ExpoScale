import { deleteAsync } from "del"

const deletedFilePaths = await deleteAsync([])

const deletedDirectoryPaths = await deleteAsync(["types-check"])

console.log("Deleted files:\n", deletedFilePaths.join("\n"))
console.log("Deleted directories:\n", deletedDirectoryPaths.join("\n"))
