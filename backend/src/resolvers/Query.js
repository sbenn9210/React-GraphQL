const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db")
  // async items(parents, args, ctx, info) {
  //   const items = ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
