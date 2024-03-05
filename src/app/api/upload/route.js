import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join, dirname } from "path";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Get the public directory path relative to the current file
  const publicDirPath = join(process.cwd(), "public");

  // Create the upload path using the file name
  const uploadPath = join(publicDirPath, file.name);

  // Ensure the directory exists before writing the file
  await ensureDirectory(dirname(uploadPath));

  // Write the file to the public directory
  await writeFile(uploadPath, buffer);
  console.log(`File uploaded to: ${uploadPath}`);

  // Generate the image URL relative to the root of the application

  const imageUrl = `${file.name}`;
  // const imageUrl = `/public/${file.name}`;

  return NextResponse.json({ success: true, imageUrl });
}

async function ensureDirectory(dirPath) {
  try {
    await writeFile(join(dirPath, ".empty"), ""); // Create an empty file to indicate directory existence
  } catch (err) {
    if (err.code === "ENOENT") {
      // Directory doesn't exist, create it recursively
      await ensureDirectory(dirname(dirPath));
      await writeFile(dirPath, ".empty");
    } else {
      throw err; // Re-throw other errors
    }
  }
}
