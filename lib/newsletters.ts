import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export const newsletterDirectory = path.join(process.cwd(), 'newsletter-episodes');

export async function getNewslettersData(id: string) {
  const fullPath = path.join(newsletterDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
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
