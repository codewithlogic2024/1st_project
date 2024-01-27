import { BlogRouter } from "../modules/blogs/router/blog-router";
import { GlossaryRouter } from "../modules/glossary/router/glossary-router";
import { InfographicRouter } from "../modules/infography/router/infographic-router";
import { LoginRouter } from "../modules/login/router/login-router";
import { TosRouter } from "../modules/tales-of-startups/router/tos-router";

export const IndexRouter = [
  ...LoginRouter,
  ...BlogRouter,
  ...InfographicRouter,
  ...GlossaryRouter,
  ...TosRouter
];
