'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'hi, admin';
    }
}

module.exports = AdminController;
