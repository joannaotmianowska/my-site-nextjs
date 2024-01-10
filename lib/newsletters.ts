import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const newsletterDirectory = path.join(process.cwd(), 'newsletter-episodes');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(newsletterDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(newsletterDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getNewslettersData(slug: string) {
  const fullPath = path.join(newsletterDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    id: slug,
    ...matterResult.data,
  };
}

export function getAllNewslettersSlugs() {
  const fileNames = fs.readdirSync(newsletterDirectory);
  console.log(fileNames)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
