'use strict';
// نقطة دخول Vercel: كل طلبات /api/* تعدّي من هنا
const { handle } = require('../lib/core');
module.exports = (req, res) => handle(req, res);
