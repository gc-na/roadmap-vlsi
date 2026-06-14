import type { OfficialRoadmapQuestion } from '../queries/official-roadmap';
import { renderMarkdownFromJson } from './markdown-renderer';

type ArticleSchemaProps = {
  url: string;
  headline: string;
  description: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
};

export function generateArticleSchema(article: ArticleSchemaProps) {
  const { url, headline, description, imageUrl, datePublished, dateModified } =
    article;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: headline,
    description: description,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: 'VLSI Korea',
      url: 'https://vlsi.kr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VLSI Korea',
      logo: {
        '@type': 'ImageObject',
        url: 'https://roadmap.vlsi.kr/favicon.svg',
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
  };
}

export function generateFAQSchema(faqs: OfficialRoadmapQuestion[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: renderMarkdownFromJson(faq.description, { join: ' ' }),
      },
    })),
  };
}
