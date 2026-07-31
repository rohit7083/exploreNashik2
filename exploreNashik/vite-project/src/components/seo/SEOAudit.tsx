// SEO Accessibility Checker - Development tool to find SEO issues
import React, { useEffect, useState } from 'react';

interface SEOIssue {
  severity: 'critical' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
}

export const useSEOAudit = () => {
  const [issues, setIssues] = useState<SEOIssue[]>([]);

  useEffect(() => {
    const audit = () => {
      const foundIssues: SEOIssue[] = [];

      // Check for meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        foundIssues.push({
          severity: 'critical',
          message: '❌ Missing meta description tag'
        });
      }

      // Check for page title
      const titleTag = document.querySelector('title');
      if (!titleTag || titleTag.textContent === '') {
        foundIssues.push({
          severity: 'critical',
          message: '❌ Missing or empty page title'
        });
      }

      // Check for images without alt text
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const alt = img.getAttribute('alt');
        if (!alt || alt.length < 10) {
          foundIssues.push({
            severity: 'warning',
            message: `⚠️ Image has missing or short alt text: "${alt || 'missing'}"`,
            element: img
          });
        }
      });

      // Check for H1 tags
      const h1Tags = document.querySelectorAll('h1');
      if (h1Tags.length === 0) {
        foundIssues.push({
          severity: 'critical',
          message: '❌ Missing H1 tag on page'
        });
      } else if (h1Tags.length > 1) {
        foundIssues.push({
          severity: 'warning',
          message: `⚠️ Multiple H1 tags found (${h1Tags.length}). Should only have one.`
        });
      }

      // Check heading hierarchy
      let lastHeadingLevel = 1;
      document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
        const level = parseInt(heading.tagName[1]);
        if (level - lastHeadingLevel > 1) {
          foundIssues.push({
            severity: 'warning',
            message: `⚠️ Heading hierarchy skip detected: ${heading.tagName} after H${lastHeadingLevel}`
          });
        }
        lastHeadingLevel = level;
      });

      // Check for canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        foundIssues.push({
          severity: 'warning',
          message: '⚠️ Missing canonical URL tag'
        });
      }

      // Check viewport meta tag
      const viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        foundIssues.push({
          severity: 'critical',
          message: '❌ Missing viewport meta tag (mobile responsiveness)'
        });
      }

      // Check for schema markup
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      if (schemaScripts.length === 0) {
        foundIssues.push({
          severity: 'info',
          message: 'ℹ️ No schema markup found. Consider adding structured data.'
        });
      }

      setIssues(foundIssues);
    };

    // Run audit after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', audit);
      return () => document.removeEventListener('DOMContentLoaded', audit);
    } else {
      audit();
    }
  }, []);

  return issues;
};

interface SEOAuditDisplayProps {
  showOnly?: ('critical' | 'warning' | 'info')[];
}

export const SEOAuditDisplay: React.FC<SEOAuditDisplayProps> = ({ showOnly = ['critical', 'warning'] }) => {
  const issues = useSEOAudit();
  const filteredIssues = issues.filter(issue => showOnly.includes(issue.severity));

  if (filteredIssues.length === 0) {
    return null;
  }

  const criticalCount = filteredIssues.filter(i => i.severity === 'critical').length;
  const warningCount = filteredIssues.filter(i => i.severity === 'warning').length;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-red-300 p-4 z-50">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-red-600 dark:text-red-400">
          SEO Issues Found
        </h3>
        <span className="text-sm font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
          {criticalCount + warningCount}
        </span>
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto text-sm">
        {filteredIssues.map((issue, index) => (
          <div
            key={index}
            className={`p-2 rounded border-l-4 ${
              issue.severity === 'critical'
                ? 'bg-red-50 dark:bg-red-900/20 border-l-red-600 text-red-800 dark:text-red-300'
                : 'bg-yellow-50 dark:bg-yellow-900/20 border-l-yellow-600 text-yellow-800 dark:text-yellow-300'
            }`}
          >
            {issue.message}
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-3">
        💡 Development only. Check console for details.
      </p>
    </div>
  );
};

export default SEOAuditDisplay;
