'use strict';

/**
 * article-de-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-de-blog.article-de-blog');
