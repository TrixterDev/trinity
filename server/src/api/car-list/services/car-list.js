'use strict';

/**
 * car-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-list.car-list');
