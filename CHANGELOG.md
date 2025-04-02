# Changelog

All notable changes to German Magic Farm website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2024-03-31

### Added

- Contact form with Netlify Forms integration
- SEO component for better search engine optimization
- Clinic page with upcoming and past events
- Dynamic clinic filtering based on dates
- Link support for clinic events
- Loading states for data fetching components
- Error handling and logging

### Changed

- Migrated from custom email handling to Netlify Forms
- Updated form styling and user experience
- Improved responsive design for clinic cards
- Enhanced SEO metadata implementation

### Removed

- SMTP email configuration and environment variables
- Server-side form handling code
- Legacy HTML pages (redirected to new routes)

### Fixed

- Form submission handling
- Date parsing for clinic events
- Link icon display in clinic cards
- TypeScript type definitions

### Security

- Removed sensitive environment variables
- Implemented secure form handling through Netlify

## [0.1.0] - 2024-03-31

### Added

- Initial site setup with SvelteKit
- Basic routing structure
- Hero component
- Contact information display
- Logo components
- Basic styling with CSS variables

[0.2.0]: https://github.com/username/german-magic-farm/releases/tag/v0.2.0
[0.1.0]: https://github.com/username/german-magic-farm/releases/tag/v0.1.0
