// Breadcrumb Component with Schema
import { generateBreadcrumbSchema } from '@/utils/seoSchemas';
import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const breadcrumbUrls = items.map(item => ({
    name: item.name,
    url: `https://explorenashik.in${item.path}`
  }));

  return (
    <>
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(generateBreadcrumbSchema(breadcrumbUrls))}
      </script>

      {/* Visual Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-3 px-4 text-sm">
        <ol className="flex items-center gap-2 flex-wrap">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-gray-400 mx-1">/</span>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-orange-600 dark:text-orange-400 hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
