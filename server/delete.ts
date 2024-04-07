import { deleteAsync } from "del"

const deletedFilePaths = await deleteAsync(["meta.json"])

const deletedDirectoryPaths = await deleteAsync(["type-check", "build", "dist"])

console.log("Deleted files:\n", deletedFilePaths.join("\n"))
console.log("Deleted directories:\n", deletedDirectoryPaths.join("\n"))
