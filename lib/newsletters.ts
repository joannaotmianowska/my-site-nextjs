import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const newsletterDirectory = path.join(process.cwd(), 'newsletter-episodes');

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
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
